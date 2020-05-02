import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen=({navigation})=>{
    const [result, setResult]= useState(null);
    const id= navigation.getParam('id');
    console.log(id);
    // console.log(result);
    const getResult=async (id)=>{
    try{
        
            const response=await yelp.get('/${id}', {
                params: {
                    locale: 'en_US'
                }
            })
            console.log(response.data);
            setResult(response.data);
        
    

    }catch(err){
        console.log("the search didnt wor");
    }
};

    useEffect(()=>{
        getResult(id);
    }, []);

    if(!result)
    {
        return null;
    }
    return <View>
        <Text>Results Show</Text>
        <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri: item}}/>
        }}/>
    </View>
}

const style=StyleSheet.create({
    image:{
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;