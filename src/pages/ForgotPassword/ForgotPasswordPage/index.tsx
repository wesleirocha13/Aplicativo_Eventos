import React, { useState } from 'react';
import { View, ImageBackground, Text, Linking, CheckBox, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import api from '../../../services/api';

function ForgotPasswordPage() {
    const { navigate } = useNavigation();
    const [email, setEmail] = useState('');
    const [cnpj, setCNPJ] = useState('');
    function handleNavigateToForgotPasswordSuccess(password2: String) {
    navigate('ForgotPasswordSuccess', {
            password: password2,
        });
    };

    async function redefinePassword() {
        try {
            const response = await api.get('companies/forgotPassword', {
                params: {
                    email: email,
                    cnpj: cnpj,
                }
            })
            newPassword(response.data._id)
        } catch (err) {
            Alert.alert("E-mail ou CNPJ inválidos!")
        }
    }

    async function newPassword(id: string) {
        try {
            const response = await api.put('companies/newPassword', {
                id: id
            })
            handleNavigateToForgotPasswordSuccess(response.data);
        } catch (err) {
            Alert.alert("Ocorreu um erro, tente novamente.")
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" enabled>
                <PageHeaderRegister title="Vissh esqueceu sua senha?" />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Não esquenta, {'\n'}vamos dar um jeito nisso.</Text>
                </View>

                <View style={styles.containerForm}>
                    <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={text => setEmail(text)} />
                    <TextInput style={styles.input} placeholder="CNPJ" value={cnpj} onChangeText={text => setCNPJ(text)} />
                    <RectButton style={styles.okButton} onPress={redefinePassword}>
                        <Text style={styles.okButtonText}>Redefinir</Text>
                    </RectButton>

                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default ForgotPasswordPage;