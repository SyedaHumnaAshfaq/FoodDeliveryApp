import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View,Button,Image, SafeAreaView } from 'react-native';
import {mainViewstyle,view1style,view2style,view3style} from './style';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Login = ({navigation})=> {
  return (
    <View style={mainViewstyle.container}>
      <View style={{alignItems:'flex-start',marginTop:100}}><Text style={{textAlign:'center',fontSize:25,marginLeft:15,fontWeight:'bold'}}>Welcome</Text></View>
      <View style={view1style.view1}>
      <Image source={require('./assets/logo.png')} style={{width:380,height:100,alignItems:'center',marginTop:20,resizeMode:'stretch'}} />
      {/* <Text style={{fontSize:50,fontFamily:''}}>FOODIE MOODIE</Text> */}
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
        onPress={()=>navigation.navigate('MyFlatlist')}
        color='black'>

        </Button>
      </View>
    </View>
  );
  
}
export {Login};


