import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View,Button,Image, SafeAreaView } from 'react-native';
import {mainViewstyle,view1style,view2style,view3style} from './style';
import Login from './Login';
import MyFlatlist from './MyFlatlist';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='MyFlatlist' component={MyFlatlist}/>

    </Stack.Navigator>
  </NavigationContainer>
}


