import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';

type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    color?: string;
    backgroundColor?: string;
    disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, onPress, color = '#FFFFFF', backgroundColor = '#007BFF', disabled = false }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor }, disabled && styles.disabled]}
            disabled={disabled}
        >
            <Text style={[styles.text, { color }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    disabled: {
        backgroundColor: '#A9A9A9',
    },
});

export default Button;
