import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {MapPinIcon} from 'react-native-heroicons/outline'

const Company = ({ companyLogo, companyName, jobTitle, location }) => {
  return (
    <View style={styles.jobDetailsContainer}>
      <View style={styles.logoBox}>
        <Image style={styles.logoHeight} source={{ uri: companyLogo ? companyLogo : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg' }} />
      </View>
      <Text style={styles.jobTitle}>{jobTitle}</Text>
      <View  style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
        <Text style={{color:'black',fontSize:17}} >{companyName} /</Text>
        <MapPinIcon style={{marginHorizontal:5}} size={20} color={'grey'}/>
        <Text>{location}</Text>
      </View>
    </View>
  )
}

export default Company

const styles = StyleSheet.create({
  jobDetailsContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:20
  },
  logoBox:{
    height:90,
    width:90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderRadius:15
  },
  logoHeight:{
    height:'80%',
    width:'80%',
  },
  jobTitle:{
    textAlign: 'center',
    fontSize:25,
    color:'black',
    fontWeight:'bold',
    marginTop:10,
  }
 
})