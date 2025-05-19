import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import icon from "../assets/Icon.png";
import dp from "../assets/dp.png";
import { useNavigation } from "@react-navigation/native";

const Header = ({ isCart }) => {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("HOME_STACK")} style={styles.Iconcontainer}>
        {isCart ? (
          <Ionicons name={"chevron-back"} color={"#E96E6E"} size={24} />
        ) : (
          <Image source={icon} style={styles.Icon} />
        )}
      </TouchableOpacity>
      {isCart && <Text style={styles.myCart}>My Cart</Text>}
      <Image source={dp} style={styles.dp} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Iconcontainer: {
    backgroundColor: "#FFFFFF",
    height: 44,
    width: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  Icon: {
    height: 28,
    width: 28,
  },
  dp: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  myCart: {
    fontSize: 28,
    color: "black",
  },
});
