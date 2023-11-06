import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import PopularJobs from '../components/PopularJobs'
import NearByJobs from '../components/NearByJobs'

const HomeScreen = ({navigation}) => {
  const JobTypes = ['Full-Time', 'Part-Time', 'Contractor']
  const [activeJobType, setActiveJobType] = useState('Full-Time')
  const [searchTerm , setSearchTerm] = useState('')
  const handleActiveJobType = (item) => {
    setActiveJobType(item)
    navigation.navigate('Search', {searchTerm: item})
  }
  const handleSearch = ()=>{
    navigation.navigate('Search',{searchTerm: searchTerm})
  }
  return (
    <ScrollView>

      <View style={styles.searchContainer}>
        <TextInput
        value={searchTerm}
        onChangeText={(text)=> setSearchTerm(text)}
        style={styles.searchInput} 
        placeholderTextColor={'#7F8389'} 
        placeholder='What are you looking for?'
         />
        <TouchableOpacity onPress={handleSearch} style={styles.searchIconContainer}>
          <MagnifyingGlassIcon size={30} color={'white'} />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList data={JobTypes} horizontal renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => handleActiveJobType(item)}
              style={[styles.jobTypesContainer, activeJobType === item ? styles.activeJobType : '']}>
              <Text style={{ color: 'black' }}>{item}</Text>
            </TouchableOpacity>
          )
        }} />

      </View>

      <PopularJobs/>
      <NearByJobs navigation={navigation}/>
    </ScrollView >
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20
  },
  searchInput: {
    width: '80%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    elevation: 10,
    fontSize: 17
  },
  searchIconContainer: {
    backgroundColor: '#F5755A',
    padding: 10,
    borderRadius: 10,

  },
  jobTypesContainer: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 10
  },
  activeJobType: {
    borderColor: '#C1C0C8'
  }
})