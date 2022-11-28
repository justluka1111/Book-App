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


function AdditionScreen({ navigation, route }) {
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [nPages, setnPages] = React.useState('');
  const[selectedValue,setSelectedValue] = React.useState('');



  return (
    <>
      <TextInput
        placeholder="Enter title"
        style={{ height: 50, padding: 10, backgroundColor: 'white' }}
        value={title}
        onChangeText={setTitle}
      />
        <TextInput
       
        placeholder="Enter author"
        style={{ height: 50, padding: 10, backgroundColor: 'white' }}
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        placeholder="Enter Pager numbers"
        style={{ height: 50, padding: 10, backgroundColor: 'white' }}
        value={nPages}
        onChangeText={setnPages}
      />
         <View>
             <Text >Genre:</Text>
             <Picker selectedValue={selectedValue} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
             <Picker.Item label="Action" value="action" />
             <Picker.Item label="Anime" value="anime" />
             <Picker.Item label="Comedy" value="comedy" />
             <Picker.Item label="Fiction" value="fiction" />
             <Picker.Item label="Non-Fiction" value="non-fiction" />
             <Picker.Item label="Sci-Fi" value="sci-fi" />
             </Picker>
            </View>


      <Button
        title="Add Book"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {bookAdded:true, post: title, post1:author, post2:nPages, post3:selectedValue},
            merge: true,
          });
        }}
      />
          <View styles={styles.horisontal}>

  <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', justifyContent:"space-evenly"}}>   
        <IconHome name="home" size={40} color="#black" onPress={() => navigation.navigate('Home')} />
</TouchableOpacity>
 
      </View>
    </>
    
  );
}
const styles = StyleSheet.create({
  
    horisontal:{
  //  flex:1,
    alignItems:'bottom',
    justifyContent:'space-between',
    flexDirection:'row',
 },
      
}
);
export default AdditionScreen;