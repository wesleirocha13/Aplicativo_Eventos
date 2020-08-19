import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

interface EditDataCompanyProps {

};

const EditDataCompany: React.FC<EditDataCompanyProps> = ({ children }) => {
    const { goBack } = useNavigation();
    function handleGoBack(){
        goBack();
    };
    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Edição Cadastro"/>
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input} placeholder="Nome" />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label} >CNPJ</Text>
                        <TextInput style={styles.input} placeholder="CNPJ" />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput style={styles.input} placeholder="E-mail" />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Descrição</Text>
                        <TextInput style={styles.input} placeholder="Descrição" />
                    </View>
                    <RectButton style={styles.okButton} >
                        <Text style={styles.okButtonText} onPress={handleGoBack}>Salvar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default EditDataCompany;