import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ item, handleLiked }) => {
    const navigation = useNavigation();
    // const isLiked = true;
    //   const [isLiked, setIsLiked] = useState(false);


    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("PRODUCT_DETAILS", { item })
        }} style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={styles.likeContainer}>
                <TouchableOpacity
                    onPress={() => {
                        handleLiked(item);
                    }}
                >
                    {item?.isLiked ? (
                        <AntDesign name={"heart"} size={20} color={"#E55B5B"} />
                    ) : (
                        <AntDesign name={"hearto"} size={20} color={"#E55B5B"} />
                    )}
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    coverImage: {
        height: 256,
        width: "90%",
        borderRadius: 20,
        marginVertical: 10,
        marginLeft: 10,
    },
    content: {
        paddingLeft: 15,
    },
    title: {
        fontSize: 18,
        color: "#444444",
        fontWeight: "600",
    },
    price: {
        fontSize: 18,
        color: "#9C9C9C",
        fontWeight: "600",
    },
    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
        position: "absolute",
        top: 20,
        right: 20,
    },
});
