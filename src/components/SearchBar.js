import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar=()=>{
    return (
    <View style={styles.bg}>
        <Feather name="search" size={30}/>
        <Text>Search Bar</Text>
    </View>
    );
};

const styles=StyleSheet.create({
    bg: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
        
      },
});

export default SearchBar;