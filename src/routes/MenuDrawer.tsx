import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import EventList from '../pages/EventList';
import DataCompany from '../pages/AuthCompany/DataCompany'
import DataAddress from '../pages/AuthCompany/DataAddress'
import PageHeaderMenu from '../components/PageHeaderMenu';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function MenuDrawer() {

function PageUserData(props: any) {
  return (
    <DataCompany>
      <PageHeaderMenu title="    Meus dados">
        <BorderlessButton onPress={() => props.navigation.toggleDrawer()}>
          <Feather name="menu" size={30} color={'#FFF'} />
        </BorderlessButton>
      </PageHeaderMenu>
    </DataCompany>
  );
}

function PageUserAddress(props: any) {
  return (
    <DataAddress>
      <PageHeaderMenu title="    Endereço(s)">
        <BorderlessButton onPress={() => props.navigation.toggleDrawer()}>
          <Feather name="menu" size={30} color={'#FFF'} />
        </BorderlessButton>
      </PageHeaderMenu>
    </DataAddress>
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
  const { navigate } = useNavigation();
  function handleNavigateToLogin() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
      navigate('LoginCompany');
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Sair"
        onPress={handleNavigateToLogin}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();


  return (
    <Drawer.Navigator initialRouteName="PageEventList" drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Eventos" component={PageEventList} />
      <Drawer.Screen name="Meus dados" component={PageUserData} />
      <Drawer.Screen name="Endereços" component={PageUserAddress} />
    </Drawer.Navigator>
  );
}

export default MenuDrawer;
