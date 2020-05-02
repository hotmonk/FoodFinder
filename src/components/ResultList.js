import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';


const ResultList=({title, results, navigation}) =>{
    if(!results.length)
    {
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text>Results: {results.length}</Text> */}
        <FlatList
        horizontal
        data={results}
        keyExtractor={(result)=>result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>{
        return (
        <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow', {id: item.id})}>
        <ResultsDetail result={item}/>
        </TouchableOpacity>
        )
        }}
        />
    </View>
};

const styles=StyleSheet.create({
    title: {
        marginLeft:15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    container:{
        marginBottom:10
    }
});


export default withNavigation(ResultList);