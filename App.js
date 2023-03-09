import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View,Button,Image, SafeAreaView } from 'react-native';
import {mainViewstyle,view1style,view2style,view3style} from './style';
import Login from './Login';
import MyFlatlist from './MyFlatlist';

export default function App() {
  return (
    <MyFlatlist/>

  );
}


