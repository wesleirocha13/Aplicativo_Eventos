import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeader from '../../../components/PageHeader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { Feather } from '@expo/vector-icons';

function DataAddress() {
    return (
        <View style={styles.container}>
            <PageHeader title="Crie sua conta gratuita." />
            <KeyboardAwareScrollView behavior="position" enabled>
                <ScrollView style={styles.containerForm}>
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
                    <RectButton style={styles.okButton} >
                        <Text style={styles.okButtonText}>Próximo</Text>
                    </RectButton>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default DataAddress;