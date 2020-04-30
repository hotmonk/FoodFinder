import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default()=>{
    const [results, setResults]= useState([]);
    const [errorMessage, setErrorMessage]=useState('');

    const searchApi=async (searchTerm)=>{
        console.log('searchapi called');
        try{
        const response=await yelp.get('/search', {
            params: {
                limit: 25,
                term: searchTerm,
                location: 'san jose '
            }
        });
        setResults(response.data.businesses);
        setErrorMessage('');
    }catch(err){
        setErrorMessage('Something went wrong');
    }
    }

    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [searchApi, results, errorMessage];
};