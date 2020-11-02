import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, FlatList, View, Linking, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import yepl from '../api/yepl';
import Review from '../components/Review';
import Carousel from '../components/Carousel';

const ResultsShowScreen = ({
    navigation,
}) => {
    const [result, setResult] = useState(null);
    const [reviews, setReviews] = useState([]);
    const id = navigation.getParam('id');
    
    const getResult = async(id) => {
        const response = await yepl.get(`/${id}`);
        setResult(response.data)
    }
    const getReviews = async(id) => {
        const response = await yepl.get(`/${id}/reviews`);
        const Array = response.data.reviews
        setReviews(Array)
    }

    useEffect(() => {
        getResult(id)
        getReviews(id)
    }, []);

    if(!result){
        return null
    }
    return(
        <View style={styles.container} >
            <FlatList
                ListHeaderComponent={
                    <View style={styles.header} >
                        <Text style={styles.heading} >{result.name}</Text>
                        <Carousel result={result} />
                        <Text style={styles.heading}>Reviews</Text>
                    </View>
                }
                stickyHeaderIndices={[0]}
                data={reviews}
                keyExtractor={(item)=>item.id}
                renderItem={({ item })=><Review item={item} />}
            />
            <FontAwesome.Button style={styles.button} name="phone" backgroundColor="forestgreen" onPress={()=>Linking.openURL(`tel:${result.phone}`)}>
                Call To Book
            </FontAwesome.Button>
        </View>
)};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white'
    },
    container: {
        paddingBottom: 40 
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 20
    },
    button: {
        justifyContent: 'center'
    }
})

export default ResultsShowScreen;
