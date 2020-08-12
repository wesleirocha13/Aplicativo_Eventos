import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import GiveCLessses from '../pages/GiveClasses';
import StudyTabs from './StudyTabs';

const { Navigator, Screen} = createStackNavigator();

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                {/* Screen as telas que eu vou chamar  */}
                <Screen name="Landing" component={Landing}/>
                <Screen name="GiveClasses" component={GiveCLessses}/>
                <Screen name="StudyTabs" component={StudyTabs}/>
            </Navigator>
        </NavigationContainer>
    );
};

export default AppStack;