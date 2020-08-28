import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import EventItem, { Event } from '../../components/EventItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage'

interface PageHeaderProps {

};

const Favorites: React.FC<PageHeaderProps> = ({ children }) => {
    const [isFiltersVisible, setisFiltersVisible] = useState(false);
    const [favorites, setFavorites] = useState<Event[]>([]);
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');

    function handleToggleFiltersVisible() {
        setisFiltersVisible(!isFiltersVisible); // Ele vai setar o valor contrário que está no filtro, ex:tava true agora vira false
    }

    async function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedEvents = JSON.parse(response)
                setFavorites(favoritedEvents)
            }
        })
    };

    async function handleFiltersSubmit() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedEvents = JSON.parse(response).filter((favorited: Event) => {
                    return (
                        favorited.category === category
                        && favorited.value === parseFloat(value)
                        && favorited.date === date
                    )
                })
                setFavorites(favoritedEvents)
            }
        })

        setisFiltersVisible(false)
    }

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites()
        }, [])
    );

    return (
        <View style={styles.container}>
            <PageHeader
                title="Eventos favoritos"
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
                {favorites.map((event: Event) => <EventItem key={event._id} event={event} favorited={true}/>)}
            </ScrollView>
        </View>
    );
}

export default Favorites;