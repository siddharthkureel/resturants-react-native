import React,{ useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import Searchbar from '../components/Searchbar';
import useSearch from '../hooks/useSearch';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, error, searchApi] = useSearch();

    const filterByPrice = (price) => {
        return results.filter(result=>result.price===price)
    }

    return(
        <>
            <Searchbar 
                term={term} 
                onChangeTerm={setTerm}
                onSubmitTerm={searchApi}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList title="Cost effective" results={filterByPrice('$')} />
                <ResultsList title="Bit pricier" results={filterByPrice('$$')} />
                <ResultsList title="Big spender" results={filterByPrice('$$$')} />
                <ResultsList title="Affluent" results={filterByPrice('$$$$')} />
            </ScrollView>
        </>
    )
};

export default SearchScreen;
