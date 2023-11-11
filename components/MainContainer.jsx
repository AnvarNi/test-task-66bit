import { Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import React, {useContext} from 'react';

import { NewsPostsScreen } from '../screens/NewsPostsScreen';
import { ThemesScreen } from '../screens/ThemesScreen';
import { useTheme } from '../contexts/ThemeContext';

const newsPostsScreen = 'Новости';
const stylesScreen = 'Темы';
const Tab = createBottomTabNavigator();

export default function MainContainer() {
    const { theme } = useTheme();
    //console.log(theme)
    return(
        <NavigationContainer>
            <Tab.Navigator
            tabBarShowLabel = 'false'
            initialRouteName={newsPostsScreen}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === newsPostsScreen) {
                        iconName = focused ? 'newspaper' : 'newspaper-outline'
                    } else if (rn === stylesScreen) {
                        iconName = focused ? 'color-palette' : 'color-palette-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: theme==null ? 'rgb(25, 25, 25)' : theme.mainColor,
                inactiveTintColor: theme==null ? 'rgb(111, 103, 120)' : theme.mainColor,
            }}
            >
            
            <Tab.Screen name={newsPostsScreen} component={NewsPostsScreen} />
            <Tab.Screen name={stylesScreen} component={ThemesScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}