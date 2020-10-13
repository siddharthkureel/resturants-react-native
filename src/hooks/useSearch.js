import { useState, useEffect } from 'react';
import yelp from '../api/yepl';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const searchApi = async (term) => {
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term,
                    location: 'auckland'
                }
            })
            setResults(response.data.businesses);
        } catch (error) {
            setError('something went wrong')
        }
    }
    
    useEffect(() => {
        searchApi('pasta')
    }, []);
    return [results, error, searchApi];
}