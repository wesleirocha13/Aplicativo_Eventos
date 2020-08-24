import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./styles";
import giveClassesbgImage from "../../assets/images/give-classes-background.png";
import {
  RectButton,
  TextInput,
  ScrollView,
  BorderlessButton,
} from "react-native-gesture-handler";
import { useNavigation, Link } from "@react-navigation/native";
import PageHeaderRegister from "../../../components/PageHeaderRegister";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { Feather } from "@expo/vector-icons";
import api from "../../../services/api";

function DataAddress({ route, navigation }) {
  const company = route.params;

  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");
  const [clicked, setClicked] = useState(false);

  async function handleNavigateToRegisterSuccess() {
    if (validate()) {
      api
        .post("companies/postteste", {
          company,
          address: { cep, street, city, district, state, number },
        })
        .then((response) => {
          console.log(response);
        })
        .catch((ex) => {
          console.log(ex);
        })
        .finally(() => {
          navigation.navigate("RegisterSuccess");
        });
    }
  }

  function validate() {
    setClicked(true);

    if (cep && street && city && district && state && number) {
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

  return (
    <View style={styles.container}>
      <PageHeaderRegister title="Adicione seu endereço para finalizar." />
      <KeyboardAwareScrollView behavior="position" enabled>
        <View style={styles.containerForm}>
          <Text style={styles.titleRegister}>02. Endereço da empresa</Text>
          <TextInput
            style={validateInput(cep) ? styles.input : styles.inputDanger}
            placeholder="CEP"
            value={cep}
            onChangeText={(cep) => setCep(cep.replace(/[^0-9]/g, ""))}
          />
          <TextInput
            style={validateInput(street) ? styles.input : styles.inputDanger}
            placeholder="Rua"
            value={street}
            onChangeText={(street) => setStreet(street)}
          />
          <TextInput
            style={
              validateInput(city) ? styles.input : styles.inputDanger
            }
            placeholder="Cidade"
            value={city}
            onChangeText={(city) => setCity(city)}
          />
          <TextInput
            style={
              validateInput(district) ? styles.input : styles.inputDanger
            }
            placeholder="Bairro"
            value={district}
            onChangeText={(district) => setDistrict(district)}
          />
          <TextInput
            style={
              validateInput(state) ? styles.input : styles.inputDanger
            }
            placeholder="Estado"
            value={state}
            onChangeText={(state) => setState(state)}
          />
          <TextInput
            style={validateInput(number) ? styles.input : styles.inputDanger}
            placeholder="Numero"
            value={number}
            onChangeText={(number) => setNumber(number.replace(/[^0-9]/g, ""))}
          />
          <RectButton
            style={styles.okButton}
            onPress={handleNavigateToRegisterSuccess}
          >
            <Text style={styles.okButtonText}>Próximo</Text>
          </RectButton>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default DataAddress;
