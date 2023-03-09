import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert,Image, TextInput} from 'react-native';
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
        
        <View style={{flex:0.2,paddingTop:70}}>
          <Text style={{fontSize:20,marginLeft:5,fontWeight:'bold',paddingBottom:15}}>Choose your favourite food</Text>
          <View  style={{flexDirection:'row'}}>
          <Image source={require('./assets/searchIcon.png')} style={{height:40,width:35,resizeMode:'stretch',borderBottomLeftRadius:15,borderTopLeftRadius:15,marginLeft:5,backgroundColor:'white'}}/>
          <TextInput style={{backgroundColor:'white',height:40,width:270,borderBottomRightRadius:15,borderTopRightRadius:15,fontSize:15}}>Search your favourite food</TextInput>
         
         </View>
          
        </View>
        <View style={{flex:0.4,marginTop:10,marginBottom:0,paddingTop:10,backgroundColor:'lightgrey'}}>
        <View style={{flexDirection:'row',marginBottom:20}}>
        <Text style={{fontSize:20,paddingTop:10,fontWeight:'bold',marginLeft:5}}>Food Category</Text>
        <TouchableOpacity style={{marginLeft:200,marginTop:15}}>
        <Text>See All</Text>
        </TouchableOpacity>
        </View>
        
        <FlatList
        horizontal
          data={myarray}
          keyExtractor={item=>item.key}
          renderItem={({item})=>(
        
        // <View style={{flex:0.02,backgroundColor:'blue'}}>
          <View style={{flex:0.02,height:50,width:100,marginHorizontal:5,marginTop:0,backgroundColor:'white',borderRadius:11,alignItems:'center',textAlign:'center'}}>
          <TouchableOpacity>
          <Text style={{paddingTop:10,color:'black',fontWeight:'bold'}}>{item.title}</Text>
          </TouchableOpacity>
          
          
          </View>)}/>
          </View>
        {/* </View> */}
        <View style={{flex:1.2,backgroundColor:'lightgrey'}}>
        <Text style={{fontSize:20,marginLeft:5,fontWeight:'bold'}}>Popular Food</Text>
        <Text>   </Text>

        <FlatList
        horizontal
        data={myimagearray}
        keyExtractor={item=>item.key}
        renderItem={({item})=>(
          // <View style={{flex:0.5,backgroundColor:'lightgrey',marginTop:0}}>
           
        
        <View style={{flex:0.5,marginHorizontal:7,height:150,backgroundColor:'white',alignItems:'center',width:200,borderRadius:11}}>
        <TouchableOpacity style={{textAlign:'center',alignItems:'center'}}> 
        <Text style={{paddingTop:5,color:'black',fontSize:20}}>     {item.title}      </Text>
        <Image source={item.photo} style={{height:110,width:190,borderRadius:11}}></Image>
        </TouchableOpacity> 
        </View>)}/>
        </View>
          {/* </View> */}

       
        
        <View style={view6style.view6}>
        </View>


    </View>
    
  );


  }

                
    
  




