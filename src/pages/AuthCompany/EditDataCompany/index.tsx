import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation, Link, useFocusEffect } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface EditDataCompanyProps {

};

const EditDataCompany: React.FC<EditDataCompanyProps> = ({ children }) => {

    const [name, setName] = useState('');
    const [cnpj, setcnpj] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    async function loadDataCompany() {
        const token = await AsyncStorage.getItem('CompanyToken');
        const response = await api.get('companies/id', {
            params: {
                token: token,
            }
        });
        setName(response.data.name);
        setcnpj(response.data.cnpj);
        setEmail(response.data.email);
        setDescription(response.data.description);
    };

    useFocusEffect(
        React.useCallback(() => {
            loadDataCompany();
        }, [])
    );

    const { goBack } = useNavigation();
    async function saveEditions() {
        try {
            const token = await AsyncStorage.getItem('CompanyToken');
            const response = await api.put('companies/', {
                token: token,
                name: name,
                cnpj: cnpj,
                email: email,
                description: description
            })

            Alert.alert("Alteração realizada com sucesso!");
            goBack();
        } catch{
            Alert.alert("Ocorreu um erro, tente novamente");
        }

    };
    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Edição Cadastro" />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label} >CNPJ</Text>
                        <TextInput style={styles.input}
                            keyboardType="numeric"
                            placeholder="CNPJ"
                            value={cnpj}
                            onChangeText={setcnpj}
                        />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input}
                            placeholder="Nome"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput style={styles.input}
                            placeholder="E-mail"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Descrição</Text>
                        <TextInput style={styles.input}
                            placeholder="Descrição"
                            value={description}
                            onChangeText={setDescription}
                        />
                    </View>
                    <RectButton style={styles.okButton} onPress={saveEditions}>
                        <Text style={styles.okButtonText}>Salvar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default EditDataCompany;