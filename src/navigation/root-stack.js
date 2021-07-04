import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home-screen';
import BottomTabsNavigator from './bottom-tab-navigation';
export default function RootStack(){
    const rootStack=createStackNavigator();
    return(
        <rootStack.Navigator>
            <rootStack.Screen name="Index" component={BottomTabsNavigator} options={{headerShown:null}}/>
            <rootStack.Screen name="Home" component={HomeScreen} options={{headerShown:null}}/>

        </rootStack.Navigator>
    )
}