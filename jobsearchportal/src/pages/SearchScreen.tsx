import { StyleSheet, Text, View, SafeAreaView, ScrollView, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PlusIcon, MinusIcon } from 'react-native-heroicons/outline'
import NearByJobCard from '../components/cards/NearByJobCard'

const SearchScreen = ({ navigation, route }) => {

    const { searchTerm } = route.params
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)


    const handleSearch = async () => {
        setIsLoading(true);
        setData([])

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: searchTerm,
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setData(response.data.data);
        } catch (error) {
            setError(error);
            console.log('error occured', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [page, searchTerm])



    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>Search Result : - <Text style={{ color: 'black' }}>{searchTerm}</Text></Text>
            {
                isLoading ?
                    <ActivityIndicator size={20} color={'grey'} />
                    :
                    error ?
                        <Text>Something Went Wrong</Text>
                        :

                        <FlatList data={data} renderItem={({ item, index }) => {
                            return (
                                <NearByJobCard key={index} item={item} handleNavigate={() => navigation.navigate('JobDetails', { item: item })} />
                            )
                        }} />


            }

            {
                isLoading ? '' :
                    <View style={styles.footerContainer}>
                        <TouchableOpacity style={{ backgroundColor: 'orange', borderRadius: 5, padding: 2 }} onPress={() => handlePagination('left')}>
                            <MinusIcon size={20} color={'black'} />
                        </TouchableOpacity>
                        <View >
                            <Text style={{ fontSize: 17, color: 'black' }}>{page}</Text>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: 'orange', borderRadius: 5, padding: 2 }} onPress={() => handlePagination('right')}>
                            <PlusIcon size={20} color={'black'} />
                        </TouchableOpacity>
                    </View>
            }

        </SafeAreaView>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1
    },
    headerText: {
        marginHorizontal: 10,
        fontSize: 20
    },
    footerContainer: {
        backgroundColor: 'white',
        elevation: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 10

    }
})