import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native'
import React from 'react'

const TabButton =({name,activedTab,onHandleSearch})=>{
  return (
    <TouchableOpacity
    style={name===activedTab ? styles.activeTabButton : styles.tabBtn}
    onPress={onHandleSearch}
  >
    <Text style={ name===activedTab ? styles.activeTabName :  styles.tabName}>{name}</Text>
  </TouchableOpacity>
  )
}

const Tabs = ({tabs,activedTab,setActivedJob}) => {
  return (
    <View style={styles.container}>
      <FlatList  data={tabs} renderItem={({item})=>{
        return (
          <TabButton key={item} name={item} activedTab={activedTab} onHandleSearch={()=>setActivedJob(item)}/>
        )
      }}
      horizontal 
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{columnGap:10}}
       />
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
  container:{
    marginTop:10
  },
  tabBtn:{
    borderWidth:1,
    borderColor:'grey',
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:10,
    marginHorizontal:10
  },
  activeTabButton:{
    borderWidth:1,
    borderColor:'white',
    backgroundColor:'#312651',
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:10,
    marginHorizontal:10
  },
  tabName:{
    color:'black'
  },
  activeTabName:{
    color:'white'
  }
})