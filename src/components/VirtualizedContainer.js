import React from 'react';
import { Text, StyleSheet, FlatList, Image, View, ScrollView, Linking, TouchableOpacity, LogBox } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Reviews from './Reviews';
import Carousel from './Carousel';

const VirtualizedContainer = ({
    result,
    reviews
}) => (
    <View>
        <Text style={styles.heading} >{result.name}</Text>
        <Carousel result={result}/>
        <Reviews reviews={reviews} />
        <TouchableOpacity style={styles.button}  onPress={()=>Linking.openURL(`tel:${result.phone}`)}>
            <MaterialIcons name="call" size={38} color="green" />
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    image: {
        height: 200,
        flex: 1,
    },
    container: {
        margin: 20
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    button: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10,
        height:70,
        backgroundColor: 'transparent',
        borderRadius:100,
    }
})


export default VirtualizedContainer;
