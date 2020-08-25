import React, { useEffect, useState } from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView, Image } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, Link, DrawerActions, useFocusEffect } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface DataCompanyProps {

};

const DataCompany: React.FC<DataCompanyProps> = ({ children }) => {

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

    const { navigate } = useNavigation();
    function handleNavigatetoEditDataCompany() {
        navigate('EditDataCompany');
    };
    function handleNavigateToforgotPassword() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('ForgotPasswordPage');
    };
    return (
        <View style={styles.container}>
            {children}
            <View style={styles.elementsCenter}>
                {/* Quando for usar uma imagem externa (Pegar por URL) tem que fazer desse jeito */}
                <Image style={styles.avatar} source={{ uri: 'https://github.com/wesleirocha13.png' }} />
                <Text style={styles.nameCompany}> {name}</Text>
            </View>
            <View style={styles.elementsRight}>
                <Text style={styles.textBold}>CNPJ:
                    <Text style={styles.text}> {cnpj}</Text>
                </Text>
                <Text style={styles.textBold}>E-mail:
                    <Text style={styles.text}> {email}</Text>
                </Text>
                <Text style={styles.textBold}>Descrição:
                    <Text style={styles.text}> {description}</Text>
                </Text>
                <TouchableOpacity onPress={handleNavigateToforgotPassword} style={styles.forgotPassword}>
                    <Feather name="edit" size={20} color={'#EE0000'} />
                    <Text style={styles.underLineText}> Alterar senha</Text>
                </TouchableOpacity>
            </View>
            <RectButton style={styles.okButton} >
                <Text style={styles.okButtonText} onPress={handleNavigatetoEditDataCompany}>Editar Dados</Text>
            </RectButton>
        </View>
    );
}

export default DataCompany;