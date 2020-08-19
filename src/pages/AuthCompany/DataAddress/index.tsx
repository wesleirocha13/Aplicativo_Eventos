import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import styles from './styles';
import AddressItem from '../../../components/AddressItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface DataAddressProps {

};

const DataAddress: React.FC<DataAddressProps> = ({ children }) => {
    const { navigate } = useNavigation();
    function handleNavigateToAddAddress() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('AddAddress');
    };
    return (
        <View style={styles.container}>
            {children}
            <ScrollView style={styles.elementsRight}>
                <TouchableOpacity style={styles.addAddressContainer} onPress={handleNavigateToAddAddress}>
                    <Feather name="plus-circle" size={28} color={'#04d361'} />
                    <Text style={styles.addAddressLabel}>Adicionar outro endereço</Text>
                </TouchableOpacity>
                <AddressItem />
                <AddressItem />
                <AddressItem />
                <AddressItem />
            </ScrollView >
        </View>
    );
}

export default DataAddress;