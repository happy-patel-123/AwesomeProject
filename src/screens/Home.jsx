import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
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

export default Home;