import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({
    item
}) => (
    <View style={styles.container} >
        <Image style={styles.image} source={{ uri: item.image_url }} />
        <Text style={styles.name} >{item.name}</Text>
        <Text>
            {item.rating} Stars, {item.review_count} Review
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15
    },
    image: {
        width: 250,
        borderRadius: 4,
        height: 120,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'
    }
})

export default ResultsDetail;
