import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Stars from 'react-native-stars';
import { FontAwesome } from '@expo/vector-icons';

const Review = ({
    item
}) => {
    return(
    <View style={styles.container} elevation={2} >
        <View>
            <Image style={styles.image} source={{ uri: item.user.image_url }} />
            <Text style={styles.name} >{item.user.name}</Text>
        </View>
        <View style={styles.section}>
            <Stars
                half={true}
                default={item.rating}
                spacing={4}
                starSize={40}
                count={5}
                fullStar={<FontAwesome name="star" size={24} color="gold" />}
                emptyStar={<FontAwesome name="star-o" size={24} color="gold" />}
                halfStar={<FontAwesome name="star-half" size={24} color="gold" />}/>
            <Text style={styles.text} >{item.text}</Text>
        </View>
    </View>
)};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        paddingVertical: 10,
        borderColor: 'red',
        marginHorizontal: 20
    },
    image: {
        height: 80,
        width: 80,
        margin: 20,
        borderRadius: 50
    },
    name:{
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: "center"
    },
    section: {
        flexDirection: "column",
        justifyContent: "center",
        flex: 1
    },
    text: {
        margin: 5
    }
})

export default Review;
