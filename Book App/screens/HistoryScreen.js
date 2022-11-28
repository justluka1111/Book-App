import React, {useState} from 'react';
import { Text, TextInput, View, 
Button,StyleSheet
,Flatlist,ImageBackground,
SafeAreaView,
FlatList,
ListItem,
Image,
TouchableOpacity,
 }
 from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import IconGenre from 'react-native-vector-icons/Entypo';
import IconPlus from 'react-native-vector-icons/AntDesign';
import IconHome from 'react-native-vector-icons/AntDesign';
import IconHistory from 'react-native-vector-icons/FontAwesome';

function HistoryScreen({ navigation, route }) {
  // const image = { uri: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" };

  // https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80

    const DATA = [
    {
      title:'After', 
    author:'Anna Todd', 
    nPages: 582, 
    Genre: 'Romance'
    },
    {
      title:'The Expanse', 
      author:'James S.A. Corey', 
      nPages: 572, 
      Genre: 'Sci-Fi'
      },
    {
      title:'Caves',
      author:' Nell Cross Beckerman ',
      nPages: 40,
      Genre: 'Science'
      }];

const Item = ({ title }) => (
  <View >
    <Text>{title}</Text>
  </View>
);


  const renderItem = ({ item}) => 
  // <Item title={item.Genre}  />;
  <Text style={styles.titleHist}>
    Title: {item.title}{'\n'}
    Author: {item.author}{'\n'}
    Pages: {item.nPages}{'\n'}
    Genre: {item.Genre}{'\n'}
  </Text>

  



  return (
    <>
    <SafeAreaView >

      <View>

  <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.title} />
      
      <IconHome name="home" size={40} color="#black" onPress={()=>{navigation.navigate('Home')}} />
      </View>
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
           });
        }}
      />     
       </SafeAreaView>

    </>
);
}

const styles = StyleSheet.create({
  
  titleHist: {
    fontSize: 20,
    // backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
export default HistoryScreen;