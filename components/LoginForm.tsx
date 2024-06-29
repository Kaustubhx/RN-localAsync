import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Button from '../atomicComponents/Button';

type Props = {}

const LoginForm = ({ }: Props) => {

    const navigation = useNavigation();

    const [form, setForm] = useState({
        name: '',
        password: '',
    });

    const handleLogin = async () => {
        // Perform your login logic here (e.g., API call)
        // If login is successful, save the login info to AsyncStorage
        try {
            await AsyncStorage.setItem('@login_info', form.name);
            navigation.navigate('Home');
        } catch (e) {
            Alert.alert('Error', 'Failed to save the login info');
        }
    };

    return (
        <View style={styles.form}>
            <View style={styles.input}>
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    keyboardType="email-address"
                    onChangeText={name => setForm({ ...form, name })}
                    placeholder="John Doe"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    value={form.name} />
            </View>

            <View style={styles.input}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    autoCorrect={false}
                    clearButtonMode="while-editing"
                    onChangeText={password => setForm({ ...form, password })}
                    placeholder="********"
                    placeholderTextColor="#6b7280"
                    style={styles.inputControl}
                    secureTextEntry={true}
                    value={form.password} />
            </View>

            <View style={styles.formAction}>
                <Button title="Login" onPress={() => handleLogin()} />
            </View>
            <Text style={styles.formLink}>Forgot password?</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginTop: 4,
        marginBottom: 16,
    },
    formLink: {
        fontSize: 16,
        fontWeight: '600',
        color: '#075eec',
        textAlign: 'center',
    },
    // Input Style
    input: {
        marginBottom: 16,
        width: '100%',
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
    },
    /** Button */
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#075eec',
        borderColor: '#075eec',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },
});

export default LoginForm

