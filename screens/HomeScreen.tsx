import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {}

const HomeScreen = ({ }: Props) => {

    const [loginInfo, setLoginInfo] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchLoginInfo = async () => {
            try {
                const storedLoginInfo = await AsyncStorage.getItem('@login_info');
                if (storedLoginInfo !== null) {
                    setLoginInfo(storedLoginInfo);
                }
            } catch (e) {
                throw new Error("Something went wrong! Login Again");
            }
        };

        fetchLoginInfo();
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {loginInfo ? (
                <Text>Welcome, {loginInfo}</Text>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default HomeScreen