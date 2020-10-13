import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Searchbar = ({
    term, onChangeTerm, onSubmitTerm
}) => (
    <View style={styles.inputContainer} >
        <Feather style={styles.icon} name="search" /> 
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input} 
            placeholder="search"
            term={term}
            onChangeText={onChangeTerm}
            onEndEditing={onSubmitTerm}
        />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 10,
        backgroundColor: '#d6d6d6',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    input: {
        fontSize: 18,
        flex: 1
    },
    icon: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
})

export default Searchbar;