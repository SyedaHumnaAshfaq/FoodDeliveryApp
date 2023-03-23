import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,ScrollView,Alert,Image, TextInput} from 'react-native';
import { mainViewstyle,view1style,view2style,view3style,view4style,view5style,view6style} from './style';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MyFlatlist = ({navigation}) => {
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
      photo:require('./assets/burger.jpg'),   
      price:'Rs.200'

    },
    {
      key:1,
      title:'Pizza',
      photo:require('./assets/pizza.jpg'),
      price:'Rs.700' 
    },
    {
      key:3,
      title:'Pasta',
      photo:require('./assets/pasta.jpg'),
      price:'Rs.800' 
    },
    {
      key:4,
      title:'Macaroni',
      photo:require('./assets/macaroni.jpg'),
      price:'Rs.550' 
    },
    
    {
      key:5,
      title:'Biryani',
      photo:require('./assets/biryani.jpg'),
      price:'Rs.260' 
    },
    
    {
      key:6,
      title:'Palao',
      photo:require('./assets/pulao.jpg'),
      price:'Rs.250' 
    },
    
    
  ])

  const [bestsellerarray,setbestsellerarray] = useState([
    {
      key:0,
      title:'Burger',
      photo:require('./assets/burger.jpg'),   
      price:'Rs.200'

    },
    {
      key:1,
      title:'Pizza',
      photo:require('./assets/pizza.jpg'),
      price:'Rs.700' 
    },

  ])
  
return(
    <ScrollView style={mainViewstyle.container}>
        
        <View style={{flex:0.2,paddingTop:70}}>
          <Text style={{fontSize:20,marginLeft:5,fontWeight:'bold',paddingBottom:15}}>Choose your favourite food</Text>
          <View  style={{flexDirection:'row'}}>
          <Image source={require('./assets/searchIcon.png')} style={{height:40,width:35,resizeMode:'stretch',borderBottomLeftRadius:15,borderTopLeftRadius:15,marginLeft:5,backgroundColor:'white'}}/>
          <TextInput style={{backgroundColor:'white',height:40,width:270,borderBottomRightRadius:15,borderTopRightRadius:15,fontSize:15}}>Search your favourite food</TextInput>
         
         </View>
          
        </View>
        <View style={{flex:0.25,marginTop:10,marginBottom:0,paddingTop:10,backgroundColor:'whitesmoke',paddingTop:20}}>
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
        <View style={{flex:0.8,backgroundColor:'whitesmoke',paddingTop:70}}>
        <Text style={{fontSize:20,marginLeft:5,fontWeight:'bold'}}>Popular Food</Text>
        <Text>   </Text>

        <FlatList
        horizontal
        data={myimagearray}
        keyExtractor={item=>item.key}
        renderItem={({item})=>(
         
           
        
        <View style={{flex:0.5,marginHorizontal:7,height:175,backgroundColor:'white',alignItems:'center',width:200,borderRadius:11}}>
        <TouchableOpacity style={{textAlign:'center',alignItems:'center'}}> 
        <Text style={{paddingTop:5,color:'black',fontSize:17,fontWeight:'bold'}}>     {item.title}      </Text>
        <Image source={item.photo} style={{height:110,width:190,borderRadius:11}}></Image>
        <Text style={{paddingTop:5,color:'grey',fontSize:15}}>     {item.price}      </Text>
        </TouchableOpacity> 
        </View>)}/>
        
         

        {/* <View style={{flex:0.7,backgroundColor:'whitesmoke',marginBottom:190,paddingTop:5,alignContent:'center',alignItems:'flex-start'}}>
          <Text style={{fontSize:20,marginLeft:5,fontWeight:'bold'}}>Best Seller</Text>
          <Text>   </Text>
        </View> */}

<View style={{flex:0.8,backgroundColor:'whitesmoke',paddingTop:80}}>
        <Text style={{fontSize:20,marginLeft:5,fontWeight:'bold'}}>Best Seller</Text>
        <Text>   </Text>

        <FlatList
        horizontal
        data={bestsellerarray}
        keyExtractor={item=>item.key}
        renderItem={({item})=>(
         
           
        
        <View style={{flex:0.5,flexDirection:'row',marginHorizontal:7,height:100,backgroundColor:'white',alignItems:'center',width:300,borderRadius:11}}>
        <TouchableOpacity style={{textAlign:'center',alignItems:'center',flexDirection:'row'}}> 
        <View><Image source={item.photo} style={{height:110,width:190,borderRadius:11}}></Image></View>
        <View style={{flexDirection:'column'}}><Text style={{paddingTop:5,color:'black',fontSize:15,fontWeight:'bold'}}>     {item.title}      </Text>
        
        <View><Text style={{paddingTop:5,color:'grey',fontSize:15}}>     {item.price}      </Text></View></View>
        </TouchableOpacity> 
        </View>)}/>



        
        



        </View>

       
        
        <View style={view6style.view6}>
        </View>


    </View>
    </ScrollView>
    
  );


  }
export {MyFlatlist};
                
    
  




