import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

function AddEvent() {
    const { goBack } = useNavigation();
    function handleNavigateToEventList(){ // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        goBack();
    };
    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Cadastrar Evento." />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <Text style={styles.titleRegister}>Informe os dados abaixo</Text>
                    <TextInput style={styles.input} placeholder="Nome" />
                    <TextInput style={styles.input} placeholder="Data" />
                    <TextInput style={styles.input} placeholder="Horário" />
                    <TextInput style={styles.input} placeholder="Descrição" />
                    <TextInput style={styles.input} placeholder="Valor" />
                    <TextInput style={styles.input} placeholder="Contato" />
                    <RectButton style={styles.okButton} onPress={handleNavigateToEventList}>
                        <Text style={styles.okButtonText}>Cadastrar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default AddEvent;