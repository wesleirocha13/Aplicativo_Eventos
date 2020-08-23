import React, { useState } from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import styles from './styles';
import { FontAwesome, Feather } from '@expo/vector-icons';

export interface Event {
    _id: string,
    address: Address,
    name: string,
    description: string,
    category: string,
    date: string,
    value: number,
    contact: string,
    tags: []
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
}

const EventItem: React.FC<EventItemProps> = ({ event }) => {
    let date = new Date(event.date)
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.avatar} source={{ uri: 'https://github.com/wesleirocha13.png' }} />
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
                    <Text style={[styles.textBold, styles.TextAddress]}>Data:<Text style={styles.text}> {date.toUTCString()} </Text></Text>
                </View>
                <View style={styles.section2}>
                    <Text style={[styles.textBold, styles.TextAddress]}>Endereço:<Text style={styles.text}> {event.address.street} </Text>
                        <Text style={styles.textBold}> N°:<Text style={styles.text}> {event.address.number}, </Text></Text>
                        <Text style={styles.textBold}> Bairro:<Text style={styles.text}> {event.address.district}, </Text></Text>
                        <Text style={styles.textBold}> Cidade:<Text style={styles.text}> {event.address.city}, </Text></Text>
                        <Text style={styles.textBold}> Estado:<Text style={styles.text}> {event.address.state} </Text></Text>
                    </Text>
                </View>
                <View style={styles.section1}>
                    <Text style={[styles.textBold, styles.TextAddress]}>Valor:<Text style={styles.text}> R${event.value} </Text></Text>
                    <Text style={[styles.textBold, styles.TextAddress]}>Contato:<Text style={styles.text}> {event.contact} <FontAwesome name="whatsapp" size={18} color={'#04d361'} /></Text></Text>
                </View>
            </View>
        </View>
    );
}

export default EventItem;