import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native'
import React, { useState } from 'react'
import PopularJobCard from './cards/PopularJobCard'
import useFetch from '../../hook/useFetch'

const PopularJobs = () => {
  const { isLoading, error, data } = useFetch("search", {
    query: 'React Developer In India',
    num_pages: '1'

  })
  const [selectedJob, setSelectedJob] = useState()

  const handleCardPress = (item) => {
    setSelectedJob(item.job_id)
  }
  return (
    <View style={styles.popularJobsContainer}>
      <View style={styles.popularJobsInnerContainer}>
        <Text style={styles.popularJobsTitle}>
          Popular Jobs
        </Text>
        <TouchableOpacity>
          <Text style={styles.popularJobsBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          isLoading ?
            <ActivityIndicator size={'large'} color={'grey'} />
            : error ?
              <Text>Something Went Wrong</Text>
              :
              <FlatList horizontal  data={data}
                renderItem={({ item }) => (
                  <PopularJobCard item={item} selectedJob={selectedJob} handleCardPress={handleCardPress} />
                )}
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{ columnGap: 10 }}
              />
        }
      </View>
    </View>
  )
}

export default PopularJobs

const styles = StyleSheet.create({
  popularJobsContainer: {
    width: '100%',
    marginVertical: 20
  },
  popularJobsInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  popularJobsTitle: {
    fontSize: 20,
    color: 'black'
  },
  popularJobsBtn: {
    fontSize: 17,
    color: 'grey',
  },
  cardsContainer: {
    marginTop: 10
  }
})