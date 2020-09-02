import React, { useState } from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView, Alert } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link, useFocusEffect } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

function EditDataAddress({ route, navigation }) {

    const { idAddress } = route.params;
    const { goBack } = useNavigation();

    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [number, setNumber] = useState("");

    async function loadDataAddress() {
        const token = await AsyncStorage.getItem('CompanyToken');
        const response = await api.get('addresses/id', {
            params: {
                id: idAddress,
            }
        });
        setCep(response.data.cep);
        setStreet(response.data.street);
        setCity(response.data.city);
        setDistrict(response.data.district);
        setState(response.data.state);
        setNumber(response.data.number);
    };

    useFocusEffect(
        React.useCallback(() => {
            loadDataAddress();
        }, [])
    );

    async function saveEditions() {
        try {
            const token = await AsyncStorage.getItem('CompanyToken');
            const response = await api.put('addresses/', {
                token: token,
                id: idAddress,
                state: state,
                city: city,
                district: district,
                street: street,
                number: number,
                cep: cep,
            })

            Alert.alert("Alteração realizada com sucesso!");
            goBack();
        } catch{
            Alert.alert("Ocorreu um erro, tente novamente");
        }

    };

    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Edição Endereço" />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>CEP</Text>
                        <TextInput style={styles.input}
                            placeholder="CEP"
                            keyboardType="numeric"
                            value={cep}
                            onChangeText={setCep}
                        />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Logradouro</Text>
                        <TextInput style={styles.input}
                            placeholder="Logradouro"
                            value={street}
                            onChangeText={setStreet}
                        />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Número</Text>
                        <TextInput style={styles.input}
                            placeholder="Número"
                            keyboardType="numeric"
                            value={number}
                            onChangeText={setNumber}
                        />
                    </View>

                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Bairro</Text>
                        <TextInput style={styles.input}
                            placeholder="Bairro"
                            value={district}
                            onChangeText={setDistrict}
                        />
                    </View>

                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Cidade</Text>
                        <TextInput style={styles.input}
                            placeholder="Cidade"
                            value={city}
                            onChangeText={setCity}
                        />
                    </View>

                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>UF</Text>
                        <TextInput style={styles.input}
                            placeholder="UF"
                            value={state}
                            onChangeText={setState}
                        />
                    </View>
                    <RectButton style={styles.okButton} onPress={saveEditions}>
                        <Text style={styles.okButtonText}>Salvar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View >
    );
}

export default EditDataAddress;