import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchEventList from '../pages/SearchEventList';
import Favorites from '../pages/Favorites/index';
import styles from '../pages/Landing/styles';
import { Ionicons } from '@expo/vector-icons'; // Aqui é o diretório aonde estão o icones "Ionicons" é umas das fontes de icnoes, tem outras como font awesome



const { Navigator, Screen} = createBottomTabNavigator();

function EventTabs(){
    {/* Agora não precisa mais do NavigationContainer pq o StudyTabs vai estar dentro do AppStack que já contem o NavigationContainer */}
    return(
        <Navigator 
        tabBarOptions={{
            style: {
                elevation: 0, //Isso seria meio que o shadow do css (ANDROID)
                shadowOpacity: 0, //Isso seria meio que o shadow do css (IOS)
                height: 64,     
            },
            tabStyle:{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            },
            iconStyle:{
                flex: 0,
                width: 20,
                height: 20,
            },
            labelStyle:{
                fontFamily: 'Archivo_700Bold',
                fontSize: 14,
                marginLeft: 16,
            },
            inactiveBackgroundColor: '#fafafc',
            activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#c1bccc',
            activeTintColor: '#32264d',
        }}>
            <Screen 
                name="SearchEventList" 
                component={SearchEventList}
                options={{
                    tabBarLabel: 'Eventos', // Serve para cololocar o nome que quiser na barra
                    tabBarIcon: ({color, size, focused}) => {
                        return(
                            <Ionicons name="ios-calendar" size={size} color={ focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos', // Serve para cololocar o nome que quiser na barra
                    tabBarIcon: ({color, size, focused}) => {
                        return(
                            // Isso serve para colorir e almenrar o tamanho dos icons da barra de navegação
                            <Ionicons name="ios-heart" size={size} color={ focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />
        </Navigator>
    );
    
}

export default EventTabs;