import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screen/HomeScreen";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetailsScreen from "./src/screen/ProductDetailsScreen";
import CartScreen from "./src/screen/CartScreen";
import { CartContext, CartProvider } from "./src/context/CartContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const MyHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="PRODUCT_DETAILS" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#E96E6E",
          }}
        >
          <Tab.Screen
            name="HOME_STACK"
            component={MyHomeStack}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <Entypo name="home" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="REORDER"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <MaterialIcons name="reorder" size={size} color={color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="CART"
            component={CartScreen}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                const { carts } = useContext(CartContext);
                return (
                  <View style={{ position: "relative" }}>
                    <MaterialCommunityIcons
                      name={"cart"}
                      size={size}
                      color={color}
                    />
                    <View style={{
                      height:14,
                      width:14,
                      borderRadius:7,
                      backgroundColor: color,
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: -10,
                      right: -5,
                    }}>
                      <Text style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "500"
                      }}>{carts?.length}</Text>
                    </View>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="ACCOUNT"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ size, focused, color }) => {
                return <FontAwesome6 name="user" size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;

// const styles = StyleSheet.create({})
