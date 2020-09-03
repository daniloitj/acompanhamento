import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Expend from '../pages/Expend';
import Refund from '../pages/Refund';

const {Navigator, Screen} = createStackNavigator();

function AppStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {backgroundColor: '#DCE4F0'},
            }}>
            <Screen name="Expend" component={Expend} />
            <Screen name="Refund" component={Refund} />
        </Navigator>
    );
}

export default AppStack;
