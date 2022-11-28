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
import AdditionScreen from './screens/AdditionScreen';
import GenreScreen from './screens/GenreScreen';
import HistoryScreen from './screens/HistoryScreen';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function App() {
 
  return (
  
    <NavigationContainer>
    
      <Stack.Navigator mode="modal">      
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddBook" component={AdditionScreen} />
        <Stack.Screen name="Hist" component={HistoryScreen} />
        <Stack.Screen name="Genre" component={GenreScreen} />

      </Stack.Navigator>
      
    </NavigationContainer>

    
  );
}
