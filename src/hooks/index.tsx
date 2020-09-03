import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ExpendProvider} from './expend';

const AppProvider: React.FC = ({children}) => {
    return (
        <ExpendProvider>
            <NavigationContainer>{children}</NavigationContainer>
        </ExpendProvider>
    );
};

export default AppProvider;
