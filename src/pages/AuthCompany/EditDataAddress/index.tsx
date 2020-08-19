import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

function EditDataAddress() {

    const { goBack } = useNavigation();
    function handleGoBack(){
        goBack();
    };

    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Edição Endereço" />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>CEP</Text>
                        <TextInput style={styles.input} placeholder="CEP" />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Logradouro</Text>
                        <TextInput style={styles.input} placeholder="Logradouro" />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Número</Text>
                        <TextInput style={styles.input} placeholder="Número" />
                    </View>

                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Bairro</Text>
                        <TextInput style={styles.input} placeholder="Bairro" />
                    </View>

                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Cidade</Text>
                        <TextInput style={styles.input} placeholder="Cidade" />
                    </View>

                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>UF</Text>
                        <TextInput style={styles.input} placeholder="UF" />
                    </View>
                    <RectButton style={styles.okButton} onPress={handleGoBack}>
                        <Text style={styles.okButtonText}>Salvar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View >
    );
}

export default EditDataAddress;