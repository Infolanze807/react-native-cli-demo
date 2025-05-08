import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import icon from "../assets/Icon.png"
import dp from "../assets/dp.png"

const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.Iconcontainer}>
            <Image source={icon} style={styles.Icon} />
        </View>
     <Image source={dp} style={styles.dp} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    Iconcontainer:{
        backgroundColor:"#FFFFFF",
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: 'center'
    },
    Icon: {
        height:28,
        width:28,
    },
    dp: {
        height:44,
        width:44,
        borderRadius:22,
    }
})