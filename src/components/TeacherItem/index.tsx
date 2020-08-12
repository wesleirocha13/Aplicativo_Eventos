import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                {/* Quando for usar uma imagem externa (Pegar por URL) tem que fazer desse jeito */}
                <Image style={styles.avatar} source={{uri: 'https://github.com/wesleirocha13.png' }} /> 

                <View style={styles.profileInfo} >
                    <Text style={styles.name}> Weslei Rocha</Text>
                    <Text style={styles.subject} > História </Text>
                </View>
            </View>
            <Text style={styles.bio}>
                O weslei é o cara mais pika de todas as galáxias existentes no mundo inteirinho
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price} >
                    Preço Hora {'  '}
                    <Text style={styles.priceValue} > R$ 200,00</Text>
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited ]} >
                      {/*  <Image source={heartOutlineIcon}/> */}
                        <Image source={unFavoriteIcon}/>
                    </RectButton>
                    <RectButton style={styles.contactButton} >
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText} > Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>


        </View>
    );    
}

export default TeacherItem;