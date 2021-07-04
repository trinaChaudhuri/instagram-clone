import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OctIons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import HomeScreen from '../home-screen';
import NotificationsScreen from '../notification-screen';
import ProfileScreen from '../profile-screen';
import ReelsScreen from '../reels-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const BottomTab = createBottomTabNavigator();

export default function BottomTabsNavigator(){
    return(
<BottomTab.Navigator
    initialRouteName="BottomHome">
        <BottomTab.Screen
        name="BottomHome"
        component={HomeScreen}
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color='black' size={size} />
            ),
          }}/>
        <BottomTab.Screen
        name="NotificationScreen"
        component={NotificationsScreen}
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <OctIons name="search" color='black' size={size} />
            ),
          }}/>
        <BottomTab.Screen
        name="ReelsScreen"
        component={ReelsScreen}
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="video-collection" color='black' size={size} />
            ),
          }}/>
         <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" color='black' size={size} />
            ),
          }}/>
    </BottomTab.Navigator>
    )
}
