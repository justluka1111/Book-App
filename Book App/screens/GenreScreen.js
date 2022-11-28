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

function GenreScreen({ navigation, route }) {
    const DATA1 = [
    {
      title:'World strongest Man', 
    author:'Peter', 
    nPages: 400, 
    Genre: 'Romance'
    },
    {
      title:'Next-gen technologies', 
      author:'Samson', 
      nPages: 220, 
      Genre: 'Sci-Fi'
      },
    {
      title:'Auto-pilot systems',
      author:'Victoria',
      nPages: 700,
      Genre: 'Science'
      }];

// const Item = ({ title }) => (
//   <View >
//     <Text>{title}</Text>
//   </View>
//        );

 
  const renderItem = ({ item}) => 
  <Text style={styles.titleHist}>{item.Genre}:{item.nPages}</Text>


  return (
    <>
    <SafeAreaView >

      <View>
      <Text>Welcome to Genre screen</Text>

  <FlatList data={DATA1} renderItem={renderItem} keyExtractor={item => item.title} />

<IconHome name="home" size={40} color="#black" onPress={()=>{navigation.navigate('Home')}} />
      </View>
  <Button title="Done" onPress={() => {navigation.navigate({name: 'Home',});}}/>     
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
}
);
export default GenreScreen;