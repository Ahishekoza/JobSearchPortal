import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const NearByJobCard = ({ item, handleNavigate }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={(item) => handleNavigate(item)} >

            <Image
                source={{
                    uri: item.employer_logo
                        ? item.employer_logo
                        : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
                }}
                resizeMode='contain'
                style={styles.logoContainer}
            />


            <View style={styles.textContainer}>
                <Text style={styles.jobName} numberOfLines={1}>
                    {item?.job_title}
                </Text>

                <Text style={styles.jobType}>{item?.job_employment_type}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default NearByJobCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FFF",
        shadowColor: 'white',
    },
    logoContainer: {
        width: 50,
        height: 50,

        borderRadius: 10,

    },

    textContainer: {
        flex: 1,
        marginHorizontal: 10,
    },
    jobName: {
        fontSize: 16,
        fontFamily: "DMBold",
        color: '#312651',
    },
    jobType: {
        fontSize: 16 + 2,
        fontFamily: "DMRegular",
        color: 'gray',
        marginTop: 3,
        textTransform: "capitalize",
    },
})