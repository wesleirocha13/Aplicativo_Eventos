
import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import styles from './styles';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { TouchableOpacity, RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function FooterEventFavorite() {
    const { navigate } = useNavigation();
    function handleNavigateToEditEvent() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('EditEvent');
    };
    return (
        <View style={styles.footer}>
            <RectButton style={[styles.favoriteButton, styles.favorited]} >
                {/*  <Image source={heartOutlineIcon}/> */}
                <Image source={unFavoriteIcon} />
            </RectButton>
            <RectButton style={styles.contactButton} >
                <Image source={whatsappIcon} />
                <Text style={styles.contactButtonText} > Entrar em contato</Text>
            </RectButton>
        </View>
    );
}

export default FooterEventFavorite;