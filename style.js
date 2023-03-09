import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Button,Image, BackHandler } from 'react-native';

const mainViewstyle = StyleSheet.create({
    container:{
        flex:1,
    marginTop:0,
    backgroundColor:'lightgrey',
    alignContent:'center'}
    })
    const view1style = StyleSheet.create({
        view1:{
            flex:0.4,
            backgroundColor:"lightgrey",
            alignItems:'center',
            alignContent:'center',
            paddingTop:50
        }
    })
    const view2style = StyleSheet.create({
        view2:{
            flex:0.5,
            backgroundColor:'lightgrey',
            //alignContent:'center',
            alignItems:'center',
            paddingTop:40
        }
    })
    
    const view3style = StyleSheet.create({
        view3:{
            flex:0.6,
            backgroundColor:'lightgrey',
            alignItems:'center',
            marginTop:0,
            //marginBottom:20,
            //flexDirection:'row',
            paddingHorizontal:50,
            //paddingBottom:80
        }
    })
    const view4style =StyleSheet.create({
        view4:{
            flex:0.2,
            backgroundColor:'lightgrey',
            alignContent:'center',
            alignItems:'center',

        }

    })
    const view5style =StyleSheet.create({
        view5:{
            flex:0.4,
            backgroundColor:'lightgrey',
            alignItems:'center',
            alignContent:'center'

        }
        
    })
    const view6style =StyleSheet.create({
        view6:{
            flex:0.1,
            backgroundColor:'lightgrey'

        }
        
    })


export {mainViewstyle,view1style,view2style,view3style,view4style,view5style,view6style};
