import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import styles from './styles';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface EventItemProps {
};

const EventItem: React.FC<EventItemProps> = ({children}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.avatar} source={{uri: 'https://github.com/wesleirocha13.png' }} />
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}> Título do Evento</Text>
            </View>
            <View style={styles.EventContainer}>
                <View style={styles.section2}>
                    <Text style={[styles.textBold , styles.TextAddress]}>Descrição:
                        <Text style={styles.text}> Essa é a descrição do evento essa é a descrição do evento. </Text>
                    </Text>
                </View>
                <View style={styles.section1}>
                    <Text style={[styles.textBold , styles.TextAddress]}>Data:<Text style={styles.text}> 21/09/20</Text></Text>
                    <Text style={[styles.textBold , styles.TextAddress]}>   Horário:<Text style={styles.text}> 20:40 </Text></Text>
                </View>
                <View style={styles.section2}>
                    <Text style={[styles.textBold , styles.TextAddress]}>Endereço:<Text style={styles.text}> Rua Humberto Valério, </Text>
                        <Text style={styles.textBold}> N°:<Text style={styles.text}> 200, </Text></Text>
                        <Text style={styles.textBold}> Bairro:<Text style={styles.text}> Progresso, </Text></Text>
                        <Text style={styles.textBold}> Cidade:<Text style={styles.text}> Juiz de fora, </Text></Text>
                        <Text style={styles.textBold}> Estado:<Text style={styles.text}> Minas Gerais </Text></Text>
                    </Text>
                </View>
                <View style={styles.section2}>
                    <Text style={[styles.textBold , styles.TextAddress]}>Contato:<Text style={styles.text}> 98888-8888 <FontAwesome name="whatsapp" size={18} color={'#04d361'} /></Text></Text>
                </View>
                <View style={styles.section2}>
                    <Text style={[styles.textBold , styles.TextAddress]}>Valor:<Text style={styles.text}> R$ 200,00 </Text></Text>
                </View>
            </View>
            {children}
        </View>
    );
}

export default EventItem;