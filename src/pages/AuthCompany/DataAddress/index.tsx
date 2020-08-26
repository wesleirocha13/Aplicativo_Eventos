import React, {useState} from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import styles from './styles';
import AddressItem, {Address} from '../../../components/AddressItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface DataAddressProps {

};

const DataAddress: React.FC<DataAddressProps> = ({ children }) => {
    const { navigate } = useNavigation();
    function handleNavigateToAddAddress() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('AddAddress');
    };

    const [addresses, setAddresses] = useState([]);

    async function loadAddressCompany() {
        const token = await AsyncStorage.getItem('CompanyToken');
        const response = await api.get('addresses/user', {
            params: {
                token: token,
            }
        });
        setAddresses(response.data);
    };

    useFocusEffect(
        React.useCallback(() => {
            loadAddressCompany();
        }, [])
    );


    return (
        <View style={styles.container}>
            {children}
            <ScrollView style={styles.elementsRight}>
                <TouchableOpacity style={styles.addAddressContainer} onPress={handleNavigateToAddAddress}>
                    <Feather name="plus-circle" size={28} color={'#04d361'} />
                    <Text style={styles.addAddressLabel}>Adicionar outro endereço</Text>
                </TouchableOpacity>
                {addresses.map((address: Address) => <AddressItem key={address._id} address={address} />)}
            </ScrollView >
        </View>
    );
}

export default DataAddress;