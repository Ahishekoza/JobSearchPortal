import { StyleSheet, Text, View, TouchableOpacity,ActivityIndicator,FlatList } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch'
import NearByJobCard from './cards/NearByJobCard'

const NearByJobs = ({navigation}) => {

  const {isLoading,error,data} = useFetch('search',{
    query:'React Native Developer in India',
    num_pages:'1'
  })

 

  
 
  return (
    <View style={styles.nearByJobsContainer}>
      <View style={styles.nearByJobsHeader}>
        <Text style={styles.nearByJobsTitle}>Near By Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.nearByJobsBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ? 
          <ActivityIndicator size={'large'} color={'grey'} />
          :
          error ?
          <Text>Something Went Wrong</Text>
          :
          <FlatList  data={data} renderItem={({item})=>{
            return(
             <NearByJobCard key={item.job_id}  item={item} handleNavigate={()=>navigation.navigate('JobDetails',{item:item})}/>
            )
          }}/>
        }
      </View>
    </View>
  )
}

export default NearByJobs

const styles = StyleSheet.create({
  nearByJobsContainer: {
    marginTop: 10
  },
  nearByJobsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  nearByJobsTitle: {
    fontSize: 20,
    color: 'black'
  },
  nearByJobsBtn: {
    fontSize: 17,
    color: 'grey',
  },
  cardsContainer: {
    marginTop: 10
  }
})