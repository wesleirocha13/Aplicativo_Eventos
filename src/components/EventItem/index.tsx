import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, ImageBackground, Text, Image, Linking } from 'react-native';
import styles from './styles';
import { FontAwesome, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'
import { RectButton, State } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

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
    event: Event,
    favorited: boolean,
}

const EventItem: React.FC<EventItemProps> = ({ event, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    useFocusEffect(
        React.useCallback(() => {
            setIsFavorited(favorited)
        }, [favorited])
    );

    function handleLinkToWhatsapp() {
        Linking
            .openURL(`whatsapp://send?phone=${event.contact}`)
            .catch(ex => {
                console.log("problema ao tentar se conectar com o whatsapp")
            })
    }

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem("favorites")
        let favoritesArray: Event[] = []

        favorites && (favoritesArray = JSON.parse(favorites))

        if (isFavorited) {
            favoritesArray.forEach((fav: Event, i: number) => {
                if (fav._id === event._id) {
                    favoritesArray.splice(i, 1)
                }
            });
            setIsFavorited(false)
        } else {
            favoritesArray.every(
                (fav: Event) => fav._id !== event._id
            ) && favoritesArray.push(event)
            setIsFavorited(true)
        }

        await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray))
    }

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
                        <Text style={styles.text}> {event.address.number}, </Text>
                        <Text style={styles.text}> {event.address.district}, </Text>
                        <Text style={styles.text}> {event.address.city}, </Text>
                        <Text style={styles.text}> {event.address.state} </Text>
                    </Text>
                </View>
                {/* <View style={styles.section1}>
                    <Text style={[styles.textBold, styles.TextAddress]}>Valor:<Text style={styles.text}> R${event.value} </Text></Text>
                    <Text style={[styles.textBold, styles.TextAddress]}>Contato:<Text style={styles.text}> {event.contact} <FontAwesome name="whatsapp" size={18} color={'#04d361'} /></Text></Text>
                </View> */}

                <View style={styles.footer}>
                    <Text style={styles.price} >
                        Valor: {'  '}
                        <Text style={styles.priceValue} >R${event.value}</Text>
                    </Text>
                    <View style={styles.buttonsContainer}>
                        <RectButton
                            onPress={handleToggleFavorite}
                            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]} >
                            {isFavorited ? <Image source={unFavoriteIcon} /> : <Image source={heartOutlineIcon} />}
                        </RectButton>
                        <RectButton
                            onPress={handleLinkToWhatsapp}
                            style={styles.contactButton} >
                            <Image source={whatsappIcon} />
                            <Text style={styles.contactButtonText} >Whatsapp</Text>
                        </RectButton>
                    </View>
                </View>

            </View>
        </View>
    );
}

export default EventItem;