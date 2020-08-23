import React, { useState } from 'react';
import { View, ImageBackground, Text, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import { RectButton, TextInput, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation, Link } from '@react-navigation/native';
import PageHeaderRegister from '../../../components/PageHeaderRegister';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import api from '../../../services/api';

function AddEvent() {
    const { goBack } = useNavigation();
    function handleNavigateToEventList() { // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        goBack();
    };

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState('');
    const [contact, setContact] = useState('');

    async function handleAddNewEvent() {
        const response = await api.post('events/postteste', { //posttest para testes apenas
            company: "5f429bcf574ffc12741e9ff0",
            address: "5f402c6df5315c2c44effea1",//ids apenas para testes enquanto não implementa o login
            name,
            description,
            category,
            date: "2020-05-05", //data teste
            value,
            contact,
            tags: ["teste1", "teste2"]
        }).catch(ex => {
            console.log(ex)
        }).finally(() => {
            handleNavigateToEventList()
        })
    }

    return (
        <View style={styles.container}>
            <PageHeaderRegister title="Cadastrar Evento." />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <Text style={styles.titleRegister}>Informe os dados abaixo</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder="Nome" />
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={text => setDescription(text)}
                        placeholder="Descrição" />
                    <TextInput
                        style={styles.input}
                        value={category}
                        onChangeText={text => setCategory(text)}
                        placeholder="Categoria" />
                    <TextInput
                        style={styles.input}
                        placeholder="Data" />
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={text => setValue(text)}
                        placeholder="Valor" />
                    <TextInput
                        style={styles.input}
                        value={contact}
                        onChangeText={text => setContact(text)}
                        placeholder="Contato" />
                    <RectButton
                        style={styles.okButton} onPress={handleAddNewEvent}>
                        <Text style={styles.okButtonText}>Cadastrar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default AddEvent;