import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcStarOn, IcStarOff } from '../../../assets'

const Rating = () => {
    return (
        <View style={styles.ratingcontainer}>
                <View style={styles.starcontainer}>
                    <IcStarOn/>
                    <IcStarOn/>
                    <IcStarOn/>
                    <IcStarOn/>
                    <IcStarOn/>
                    <IcStarOff/>
                </View>
                <Text>4.5</Text>
            </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    starcontainer:{
        flexDirection:'row'
    },

    ratingcontainer:{
        flexDirection:'row',
        
    },
})
