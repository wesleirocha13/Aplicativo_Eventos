import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeader from '../../../components/PageHeader';

function DataCompany() {
    const { navigate } = useNavigation();
    function handleNavigateToRegister() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('DataAddress');
    };
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" enabled>
                <PageHeader title="Crie sua conta gratuita." />
                <View style={styles.containerForm}>
                    <Text style={styles.titleRegister}>01. Dados da empresa</Text>
                    <TextInput style={styles.input} placeholder="CNPJ" />
                    <TextInput style={styles.input} placeholder="Razão Social" />
                    <TextInput style={styles.input} placeholder="Nome fantasia" />
                    <RectButton style={styles.okButton} >
                        <Text style={styles.okButtonText} onPress={handleNavigateToRegister}>Próximo</Text>
                    </RectButton>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default DataCompany;