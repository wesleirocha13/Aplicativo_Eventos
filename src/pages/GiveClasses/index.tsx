import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveCLessses(){

    const { goBack } = useNavigation(); // Serve para voltar para a pagina anterior, independente de qual seja

    function handleNavigationBack(){
        goBack();
    }
    return(
        <View style={styles.container}>
            {/* Toda vez que eu usar a tag ImageBackground vou precisar definir a largura*/}
            <ImageBackground source={giveClassesbgImage} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>Para começar voçê precisa se cadastrar na anossa plataforma Web.</Text>
            </ImageBackground>

            <RectButton style={ styles.okButton} onPress={handleNavigationBack}>
                <Text style={styles.okButtonText}>Tudo bem.</Text>
            </RectButton>
        </View>
    );
}

export default GiveCLessses;