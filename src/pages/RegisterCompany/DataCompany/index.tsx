import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import giveClassesbgImage from "../../assets/images/give-classes-background.png";
import { RectButton, TextInput } from "react-native-gesture-handler";
import { useNavigation, Link } from "@react-navigation/native";
import PageHeaderRegister from "../../../components/PageHeaderRegister";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

function DataCompany({ navigation }) {
  const [CNPJ, setCNPJ] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);

  function handleNavigateToRegister() {
    setClicked(true);

    if (validate()) {
      navigation.navigate("DataAddress", {
        CNPJ,
        name,
        description,
        email,
        password,
      });
    }
  }

  function validate() {
    if (CNPJ && name && description && email && password) {
      return true;
    }
    return false;
  }

  function validateInput(text) {
    if (clicked) {
      if (text) return true;
      return false;
    }
    return true;
  }

  function validateName() {
    if (name.length && name.length < 3) {
        return false;
    }
    return true;
  }

  function validatePass() {
    if (password.length && password.length < 6) {
        return false;
    }
    return true;
  }

  return (
    <View style={styles.container}>
      <PageHeaderRegister title="Crie sua conta gratuita." />
      <KeyboardAwareScrollView behavior="position" enabled>
        <View style={styles.containerForm}>
          <Text style={styles.titleRegister}>01. Dados da empresa</Text>
          <TextInput
            style={validateInput(CNPJ) ? styles.input : styles.inputDanger}
            placeholder="CNPJ"
            value={CNPJ}
            onChangeText={(CNPJ) => setCNPJ(CNPJ.replace(/[^0-9]/g, ''))}
          />
          <TextInput
            style={validateInput(name) && validateName() ? styles.input : styles.inputDanger}
            placeholder="Nome"
            value={name}
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={description}
            onChangeText={(description) => setDescription(description)}
          />
          <TextInput
            style={validateInput(email) ? styles.input : styles.inputDanger}
            placeholder="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            secureTextEntry={true}
            style={validateInput(password) && validatePass() ? styles.input : styles.inputDanger}
            placeholder="Senha"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <RectButton style={styles.okButton}>
            <Text
              style={styles.okButtonText}
              onPress={handleNavigateToRegister}
            >
              Próximo
            </Text>
          </RectButton>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default DataCompany;
