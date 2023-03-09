import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert,Image} from 'react-native';
import { mainViewstyle,view1style,view2style,view3style,view4style,view5style,view6style} from './style';
export default function MyFlatlist() {
  const [myarray,setmyarray] = useState([
    {
      key:0,
      title:'Burger'      

    },
    {
      key:1,
      title:'Pizza'
    },
    {
      key:3,
      title:'Pasta'
    },
    {
      key:4,
      title:'Macaroni'
    },
    
    {
      key:5,
      title:'Biryani'
    },
    
    {
      key:6,
      title:'Palao'
    },
    
    
  ])
  const [myimagearray,setmyimagearray] = useState([
    {
      key:0,
      title:'Burger',
      photo:require('./assets/burger.jpg')   

    },
    {
      key:1,
      title:'Pizza',
      photo:require('./assets/pizza.jpg') 
    },
    {
      key:3,
      title:'Pasta',
      photo:require('./assets/pasta.jpg') 
    },
    {
      key:4,
      title:'Macaroni',
      photo:require('./assets/macaroni.jpg') 
    },
    
    {
      key:5,
      title:'Biryani',
      photo:require('./assets/biryani.jpg') 
    },
    
    {
      key:6,
      title:'Palao',
      photo:require('./assets/pulao.jpg') 
    },
    
    
  ])
  
return(
    <View style={mainViewstyle.container}>
        <View style={view4style.view4}>
          <Text style={{textAlign:'center',paddingTop:30,fontSize:30,color:'orange'}}>
          Foodie Moodie</Text>
        </View>
        <Text style={{fontSize:20}}>Select Category: </Text>
        <Text>     </Text>
        <FlatList
        horizontal
          data={myarray}
          keyExtractor={item=>item.key}
          renderItem={({item})=>(
        
        <View style={{flex:0.1,backgroundColor:'orange'}}>
          <View style={{flex:0.1,marginHorizontal:5,backgroundColor:'black',alignItems:'center'}}>
          <Text style={{paddingTop:10,color:'orange'}}>     {item.title}      </Text>
          </View>
        </View>)}/>



        <FlatList
        horizontal
        data={myimagearray}
        keyExtractor={item=>item.key}
        renderItem={({item})=>(
          <View style={{flex:0.5,backgroundColor:'orange'}}>
        <View style={{flex:0.5,marginHorizontal:7,backgroundColor:'black',alignItems:'center',width:200}}>
        <Text style={{paddingTop:10,color:'orange',fontSize:20}}>     {item.title}      </Text>
        <Image source={item.photo} style={{height:140,width:190}}></Image>
        
        </View>
          </View>)}/>

       
        
        <View style={view6style.view6}>
        </View>


    </View>
    
  );


  }

                
    
  




