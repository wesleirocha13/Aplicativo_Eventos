import React, { useState } from 'react';
import { View, ImageBackground, Text, Linking, CheckBox, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../components/PageHeaderRegister';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function LoginCompany() {
    const { goBack } = useNavigation(); // Serve para voltar para a pagina anterior, independente de qual seja
    const { navigate } = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    function handleNavigateToRegister() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('DataCompany');
    };
    function handleNavigateToforgotPassword() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('ForgotPasswordPage');
    };

    async function handleNavigateToMenuDrawer() { 
        try{
            const response = await api.post('companies/authenticate', {
                email: email,
                password: password,
            })
            const { data, token } = response.data;
            await AsyncStorage.multiSet([
                ['CompanyToken', token],
                ['CompanyId', JSON.stringify(data.id)],
                ['CompanyName', JSON.stringify(data.name)],
                ['CompanyCNPJ', JSON.stringify(data.cnpj)],
            ]); 
            navigate('MenuDrawer');
        }catch (err){
            Alert.alert("Usuário ou Senha inválidos");
        }
    };

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" enabled>
                <PageHeaderRegister title="Faça login para continuar." />
                <View style={styles.containerTitle}>
                    <Text style={styles.titleLogin}>Fazer Login</Text>
                </View>
                {errorMessage && <Text>{errorMessage}</Text>}
                <View style={styles.containerForm}>
                    <TextInput style={styles.input} placeholder="E-mail" value={email}
                            onChangeText={text => setEmail(text)} />
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" value={password}
                            onChangeText={text => setPassword(text)} />
                    <View style={styles.containerOptions}>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Lembar-me</Text>
                        </View>
                        <TouchableOpacity onPress={handleNavigateToRegister} >
                            <Text style={styles.underLineText}>Criar uma conta</Text>
                        </TouchableOpacity>
                    </View>
                    <RectButton style={styles.okButton} onPress={handleNavigateToMenuDrawer}>
                        <Text style={styles.okButtonText}>Entrar</Text>
                    </RectButton>

                </View>
            </KeyboardAvoidingView>
            <View style={styles.containerForm}>
                <TouchableOpacity onPress={handleNavigateToforgotPassword} style={styles.forgotPassword}>
                    <Text style={styles.underLineText}>Esqueceu sua senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginCompany;