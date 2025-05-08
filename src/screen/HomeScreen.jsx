import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from '../components/Category';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens']

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <LinearGradient colors={['#FDF0F3', '#FFFBFC']} style={styles.linearGradient}>
      <Header />
      <Text style={styles.Headertext}>Match Your Style</Text>

      <View style={styles.inputContainer}>
        <View style={styles.search}>
          <Fontisto name={"search"} size={26} color={"#C0C0C0"} />
        </View>
        <TextInput style={styles.textInput} placeholder='Search' placeholderTextColor="#C0C0C0" />
      </View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory} />
        )}
        keyExtractor={(item) => item}
        horizontal={true}
        showsHorizontalScrollIndicator={false} />
      {/* <Category /> */}
    </LinearGradient>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    padding: 20,
  },
  Headertext: {
    fontSize: 28,
    color: "#000000",
    marginTop: 25,
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  search: {
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,

  },
})