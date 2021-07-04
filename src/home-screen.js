import React,{useEffect,useState} from 'react';
import {View,StyleSheet,FlatList,SafeAreaView,Image,Text,TouchableOpacity} from 'react-native';
import { Root,appId } from './api';
import HomeScreenHeader from './components/home-screen-header';
import IonIcons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

export default function HomeScreen(props){
    const [feedData,setFeedData]=useState(null);
    const [likedId,setLikeId]=useState("");
    useEffect(()=>{
        GetDataonHomeScreen()
    },[])

    const GetDataonHomeScreen=()=>{
        axios.get(`${Root}/post`,{headers:{'app-id':appId}})
        .then(function(res){
            console.log(res.data)
            setFeedData(res.data.data);
        })
        .catch(function(err){
            console.error(err)
        })
    }

    const like=(id)=>{
        setLikeId(id);
    }
    const RenderItem=({item,index})=>{
        const owner=item.owner;
        return(
            <View>
                <View style={{flexDirection:'row',padding:12,borderTopWidth:1,borderTopColor:'#e5e5e5'}}>
                <Image source={{uri:owner.picture}} style={{height:30,width:30,borderRadius:15}}/>
                <View style={{width:'80%',marginTop:5,flexDirection:'row'}}>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:15}}>{owner.firstName}</Text>
                    <Text style={{fontSize:18,fontWeight:'bold',marginLeft:5}}>{owner.lastName}</Text>
                </View>
                </View>
                <Image source={{uri:item.image}} style={{width:'100%',height:400}} />
                <View style={{flexDirection:'row',padding:12,borderTopColor:'#e5e5e5',borderTopWidth:1}}>
                    {index==likedId?(
                    <TouchableOpacity onPress={()=>like(index)}>
                    <IonIcons name="heart" size={25} color="red" />
                    </TouchableOpacity>
                    ):(
                    <TouchableOpacity onPress={()=>like(index)}>
                    <IonIcons name="ios-heart-outline" size={25} color="black" />
                    </TouchableOpacity>
                    )}
                    
                    <IonIcons name="ios-chatbubble-outline" size={23} color="black" style={{marginLeft:10}}/>
                    <IonIcons name="ios-paper-plane-outline" size={23} color='black' style={{marginLeft:10}}/>
                </View>
            </View>
        )
    }

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <HomeScreenHeader />
            <FlatList 
            data={feedData && feedData}
            renderItem={RenderItem}
            />
        </SafeAreaView>
    )
}

const style=StyleSheet.create({})