import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import yepl from '../api/yepl';

const ResultsShowScreen = ({
    navigation,
}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async(id) => {
        const response = await yepl.get(`/${id}`);
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, []);

    if(!result){
        return null
    }
    return(
    <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{ uri: item }} />
            }}
        />
    </View>
)};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default ResultsShowScreen;