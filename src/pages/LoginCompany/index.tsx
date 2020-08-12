import React, { useState } from 'react';
import { View, ImageBackground, Text, Linking, CheckBox, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

function LoginCompany() {

    const { goBack } = useNavigation(); // Serve para voltar para a pagina anterior, independente de qual seja
    const { navigate } = useNavigation();
    const [isSelected, setSelection] = useState(false);

    function handleNavigationBack() {
        goBack();
    }

    function handleNavigateToRegister() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('DataCompany');
    };
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior="position" enabled>
                <PageHeader title="Meus proffys favoritos" />
                <View style={styles.containerTitle}>
                    <Text style={styles.titleLogin}>Fazer Login</Text>
                </View>

                <View style={styles.containerForm}>
                    <TextInput style={styles.input} placeholder="Login" />
                    <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" />
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
                    <RectButton style={styles.okButton}>
                        <Text style={styles.okButtonText}>Entrar</Text>
                    </RectButton>

                </View>
            </KeyboardAvoidingView>
            <View style={styles.containerForm}>
                <TouchableOpacity onPress={handleNavigateToRegister} style={styles.forgotPassword}>
                    <Text style={styles.underLineText}>Esqueceu sua senha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LoginCompany;