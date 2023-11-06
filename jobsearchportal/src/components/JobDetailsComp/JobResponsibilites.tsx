import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JobResponsibilites = ({responsibility}) => {
  console.log(responsibility)
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Responsibilities:</Text>

      {
        responsibility.map((item,index)=>{
          return(
            <View key={index} style={styles.itemWrapper}>
              <View style={styles.dotPoint}></View>
              <Text style={{fontSize:17,color:'black'}}>{item}</Text>
            </View>
          )
        })
      }
    </View>
  )
}

export default JobResponsibilites

const styles = StyleSheet.create({
  container: {
    marginTop:10
  },
  heading: {
    margin:20,
    fontSize:20,
    color:'black'
  },
  dotPoint:{
    width:10,
    height:10,
    borderRadius:5,
    borderColor:'black',
    borderWidth:1
  },
  itemWrapper:{
    flexDirection:'row',
    alignItems: 'center',
    columnGap:10,
    marginHorizontal:30
  }
})