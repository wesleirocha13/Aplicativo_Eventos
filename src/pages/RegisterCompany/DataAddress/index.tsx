import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Feather } from '@expo/vector-icons';

function DataAddress() {

    const { navigate } = useNavigation();

    function handleNavigateToRegisterSuccess(){ // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        navigate('RegisterSuccess');
    };

    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Adicione seu endereço para finalizar." />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <Text style={styles.titleRegister}>02. Endereço da empresa</Text>
                    <TextInput style={styles.input} placeholder="CEP" />
                    <TextInput style={styles.input} placeholder="Cidade" />
                    <TextInput style={styles.input} placeholder="Logradouro" />
                    <TextInput style={styles.input} placeholder="Rua" />
                    <TextInput style={styles.input} placeholder="Numero" />
                    <View style={styles.addAddressContainer}>
                        <BorderlessButton>
                            <Feather name="plus-circle" size={28} />
                        </BorderlessButton>
                        <Text style={styles.addAddressLabel}>Adicionar outro endereço</Text>
                    </View>
                    <RectButton style={styles.okButton} onPress={handleNavigateToRegisterSuccess}>
                        <Text style={styles.okButtonText}>Próximo</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default DataAddress;