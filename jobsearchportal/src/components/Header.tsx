import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import userProfile from '../assets/profileImage.jpg'
import { Bars3CenterLeftIcon } from 'react-native-heroicons/outline'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Bars3CenterLeftIcon size={30} color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={userProfile} style={styles.profilePhotoHeight}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#7F8389',
        elevation: 20,
        padding: 10,
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    profilePhotoHeight:{
        height:50,
        width:50,
        borderRadius: 10
    }
})