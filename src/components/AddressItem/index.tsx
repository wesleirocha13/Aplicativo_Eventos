import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function AddressItem() {
    const { navigate } = useNavigation();
    function handleNavigateToEditAddress() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('EditDataAddress');
    };
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}> Endereço</Text>
            </View>
            <View style={styles.addressContainer}>
                <View style={styles.section2}>
                    <Text style={styles.textBold}>Rua:<Text style={styles.text}> Humberto Valério </Text>
                        <Text style={styles.textBold}>    N°:<Text style={styles.text}> 200 </Text></Text></Text>
                </View>
                <View style={styles.section1}>
                    <Text style={styles.textBold}>Bairro:<Text style={styles.text}> Progresso </Text></Text>
                    <Text style={styles.textBold}>CEP:<Text style={styles.text}> 36.050-280 </Text></Text>
                </View>
                <View style={styles.section1}>
                    <Text style={styles.textBold}>Cidade:<Text style={styles.text}> Juiz de fora </Text></Text>
                    <Text style={styles.textBold}>UF:<Text style={styles.text}> MG </Text></Text>
                </View>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.edit} onPress={handleNavigateToEditAddress}>
                    <Feather name="edit" size={20} color={'#EE0000'} />
                    <Text style={styles.underLineText}> Alterar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.edit}>
                    <Feather name="trash-2" size={20} color={'#EE0000'} />
                    <Text style={styles.underLineText}> Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default AddressItem;