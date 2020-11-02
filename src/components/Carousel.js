import React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';

const Carousel = ({
    result,
}) => (
        <FlatList
            data={result.photos}
            horizontal={true}
            keyExtractor={(photo)=>photo}
            renderItem={({ item })=>{
                return <Image style={styles.image} source={{ uri: item }} />
            }}
        />
);

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginRight: 20
    }
})

export default Carousel;
