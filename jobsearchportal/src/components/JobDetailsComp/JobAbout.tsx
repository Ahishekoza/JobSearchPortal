import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JobAbout = ({about}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:17,color:'black'}}>{about}</Text>
    </View>
  )
}

export default JobAbout

const styles = StyleSheet.create({
  container: {
    margin:20
  }
})