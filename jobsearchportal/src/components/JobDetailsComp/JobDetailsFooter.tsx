import { StyleSheet, Text, View, TouchableOpacity ,Linking } from 'react-native'
import React from 'react'

const JobDetailsFooter = ({ url }) => {
    return (
        <View style={{ padding: 20, elevation: 24 ,flexDirection:'row',justifyContent:'space-between' }}>
            <View></View>
            <TouchableOpacity
            onPress={()=>Linking.openURL(url)} 
            style={{backgroundColor:'#AA4C41',width:'60%',padding:10,borderRadius:10}}>
                <Text style={{ textAlign: 'center',fontSize:20 ,color:'white' }}>Apply for Job</Text>
            </TouchableOpacity>
        </View>
    )
}

export default JobDetailsFooter

const styles = StyleSheet.create({})