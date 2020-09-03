import React, {createContext, useState, useContext, useEffect} from 'react';

import AsyncStorage from '@react-native-community/async-storage';
import Expend from '../interfaces/Expend';

interface ExpendContext {
    expends: Expend[];
}

const ExpendContext = createContext<ExpendContext | null>(null);

const ExpendProvider: React.FC = ({children}) => {
    const [expends, setExpends] = useState<Expend[]>([]);

    useEffect(() => {
        async function loadExpends(): Promise<void> {
            const storagedExpends = await AsyncStorage.getItem(
                '@Contele:expends',
            );

            if (storagedExpends) {
                setExpends([...JSON.parse(storagedExpends)]);
            }
        }

        loadExpends();
    }, []);

    const value = React.useMemo(() => ({expends}), [expends]);

    return (
        <ExpendContext.Provider value={value}>
            {children}
        </ExpendContext.Provider>
    );
};

function useExpend(): ExpendContext {
    const context = useContext(ExpendContext);

    if (!context) {
        throw new Error('useExpend must be used within a ExpendProvider');
    }

    return context;
}

export {ExpendProvider, useExpend};
