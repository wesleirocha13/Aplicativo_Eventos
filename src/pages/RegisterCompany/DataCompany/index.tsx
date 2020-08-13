import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

function DataCompany() {
    const { navigate } = useNavigation();
    function handleNavigateToRegister() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('DataAddress');
    };
    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Crie sua conta gratuita." />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <Text style={styles.titleRegister}>01. Dados da empresa</Text>
                    <TextInput style={styles.input} placeholder="CNPJ" />
                    <TextInput style={styles.input} placeholder="Razão Social" />
                    <TextInput style={styles.input} placeholder="Nome fantasia" />
                    <TextInput style={styles.input} placeholder="Nome fantasia" />
                    <TextInput style={styles.input} placeholder="Nome fantasia" />
                    <RectButton style={styles.okButton} >
                        <Text style={styles.okButtonText} onPress={handleNavigateToRegister}>Próximo</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default DataCompany;