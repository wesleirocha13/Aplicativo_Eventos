import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import LoginCompany from '../pages/LoginCompany';
import EventTabs from './EventTabs';
import MenuDrawer from './MenuDrawer';
import DataCompany from '../pages/RegisterCompany/DataCompany';
import DataAddress from '../pages/RegisterCompany/DataAddress';
import RegisterSuccess from '../pages/RegisterCompany/RegisterSuccess';
import ForgotPasswordPage from '../pages/ForgotPassword/ForgotPasswordPage';
import ForgotPasswordSuccess from '../pages/ForgotPassword/ForgotPasswordSuccess';
import EditDataCompany from '../pages/AuthCompany/EditDataCompany'
import EditDataAddress from '../pages/AuthCompany/EditDataAddress'
import AddAddress from '../pages/AuthCompany/AddAddress';
import AddEvent from '../pages/Event/AddEvent';
import EditEvent from '../pages/Event/EditEvent';
import EditPasswordCompany from '../pages/AuthCompany/EditPasswordCompany'

const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                {/* Screen as telas que eu vou chamar  */}
                <Screen name="Landing" component={Landing}/>
                <Screen name="LoginCompany" component={LoginCompany}/>
                <Screen name="EventTabs" component={EventTabs}/>
                <Screen name="DataCompany" component={DataCompany}/>
                <Screen name="DataAddress" component={DataAddress}/>
                <Screen name="RegisterSuccess" component={RegisterSuccess}/>
                <Screen name="ForgotPasswordPage" component={ForgotPasswordPage}/>
                <Screen name="ForgotPasswordSuccess" component={ForgotPasswordSuccess}/>
                <Screen name="EditDataCompany" component={EditDataCompany}/>
                <Screen name="EditPasswordCompany" component={EditPasswordCompany}/>
                <Screen name="EditDataAddress" component={EditDataAddress}/>
                <Screen name="AddAddress" component={AddAddress}/>
                <Screen name="AddEvent" component={AddEvent}/>
                <Screen name="EditEvent" component={EditEvent}/>
                <Screen name="MenuDrawer" component={MenuDrawer}/>
            </Navigator>
        </NavigationContainer>
    );
};

export default AppStack;