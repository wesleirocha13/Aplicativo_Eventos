import React, { useState } from 'react';
import { View, ImageBackground, Text, Linking, CheckBox, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';

function ForgotPasswordPage() {
    const { navigate } = useNavigation();
    function handleNavigateToForgotPasswordSuccess() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('ForgotPasswordSuccess');
    };
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" enabled>
                <PageHeaderRegister title="Vissh esqueceu sua senha?" />
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Não esquenta, {'\n'}vamos dar um jeito nisso.</Text>
                </View>

                <View style={styles.containerForm}>
                    <TextInput style={styles.input} placeholder="E-mail" />
                    <RectButton style={styles.okButton} onPress={handleNavigateToForgotPasswordSuccess}>
                        <Text style={styles.okButtonText}>Redefinir</Text>
                    </RectButton>

                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default ForgotPasswordPage;