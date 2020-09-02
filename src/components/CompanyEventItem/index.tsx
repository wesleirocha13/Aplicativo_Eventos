import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, ImageBackground, Text, Image, Linking, Alert } from 'react-native';
import styles from './styles';
import { FontAwesome, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import moment from 'moment';

export interface Event {
    _id: string,
    address: Address,
    name: string,
    description: string,
    category: string,
    date: string,
    value: number,
    contact: string,
    tags: [],
    image: any
}

export interface Address {
    state: string,
    city: string,
    district: string,
    street: string,
    number: string,
    cep: string,
}

interface EventItemProps {
    event: Event
    changeList: any
}

const EventItem: React.FC<EventItemProps> = ({ event, changeList }) => {

    const { navigate, goBack } = useNavigation();
    function handleNavigateToEditEvent() {
        navigate('EditEvent', {
            idEvent: event._id,
        });
    };

    function confirm() {
        Alert.alert(
            'Atenção',
            'Esta operação não pode ser desfeita, tem certeza que desaja excluir?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => deleteAddress() }
            ],
            { cancelable: false }
        );
    };

    async function deleteAddress() {
        try {
            const token = await AsyncStorage.getItem('CompanyToken');
            const response = await api.delete('events/', {
                params: {
                    token: token,
                    id: event._id,
                }
            });

            changeList();
            Alert.alert("Exclusão realizada com sucesso!");
        } catch{
            Alert.alert("Ocorreu um erro, tente novamente");
        }
    }

    let date = new Date(event.date)
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.avatar} source={{ uri: event.image || 'image', scale: 1 }} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}> {event.name} </Text>
            </View>
            <View style={styles.EventContainer}>
                <View style={styles.section2}>
                    <Text style={[styles.textBold, styles.TextAddress]}>Descrição:
                        <Text style={styles.text}> {event.description} </Text>
                    </Text>
                </View>
                <View style={styles.section1}>
                    <Text style={[styles.textBold, styles.TextAddress]}>
                        Data:<Text style={styles.text}> {moment(date).format('DD/MM/YYYY')}    </Text>
                        Hora:<Text style={styles.text}> {moment(date).format('HH:mm')} </Text>
                    </Text>
                </View>
                <View style={styles.section1}>
                    <Text style={[styles.textBold, styles.TextAddress]}>
                        Categoria:<Text style={styles.text}> {event.category}</Text>
                    </Text>
                </View>
                <View style={styles.section1}>
                    <Text style={[styles.textBold, styles.TextAddress]}>
                        Valor:<Text style={styles.text}> R$ {event.value} </Text>
                    </Text>
                </View>
                <View style={styles.section2}>
                    <Text style={[styles.textBold, styles.TextAddress]}>Endereço:<Text style={styles.text}> {event.address.street} </Text>
                        <Text style={styles.text}> {event.address.number}, </Text>
                        <Text style={styles.text}> {event.address.district}, </Text>
                        <Text style={styles.text}> {event.address.city}, </Text>
                        <Text style={styles.text}> {event.address.state} </Text>
                    </Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.edit} onPress={handleNavigateToEditEvent}>
                        <Feather name="edit" size={20} color={'#EE0000'} />
                        <Text style={styles.underLineText}> Alterar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.edit} onPress={confirm}>
                        <Feather name="trash-2" size={20} color={'#EE0000'} />
                        <Text style={styles.underLineText}> Excluir</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

export default EventItem;