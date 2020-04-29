import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar=({term, onTermChange, onTermSubmit})=>{
    return (
    <View style={styles.bg}>
        <Feather name="search" style={styles.iconStyle}/>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder="search" value={term} 
        onChangeText={onTermChange}
        // referance
        onEndEditing={()=>onTermSubmit()}/> 
        {/* actual calling         */}
    </View>
    );
};

const styles=StyleSheet.create({
    bg: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row"
      },
      inputStyle: {
        //   borderColor: 'black',
        //   borderWidth: 2,
          flex: 1,
          fontSize: 18,
      },
      iconStyle: {
          fontSize: 35,
          alignSelf: "center", 
          marginHorizontal: 15,
      }
});

export default SearchBar;