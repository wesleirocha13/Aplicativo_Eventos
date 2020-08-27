import React, { useState } from 'react';
import { View, ImageBackground, Text, Image, Alert } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

export interface Address {
    _id: string,
    company: String
    state: string,
    city: string,
    district: string,
    street: string,
    number: number,
    cep: string,
}

interface AddressItemProps {
    address: Address,
    changeList: any
}

const AddressItem: React.FC<AddressItemProps> = ({ address, changeList }) => {
    const { navigate, goBack } = useNavigation();
    function handleNavigateToEditAddress() {
        navigate('EditDataAddress', {
            idAddress: address._id,
        });
    };

    function confirm() {
        Alert.alert(
            'Atenção',
            'Esta operação não pode ser desfeita, tem certeza que desaja excluir?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => deleteAddress() }
            ],
            { cancelable: false }
        );
    };

    async function deleteAddress() {
        try {
            const token = await AsyncStorage.getItem('CompanyToken');
            const response = await api.delete('addresses/', {
                params: {
                    token: token,
                    id: address._id,
                }
            });

            changeList();
            Alert.alert("Exclusão realizada com sucesso!");
        } catch{
            Alert.alert("Ocorreu um erro, tente novamente");
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}> Endereço</Text>
            </View>
            <View style={styles.addressContainer}>
                <View style={styles.section2}>
                    <Text style={styles.textBold}>Rua:<Text style={styles.text}> {address.street} </Text>
                        <Text style={styles.textBold}>    N°:<Text style={styles.text}> {address.number} </Text></Text></Text>
                </View>
                <View style={styles.section1}>
                    <Text style={styles.textBold}>Bairro:<Text style={styles.text}> {address.district} </Text></Text>
                    <Text style={styles.textBold}>CEP:<Text style={styles.text}> {address.cep} </Text></Text>
                </View>
                <View style={styles.section1}>
                    <Text style={styles.textBold}>Cidade:<Text style={styles.text}> {address.city} </Text></Text>
                    <Text style={styles.textBold}>UF:<Text style={styles.text}> {address.state} </Text></Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.edit} onPress={handleNavigateToEditAddress}>
                    <Feather name="edit" size={20} color={'#EE0000'} />
                    <Text style={styles.underLineText}> Alterar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.edit} onPress={confirm}>
                    <Feather name="trash-2" size={20} color={'#EE0000'} />
                    <Text style={styles.underLineText}> Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AddressItem;