import React from 'react';
import { withNavigation } from 'react-navigation';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({
    title, results, navigation
}) => {
    if(!results.length){
        return null
    }
    return(
    <View style={styles.container} >
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(result)=>result.id}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow', { id: item.id })} >
                    <ResultsDetail item={item} />
                </TouchableOpacity>)}
            showsHorizontalScrollIndicator={false}
        />
    </View>
)};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 20
    }
})

export default withNavigation(ResultsList);
