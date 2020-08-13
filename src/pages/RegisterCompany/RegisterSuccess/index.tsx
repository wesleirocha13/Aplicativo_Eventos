import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

function RegisterSuccess() {

    const { navigate } = useNavigation();

    function handleNavigateToLoginCompany() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('LoginCompany');
    };

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <View >
                    <Text style={styles.textTitle}>Cadastro {'\n'} Concluído!</Text>
                </View>
                <View>
                    <Text style={styles.textDescription}>Agora você já pode cadastrar seus eventos em nossa plataforma.</Text>
                </View>
            </View>
            <View>
                <RectButton style={styles.loginButton} onPress={handleNavigateToLoginCompany}>
                    <Text style={styles.loginButtonText}>Fazer Login</Text>
                </RectButton>
            </View>
        </View>
    );
}

export default RegisterSuccess;