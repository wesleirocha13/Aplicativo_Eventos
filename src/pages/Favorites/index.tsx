import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import EventItem from '../../components/EventItem';
import FooterEvent from '../../components/FooterEvent';
import FooterEventFavorite from '../../components/FooterEventFavorite';

function Favorites(){
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Eventos Favoritos" />
            <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 24 }} >
                <EventItem><FooterEventFavorite /></EventItem>
                <EventItem><FooterEventFavorite /></EventItem>
                <EventItem><FooterEventFavorite /></EventItem>
            </ScrollView>
        </View>
    );    
}

export default Favorites;