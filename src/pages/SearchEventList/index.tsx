import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import EventItem, { Event } from '../../components/EventItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

interface PageHeaderProps {
    
};

const SearchEventList: React.FC<PageHeaderProps> = ({ children }) => {
    const [isFiltersVisible, setisFiltersVisible] = useState(false);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [events, setEvents] = useState([]);
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');

    function handleToggleFiltersVisible() {
        setisFiltersVisible(!isFiltersVisible); // Ele vai setar o valor contrário que está no filtro, ex:tava true agora vira false
    }

    async function loadInitialEvents() {
        const response = await api.get('events')
        setEvents(response.data)
    };

    async function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedEventsIds = JSON.parse(response).map((favorited: Event) => favorited._id)
                setFavorites(favoritedEventsIds)
            }
        })
    };

    async function handleFiltersSubmit() {
        loadFavorites()

        const response = await api.get('events/filter', {
            params: {
                category: "Música",
                value: 60,
                date: "2020-01-01"
            }
        })

        setEvents(response.data)
        setisFiltersVisible(false)
    }

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites()
            loadInitialEvents()
        }, [])
    );

    return (
        
        <View style={styles.container}>
            <PageHeader
                title="Eventos disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color={'#FFF'} />
                    </BorderlessButton>
                )}
            >
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
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}>
                {events.map((event: Event) => <EventItem key={event._id} event={event} favorited={favorites.includes(event._id)} />)}
            </ScrollView>
        </View>

    );
}

export default SearchEventList;