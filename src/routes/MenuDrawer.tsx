import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import EventList from '../pages/EventList';
import PageHeaderMenu from '../components/PageHeaderMenu';
import { Feather } from '@expo/vector-icons';


function PageUserData(props: any) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Meus dados</Text>
      <RectButton onPress={() => props.navigation.toggleDrawer()}>
        <Text>Meus dados</Text>
      </RectButton>
    </View>
  );
}

function PageEventList(props: any) {
  return (
    <EventList>
      <PageHeaderMenu title="Lista de Eventos">
        <BorderlessButton onPress={() => props.navigation.toggleDrawer()}>
          <Feather name="menu" size={30} color={'#FFF'} />
        </BorderlessButton>
      </PageHeaderMenu>
    </EventList>
  );
}
 
function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MenuDrawer() {
  return (
    <Drawer.Navigator initialRouteName="PageEventList" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Eventos" component={PageEventList} />
      <Drawer.Screen name="Meus dados" component={PageUserData} />

    </Drawer.Navigator>
  );
}

export default MenuDrawer;
