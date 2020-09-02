import React, { useState } from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link, useFocusEffect } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function EditPasswordCompany() {

    const { goBack } = useNavigation();
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    const [newPassword, setNewPassword] = useState("");


    async function editPassword() {
        if (newPassword == passwordCheck) {
            try {
                const token = await AsyncStorage.getItem('CompanyToken');
                const response1 = await api.post('companies/password', {
                    token: token,
                    password: password,
                });
                if(newPassword == password){
                    Alert.alert("A nova senha não pode ser igual a atual!")    
                }else{
                    savePassword();
                }  
            } catch{
                Alert.alert("Senha atual está incorreta");
            }
        } else {
            Alert.alert("As senhas não conferem");
        }
    };

    async function savePassword() {
        try {
            const token = await AsyncStorage.getItem('CompanyToken');
            const response = await api.put('companies/password', {
                token: token,
                password: newPassword,
            });
        } catch{
            Alert.alert("Ocorreu um erro, tente novamente!");
        }
        Alert.alert("Alteração realizada com sucesso!");
        goBack();
    }

    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Edição Senha" />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Senha atual</Text>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha atual" value={password}
                            onChangeText={text => setPassword(text)} />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Nova senha</Text>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Nova senha" value={newPassword}
                            onChangeText={text => setNewPassword(text)} />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Confirmar nova senha</Text>
                        <TextInput secureTextEntry={true} style={styles.input} placeholder="Confirmar nova senha" value={passwordCheck}
                            onChangeText={text => setPasswordCheck(text)} />
                    </View>
                    <RectButton style={styles.okButton} onPress={editPassword}>
                        <Text style={styles.okButtonText}>Salvar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View >
    );
}

export default EditPasswordCompany;