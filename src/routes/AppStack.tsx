import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import LoginCompany from '../pages/LoginCompany';
import StudyTabs from './StudyTabs';
import DataCompany from '../pages/RegisterCompany/DataCompany';
import DataAddress from '../pages/RegisterCompany/DataAddress';
import RegisterSuccess from '../pages/RegisterCompany/RegisterSuccess';

const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                {/* Screen as telas que eu vou chamar  */}
                <Screen name="Landing" component={Landing}/>
                <Screen name="LoginCompany" component={LoginCompany}/>
                <Screen name="StudyTabs" component={StudyTabs}/>
                <Screen name="DataCompany" component={DataCompany}/>
                <Screen name="DataAddress" component={DataAddress}/>
                <Screen name="RegisterSuccess" component={RegisterSuccess}/>
            </Navigator>
        </NavigationContainer>
    );
};

export default AppStack;