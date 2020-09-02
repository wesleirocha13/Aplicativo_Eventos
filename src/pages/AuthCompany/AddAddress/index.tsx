import React, { useState } from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function AddAddress() {

    const { goBack } = useNavigation();
    function handleGoBack() {
        goBack();
    };

    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [number, setNumber] = useState("");

    async function saveAddress() {
        try {
            const token = await AsyncStorage.getItem('CompanyToken');
            const id = JSON.parse(await AsyncStorage.getItem('CompanyId') || '');
            const response = await api.post('addresses/', {
                    company: id,
                    state: state,
                    city: city,
                    district: district,
                    street: street,
                    number: number,
                    cep: cep,

            },
            {
                params:{
                    token: token
                }
            });

            Alert.alert("Endereço cadastrado com sucesso!");
            goBack();
        } catch{
            Alert.alert("Ocorreu um erro, tente novamente.");
        }
    };

    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Adicionar Endereço" />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <TextInput style={styles.input}
                        placeholder="CEP"
                        keyboardType="numeric"
                        value={cep}
                        onChangeText={(cep) => setCep(cep)}
                    />
                    <TextInput style={styles.input}
                        placeholder="Logradouro"
                        value={street}
                        onChangeText={(street) => setStreet(street)}
                    />
                    <TextInput style={styles.input}
                        placeholder="Número"
                        keyboardType="numeric"
                        value={number}
                        onChangeText={(number) => setNumber(number)}
                    />
                    <TextInput style={styles.input}
                        placeholder="Bairro"
                        value={district}
                        onChangeText={(district) => setDistrict(district)}
                    />
                    <TextInput style={styles.input}
                        placeholder="Cidade"
                        value={city}
                        onChangeText={(city) => setCity(city)}
                    />
                    <TextInput style={styles.input}
                        placeholder="UF"
                        value={state}
                        onChangeText={(state) => setState(state)}
                    />
                    <RectButton style={styles.okButton} onPress={saveAddress}>
                        <Text style={styles.okButtonText}>Salvar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View >
    );
}

export default AddAddress;