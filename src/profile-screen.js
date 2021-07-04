import React,{useEffect,useState} from 'react';
import {View,SafeAreaView,FlatList,Image,Dimensions} from 'react-native';
import { Root,appId } from './api';
import UserComponent from './components/user-component';
import axios from 'axios';
export default function ProfileScreen(props){
    const [ProfileData,setProfileData]=useState("")
    const width=Dimensions.get('screen').width;
    var posts;
    useEffect(()=>{
        GetDataonProfileScreen()
    },[])

    const GetDataonProfileScreen=()=>{
        axios.get(`${Root}/user/60d0fe4f5311236168a109ca/post`,{headers:{'app-id':appId}})
        .then(function(res){
            console.log('profile data',res.data)
            setProfileData(res.data.data);
            posts=res.data.data.length;
            console.log('aaa',posts)
        })
        .catch(function(err){
            console.error(err)
        })
    }

    const renderItem=({item})=>{
        const image=item.image;
        return(
            <View style={{flexDirection:'row'}}>
                <Image source={{uri:image}} style={{height:125,width:(1*width)/3,borderColor:'#e5e5e5',borderWidth:1}}/>
            </View>
        )
    }
    return(
        <SafeAreaView>
          {ProfileData && ProfileData!==null && ProfileData!==undefined &&  <UserComponent data={ProfileData} posts={posts}/>}  
            <FlatList 
            data={ProfileData && ProfileData}
            renderItem={renderItem}
            numColumns={3}
            />
        </SafeAreaView>
    )
}