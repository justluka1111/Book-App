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
//import {Picker} from '@react-native-picker/picker';
import AdditionScreen from './AdditionScreen';
import GenreScreen from './GenreScreen';
import HistoryScreen from './HistoryScreen';
//import HomeScreen from './screens/HomeScreen';
import IconGenre from 'react-native-vector-icons/Entypo';
import IconPlus from 'react-native-vector-icons/AntDesign';
import IconHome from 'react-native-vector-icons/AntDesign';
import IconHistory from 'react-native-vector-icons/FontAwesome';

let totalBooks = 0;
function HomeScreen({ navigation, route }) {
    const image = { uri: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" };
    const [totalPages, setTotalPages] = React.useState(0);
    const [averagePages, setAveragePages] = React.useState(0);
    const [title, setTitle] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [nPages, setnPages] = React.useState('');
    const [num, setNum] = React.useState(0);


  React.useEffect(() => {
    if (route.params?.post) {
      if(route.params.bookAdded){
      totalBooks++;
      }
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
        setTitle(route.params?.post);
        setAuthor(route.params?.post1);
        setnPages(route.params?.post2);
//updating our new params
        setTotalPages(totalPages + parseInt(route.params?.post2));
        setAveragePages(totalPages/totalBooks);

         setAveragePages((parseFloat(totalPages).toFixed(2))/totalBooks);

        // const result = Number(StrNum);
        // setNum(parseInt(result));

    }
  }, [route.params?.post]);

    // var averagePages1 = parseInt(route.params?.post2) / totalBooks;

    // const result = Number({totalPages})/{totalBooks};
  // var result = parseInt({totalPages})/parseInt({totalPages});
  // const a =parseInt({totalPages});
  //   const b =parseInt({totalBooks});


const a = parseInt(totalPages);
    const b = parseInt(totalBooks);
    let result = parseFloat( a / b)

  return (

    <View >
        <Text style={styles.text}>Book Lib.</Text>
      <View style={styles.container} >
      <Text style={{ margin: 5 }}>Title: {route.params?.post}</Text>
      <Text style={{ margin: 5 }}>Author: {route.params?.post1}</Text>
      <Text style={{ margin: 5 }}>Pages: {route.params?.post2}</Text>
      <Text style={{ margin: 5 }}>Genre: {route.params?.post3}</Text>
      <Text style={{ margin: 5 }}>totalPages: {totalPages}</Text>
      <Text style={{ margin: 5 }}>averagePages: {result}</Text>
      <Text style={{ margin: 5 }}>counter: {totalBooks}</Text>
      </View>
      <View styles={styles.horisontal}>

  <TouchableOpacity onPress={() => {}} style={{ flexDirection: 'row', justifyContent:"space-evenly"}}>
      <IconPlus label="Home" name="plus" size={40} color="#black" onPress={() => navigation.navigate('AddBook')} />
      <IconHistory name="history" size={40} color="#black" onPress={() => navigation.navigate('Hist')} />
      <IconGenre name="music" size={40} color="#black" onPress={() => navigation.navigate('Genre')} />
        <IconHome name="home" size={40} color="#black" onPress={() => navigation.navigate('Home')} />
</TouchableOpacity>
 
      </View>


     </View>

  );
}
const styles = StyleSheet.create({
  
  
    horisontal:{
  //  flex:1,
    alignItems:'bottom',
    justifyContent:'space-between',
    flexDirection:'row',
 },
      container: {
      alignItems: 'center', 
    justifyContent: 'center',
    padding:40,
  },
    text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
}
);

export default HomeScreen;