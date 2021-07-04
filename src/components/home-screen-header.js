import React from 'react';
import {View,Image} from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import IonIcons from 'react-native-vector-icons/Ionicons';
export default function HomeScreenHeader(props){
    return(
        <View style={{padding:12,flexDirection:'row',justifyContent:'space-between',backgroundColor:'white'}}>
            <EntypoIcons name="squared-plus" size={25} color="black"/>
            <Image source={{uri:'https://s3.amazonaws.com/cms.ipressroom.com/258/files/201611/5846d6e92cfac240197264a3_instagramtitle/instagramtitle_61be62a0-157c-48b0-bca4-320b53cb1247-prv.jpg'}} style={{width:100,height:30}} resizeMode="contain"/>
            <IonIcons name="chatbubble-ellipses-outline" size={25} color="black"/>
        </View>
    )
}