import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, Picker } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import EventItem, { Event } from '../../components/EventItem';
import { ScrollView, TextInput, BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import { FontAwesome5 } from '@expo/vector-icons';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

interface PageHeaderProps {

};

const SearchEventList: React.FC<PageHeaderProps> = ({ children }) => {
    const [isFiltersVisible, setisFiltersVisible] = useState(false);
    const [favorites, setFavorites] = useState<string[]>([]);
    const [events, setEvents] = useState([]);
    const [category, setCategory] = useState('categoryNull');
    const [value, setValue] = useState('');
    const [showDate, setShowDate] = useState(false);
    const [date, setDate] = useState(new Date('2020-01-01T03:00:00'));
    const exampleDate = moment(date).format('DD/MM/YYYY');

    function handleToggleFiltersVisible() {
        setisFiltersVisible(!isFiltersVisible); // Ele vai setar o valor contrário que está no filtro, ex:tava true agora vira false
    }

    function cleanDate() {
        setDate(new Date('2020-01-01T03:00:00'));
    };

    async function loadEvents() {
        const response = await api.get('events')
        setEvents(response.data)
    };

    async function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                let favoritedEventsIds = JSON.parse(response).map((favorited: Event) => favorited._id)
                setFavorites(favoritedEventsIds)
            }
        })
    };

    async function handleFiltersSubmit() {
        loadFavorites();
        if (exampleDate == '01/01/2020' && value == '' && category == "categoryNull") {
            loadEvents();
            setisFiltersVisible(false);
        } else {
            let date2 = new Date(date);
            date2.setDate(date.getDate() + 1);
            const response = await api.get('events/filter', {
                params: {
                    category: category,
                    value: value,
                    date: date,
                    date2: date2
                }
            })
            setEvents(response.data)
            setisFiltersVisible(false);
        }

    }


    useFocusEffect(
        React.useCallback(() => {
            loadFavorites()
        }, [])
    );

    useEffect(() => {
        loadEvents()
    }, []);

    const onChange = async (event: any, selectedDate: any) => {
        const currentDate = await selectedDate || date;
        await setShowDate(false);
        await setDate(currentDate);
    };

    const showModeDate = (currentMode: any) => {
        setShowDate(true);
    };

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
                        <View style={styles.inputGroup} >
                            <View style={styles.containerDate}>
                                <RectButton onPress={showModeDate} style={styles.dataTime}>
                                    <Text style={styles.dataTimeText}>Data</Text>
                                    <FontAwesome5 name="calendar-alt" size={20} style={styles.icon} />
                                </RectButton>
                                <View style={styles.ContainerResultData}>
                                    <Text style={styles.resultDataText}>
                                        {exampleDate == '01/01/2020' ? '' : moment(date).format('DD/MM/YYYY')}
                                    </Text>
                                    <TouchableOpacity style={styles.ContainerClean} onPress={cleanDate}>
                                        <FontAwesome5 name="eraser" size={15} color={'#EE0000'} />
                                        <Text style={styles.cleanText} > Limpar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {showDate && (<DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={'date'}
                                display="default"
                                onChange={onChange}
                                style={styles.dataTime}
                            />
                            )}
                        </View>

                        <View style={styles.inputGroup} >
                            <View style={styles.inputBlock} >
                                <Text style={styles.label}></Text>
                                <TextInput
                                    style={styles.input}
                                    value={value}
                                    keyboardType="numeric"
                                    onChangeText={text => setValue(text)}
                                    placeholder="Qual o valor máximo?"
                                />
                            </View>
                            <View style={styles.inputBlock2}>
                                <Picker
                                    mode='dropdown'
                                    selectedValue={category}
                                    style={{ height: 50, borderRadius: 15, }}
                                    onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                                >
                                    <Picker.Item label="Categorias" value="categoryNull" color="#CDC9C9" />
                                    <Picker.Item label="Show" value="show" />
                                    <Picker.Item label="Teatro" value="teatro" />
                                    <Picker.Item label="Exposições" value="exposições" />
                                    <Picker.Item label="Feiras" value="feiras" />
                                    <Picker.Item label="Outros" value="outros" />
                                </Picker>
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
            {children}
        </View>

    );
}

export default SearchEventList;