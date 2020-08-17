import React from 'react';
import { View, Image, Text } from 'react-native';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import givClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

function Landing() {

    const { navigate } = useNavigation();

    function handleNavigateToLoginCompany(){ // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('LoginCompany');
    };

    function handleNavigateToStudyPage(){ // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('StudyTabs');
    };

    return(
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner}/>
            <Text style={styles.title}>Seja bem vindo {'\n'} 
                <Text style={styles.titleBold}>O que deseja fazer?</Text>{/* Quando coloco uma tag text dentro da outra a tag inferior herda o css da tag pai */}
            </Text>

            <View style={styles.buttonsContainer}>
                {/* Colocando array [] eu posso passar mais de um style */}
                {/* RectButton serve para dar um efeito no botão*/} 
                <RectButton onPress={handleNavigateToStudyPage} style={[styles.button, styles.buttonPrimary]}> 
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Buscar Eventos</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToLoginCompany} style={[styles.button, styles.buttonSecondary]}> 
                    <Image source={givClassesIcon} />
                    <Text style={styles.buttonText}>Cadastrar Eventos</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default Landing;