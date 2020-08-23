import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import EventItem, { Event } from '../../components/EventItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';

function Favorites() {
    const [events, setEvents] = useState([]);
    const [isFiltersVisible, setisFiltersVisible] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    function handleToggleFiltersVisible() {
        setisFiltersVisible(!isFiltersVisible); // Ele vai setar o valor contrário que está no filtro, ex:tava true agora vira false
    }

    async function handleFiltersSubmit() {
        const response = await api.get('events', {
            params: {
                name,
                description,
                value
            }
        })

        setEvents(response.data)
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Eventos Favoritos"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color={'#FFF'} />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput
                            style={styles.input}
                            value={name}
                            onChangeText={text => setName(text)}
                            placeholder="Qual o nome?"
                        />

                        <View style={styles.inputGroup} >
                            <View style={styles.inputBlock} >
                                <Text style={styles.label}>Descrição</Text>
                                <TextInput
                                    style={styles.input}
                                    value={description}
                                    onChangeText={text => setDescription(text)}
                                    placeholder="Qual a descrição?"
                                />
                            </View>
                            <View style={styles.inputBlock} >
                                <Text style={styles.label}>Valor</Text>
                                <TextInput
                                    style={styles.input}
                                    value={value}
                                    onChangeText={text => setValue(text)}
                                    placeholder="Qual o valor?"
                                />
                            </View>
                        </View>
                        <RectButton onPress={handleFiltersSubmit} style={styles.submiteButton}>
                            <Text style={styles.submiteButtonText}>Filtrar</Text>
                        </RectButton>

                    </View>
                )}
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }} >
                {events.map((event: Event) => <EventItem key={event._id} event={event} />)}
            </ScrollView>
        </View>
    );
}

export default Favorites;