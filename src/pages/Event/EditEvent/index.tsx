import React from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

function EditEvent() {
    const { goBack } = useNavigation();
    function handleNavigateToEventList(){ // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        goBack();
    };
    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Edição Evento." />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input} placeholder="Nome" />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Data</Text>
                        <TextInput style={styles.input} placeholder="Data" />
                    </View>
                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput style={styles.input} placeholder="Horário" />
                    </View>

                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Descrição</Text>
                        <TextInput style={styles.input} placeholder="Descrição" />
                    </View>

                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Valor</Text>
                        <TextInput style={styles.input} placeholder="Valor" />
                    </View>

                    <View style={styles.inputPadding}>
                        <Text style={styles.label}>Contato</Text>
                        <TextInput style={styles.input} placeholder="Contato" />
                    </View>
                    <RectButton style={styles.okButton} onPress={handleNavigateToEventList}>
                        <Text style={styles.okButtonText}>Salvar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default EditEvent;