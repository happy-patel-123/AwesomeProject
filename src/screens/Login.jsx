import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('HomePage')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default Login;