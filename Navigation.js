import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import EditCurrency from "./EditCurrency";
import AddCurrency from "./AddCurrency";
import Calculator from "./Calculator";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AddCurrency" component={AddCurrency} />
                <Stack.Screen name="EditCurrency" component={EditCurrency} />
                <Stack.Screen name="Calculator" component={Calculator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
