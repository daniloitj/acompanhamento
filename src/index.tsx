import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import AppStack from './routes';
import AppContainer from './hooks';

const App: React.FC = () => (
    <>
        <AppContainer>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <AppStack />
        </AppContainer>
    </>
);

export default App;
