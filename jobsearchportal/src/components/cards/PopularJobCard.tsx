import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity style={item.job_id === selectedJob ? styles.selectedContainer : styles.container} onPress={() => handleCardPress(item)}>
      <View>
        <Image resizeMode='contain' source={{ uri: item.employer_logo ? item.employer_logo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg' }} style={styles.logoHeight} />
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>

        <View style={styles.companyInfoContainer}>
          <Text style={ item.job_id === selectedJob ? styles.selectedJobTitle : styles.jobTitle} numberOfLines={1}>{item.job_title}</Text>
          <View style={styles.jobInfoWrapper}>
            <Text style={ item.job_id === selectedJob ? styles.selectedJobPublisherAndLocation :styles.jobPublisherAndLocation}>{item.job_publisher}</Text>
            <Text style={item.job_id === selectedJob ? styles.selectedJobPublisherAndLocation :styles.jobPublisherAndLocation}>{item.job_country}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard

const styles = StyleSheet.create({
  container: {
    width: 250,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 10,
  },
  selectedContainer: {
    width: 250,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#312651'
  },
  logoHeight: {
    height: 50,
    width: 50,
    borderRadius: 10,

  },
  companyName: {
    color: '#B3AEC6',
    marginTop: 5,
    fontSize: 15
  },
  companyInfoContainer: {
    marginTop: 10,
  },
  jobTitle: {
    fontSize: 18,
    color: '#312651'
  },
  selectedJobTitle:{
    fontSize: 18,
    color:'white',
  },
  jobInfoWrapper:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding:2,
    marginTop:5
  },
  jobPublisherAndLocation:{
    fontSize:16,
    color:'#312651'
  },
  selectedJobPublisherAndLocation:{
    fontSize:16,
    color:'white'
  },
  jobLocation: {
    fontSize: 16,
    color: '#B3AEC6',

  }
})