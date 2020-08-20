
import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import styles from './styles';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function FooterEvent() {
    const { navigate } = useNavigation();
    function handleNavigateToEditEvent() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('EditEvent');
    };
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styles.edit} onPress={handleNavigateToEditEvent}>
                <Feather name="edit" size={20} color={'#EE0000'} />
                <Text style={styles.underLineText}> Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.edit}>
                <Feather name="trash-2" size={20} color={'#EE0000'} />
                <Text style={styles.underLineText}> Excluir</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FooterEvent;