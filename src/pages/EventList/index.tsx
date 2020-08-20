import React, { useState, ReactNode } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './styles';
import EventItem from '../../components/EventItem';
import FooterEvent from '../../components/FooterEvent';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {

};

const EventList: React.FC<PageHeaderProps> = ({ children }) => {

  const [isFiltersVisible, setisFiltersVisible] = useState(false);
  function handleToggleFiltersVisible() {
    setisFiltersVisible(!isFiltersVisible); // Ele vai setar o valor contrário que está no filtro, ex:tava true agora vira false
  };

  const { navigate } = useNavigation();
  function handleNavigateToAddEvent() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
    navigate('AddEvent');
  };

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 65);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 65],
    outputRange: [0, -65],
  });

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {children}
      </View>
      <Animated.View style={{
        transform: [{ translateY: translateY }], elevation: 2,
        zIndex: 1,
      }}>
        <View style={styles.topBarContainer}>

          <View style={styles.topBarItens}>
            <BorderlessButton style={styles.addEvent} onPress={handleNavigateToAddEvent}>
              <Feather name="plus-circle" size={28} color={'#FFF'} />
              <Text style={styles.addEventLabel}>Adicionar Evento</Text>
            </BorderlessButton>
            <BorderlessButton onPress={handleToggleFiltersVisible}>
              <Feather name="filter" size={25} color={'#FFF'} />
            </BorderlessButton>
          </View>

          {isFiltersVisible && (
            <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
              <TextInput style={styles.input} placeholder="Qaul a mtéria?" />

              <View style={styles.inputGroup} >
                <View style={styles.inputBlock} >
                  <Text style={styles.label}>Dia de samena</Text>
                  <TextInput style={styles.input} placeholder="Qual o dia?" />
                </View>
                <View style={styles.inputBlock} >
                  <Text style={styles.label}>Horário</Text>
                  <TextInput style={styles.input} placeholder="Qual o Horário?" />
                </View>
              </View>
              <RectButton style={styles.submiteButton}>
                <Text style={styles.submiteButtonText}>Filtrar</Text>
              </RectButton>

            </View>
          )}
        </View>
      </Animated.View>
      <ScrollView onScroll={(e) => { scrollY.setValue(e.nativeEvent.contentOffset.y) }}>
        <View style={styles.item}>
          <EventItem><FooterEvent /></EventItem>
          <EventItem><FooterEvent /></EventItem>
          <EventItem><FooterEvent /></EventItem>
        </View>
      </ScrollView>
    </View>
  );
}

export default EventList;