import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View,Button,Image, SafeAreaView } from 'react-native';
import {mainViewstyle,view1style,view2style,view3style} from './style';

export default function Login() {
  return (
    <View style={mainViewstyle.container}>
      <View style={view1style.view1}>
      <Image source={require('./assets/favicon.png')} style={{width:100,height:100,alignItems:'center',marginTop:50}} />
      </View>
      <View style={view2style.view2}>
        <Text style={{fontSize:20,paddingHorizontal:150}}>Username</Text>
        <TextInput style={{    
          height: 40,
          width:180,
          margin: 12,
          borderWidth: 1,
          paddingHorizontal:190,
          padding: 10,}}></TextInput>
        <Text style={{fontSize:20,paddingHorizontal:150}}>Password</Text>
        <TextInput style={{    
          height: 40,
          width:180,
          margin: 12,
          borderWidth: 1,
          paddingHorizontal:190,
          padding: 10,}}></TextInput>
      
      </View>
      <View style={view3style.view3}>
        <Button
        title="     LOG IN      "
        color='black'></Button>
      </View>
    </View>
  );
}


