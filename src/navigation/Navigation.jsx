import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from "../screens/Login"
import Home from "../screens/Home"
import Details from "../screens/Details"
import Icon from 'react-native-vector-icons/MaterialIcons'

const Navigation = () => {

    const Stack = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} /> 
                <Stack.Screen name="HomePage" component={Tabs} />
                <Stack.Screen name="Details" component={Details} /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation


const Tabs = () => {
    const Tab = createBottomTabNavigator()

    return(
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Tab.Screen 
                name="Home" 
                component={Home}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <Icon name='home' size={size} color={focused ? '#0000FF' : '#000000}'}/>
                        );
                    }
                }}
            />
            <Tab.Screen 
                name="Details" 
                component={Details} 
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <Icon name='favorite' size={size} color={focused ? '#0000FF' : '#000000}'}/>
                        );
                    }
                }}
            /> 
        </Tab.Navigator>
    )
}