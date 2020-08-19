import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

function AddAddress() {

    const { goBack } = useNavigation();
    function handleGoBack() {
        goBack();
    };

    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Adicionar Endereço" />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <TextInput style={styles.input} placeholder="CEP" />
                    <TextInput style={styles.input} placeholder="Logradouro" />
                    <TextInput style={styles.input} placeholder="Número" />
                    <TextInput style={styles.input} placeholder="Bairro" />
                    <TextInput style={styles.input} placeholder="Cidade" />
                    <TextInput style={styles.input} placeholder="UF" />
                    <RectButton style={styles.okButton} onPress={handleGoBack}>
                        <Text style={styles.okButtonText}>Salvar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View >
    );
}

export default AddAddress;