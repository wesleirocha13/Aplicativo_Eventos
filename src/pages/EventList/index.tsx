import React, { useState, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import styles from './styles';
import FooterEvent from '../../components/FooterEvent';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import EventItem, { Event } from '../../components/EventItem';
import api from '../../services/api';

interface PageHeaderProps {

};

const EventList: React.FC<PageHeaderProps> = ({ children }) => {
  const { navigate } = useNavigation();

  const [isFiltersVisible, setisFiltersVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [value, setValue] = useState('');

  function handleToggleFiltersVisible() {
    setisFiltersVisible(!isFiltersVisible); // Ele vai setar o valor contrário que está no filtro, ex:tava true agora vira false
  };

  function handleNavigateToAddEvent() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
    navigate('AddEvent');
  };

  async function loadInitialEvents() {
    const response = await api.get('events')
    setEvents(response.data)
  };

  async function handleFiltersSubmit() {
    const response = await api.get('events/filter', {
      params: {
        category: "Música",
        value: 60,
        date: "2020-01-01"
      }
    })

    setEvents(response.data)
  }

  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 65);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 65],
    outputRange: [0, -65],
  });

  useEffect(() => {
    loadInitialEvents()
  }, []);

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
              <Text style={styles.label}>Categoria</Text>
              <TextInput
                style={styles.input}
                value={category}
                onChangeText={text => setCategory(text)}
                placeholder="Qual categoria?"
              />

              <View style={styles.inputGroup} >
                <View style={styles.inputBlock} >
                  <Text style={styles.label}>Valor</Text>
                  <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={text => setValue(text)}
                    placeholder="Qual valor?"
                  />
                </View>
                <View style={styles.inputBlock} >
                  <Text style={styles.label}>Data</Text>
                  <TextInput
                    style={styles.input}
                    value={date}
                    onChangeText={text => setDate(text)}
                    placeholder="Qual data?"
                  />
                </View>
              </View>
              <RectButton onPress={handleFiltersSubmit} style={styles.submiteButton}>
                <Text style={styles.submiteButtonText}>Filtrar</Text>
              </RectButton>
            </View>
          )}
        </View>
      </Animated.View>
      <ScrollView onScroll={(e) => { scrollY.setValue(e.nativeEvent.contentOffset.y) }}>
        <View style={styles.item}>
          {events.map((event: Event) => <EventItem key={event._id} event={event} />)}
        </View>
      </ScrollView>
    </View>
  );
}

export default EventList;