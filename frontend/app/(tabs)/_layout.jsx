import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import {Colors} from "../../constants/Utils";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
            name="index"
            options={{
                title: "",
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name={focused ? "home" : "home-outline"} 
                        size={27} 
                        color={focused ? Colors.primary : Colors.secondary} 
                    />
                ),
            }}
        />
        
        <Tabs.Screen
            name="order"
            options={{
                title: "",
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name={focused ? "bag-check" : "bag-check-outline"} 
                        size={27} 
                        color={focused ? Colors.primary : Colors.secondary} 
                    />
                ),
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: "",
                tabBarIcon: ({ focused }) => (
                    <Ionicons 
                        name={focused ? "person" : "person-outline"} 
                        size={27} 
                        color={focused ? Colors.primary : Colors.secondary} 
                    />
                ),
            }}
        />

     
    </Tabs> 
    
    

  );
}   