import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Login</Text>
            {/* <Button title="Go to Home" onPress={() => navigation.navigate('HomePage')} /> */}
            <TextInput 
                style={styles.input} 
                placeholder='Enter Email'
                value={email}
                onChangeText={(txt) => setEmail(txt)}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Enter Password'
                value={password}
                onChangeText={(txt) => setPassword(txt)}
            />
            <CustomButton title="Login" onPress={() => navigation.navigate('HomePage')} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingTop: 100,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        borderWidth: 1,
        width: '80%',
        borderRadius: 4,
        marginVertical: 8,
    }
});

export default Login;