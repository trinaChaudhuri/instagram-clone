import React,{useEffect,useState} from 'react';
import {View,Text,Image} from 'react-native';
import axios from 'axios';
import { Root,appId } from '../api';
export default function UserComponent(props){
    const {data,posts}=props;
    const [userData,setUserData]=useState("");
    console.log('data',data)
    useEffect(()=>{
        getUserData();
    },[])
    const getUserData=()=>{
        axios.get(`${Root}/user/60d0fe4f5311236168a109ca`,{headers:{'app-id':appId}})
        .then(function(res){
            console.log('user data',res.data)
            setUserData(res.data.data);
        })
        .catch(function(err){
            console.error(err)
        })
    }
    return(
        <View style={{padding:12}}>
            {data && data!==null && data!==undefined && (
            <>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={{uri:data[0].owner.picture}} style={{height:100,width:100,borderRadius:50,marginBottom:10}} />
            <View style={{flexDirection:'row',}}>
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>14</Text>
                    <Text style={{fontSize:16}}>Posts</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginLeft:30}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>615</Text>
                    <Text style={{fontSize:16}}>Followers</Text>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginLeft:30}}>
                    <Text style={{fontSize:18,fontWeight:'bold'}}>272</Text>
                    <Text style={{fontSize:16}}>Following</Text>
                </View>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:18}}>{data[0].owner.firstName}</Text>
            <Text style={{marginLeft:5,fontSize:18}}>{data[0].owner.lastName}</Text>
            </View>
            </>
            )
            }

        </View>
    )
}