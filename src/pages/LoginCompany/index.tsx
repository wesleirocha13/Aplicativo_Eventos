import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, TouchableOpacity, Switch } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeaderRegister from '../../components/PageHeaderRegister';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function LoginCompany() {
    const { goBack } = useNavigation(); // Serve para voltar para a pagina anterior, independente de qual seja
    const { navigate } = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    function handleNavigateToRegister() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('DataCompany');
    };
    function handleNavigateToforgotPassword() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('ForgotPasswordPage');
    };

    async function handleNavigateToMenuDrawer() {
        try {
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
            rememberUser();
            navigate('MenuDrawer');
        } catch (err) {
            Alert.alert("Usuário ou Senha inválidos");
        }
    };

    async function rememberUser() {
        try {
            if (rememberMe) {
                await AsyncStorage.setItem("userData", JSON.stringify({ email, password }))
                await AsyncStorage.setItem("rememberMe", JSON.stringify({ rememberMe: true }))
            } else {
                await AsyncStorage.removeItem('userData');
                await AsyncStorage.setItem("rememberMe", JSON.stringify({ rememberMe: false }))
            }
        } catch (error) {
            console.log("Falha ao manipular dados do usuário")
        }
    }

    async function getRememberedUser() {
        try {
            const data = await AsyncStorage.getItem('userData');
            if (data) {
                let userData = JSON.parse(data)
                setEmail(userData.email)
                setPassword(userData.password)
            }
        } catch (error) {
            console.log("Falha ao obter dados do usuário")
        }
    };

    async function getRememberMe() {
        try {
            const data = await AsyncStorage.getItem('rememberMe');
            if (data) {
                let remember = JSON.parse(data)
                setRememberMe(remember.rememberMe)
                remember.rememberMe && getRememberedUser()
            }
        } catch (error) {
            console.log("Falha ao obter opção de 'lembrar-me'")
        }
    };

    useEffect(() => {
        getRememberMe()
    }, []);

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
                            <Switch
                                value={rememberMe}
                                onValueChange={(value) => setRememberMe(value)}
                            />
                            <Text style={styles.rememberMeText}>Lembrar-me</Text>
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