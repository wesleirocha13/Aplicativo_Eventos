import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  Picker,
  Alert,
  Image,
} from "react-native";
import styles from "./styles";
import {
  RectButton,
  TextInput,
  ScrollView,
  BorderlessButton,
} from "react-native-gesture-handler";
import { useNavigation, Link, useFocusEffect } from "@react-navigation/native";
import PageHeaderRegister from "../../../components/PageHeaderRegister";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import api from "../../../services/api";
import AsyncStorage from "@react-native-community/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome5 } from "@expo/vector-icons";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";

interface Address {
  _id: String;
  state: string;
  city: string;
  district: string;
  street: string;
  number: string;
  cep: string;
}

export interface Event {
  _id: string;
  address: Address;
  name: string;
  description: string;
  category: string;
  date: string;
  value: number;
  contact: string;
}

function EditEvent({ route }) {
  const { idEvent } = route.params;
  const { goBack } = useNavigation();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [contact, setContact] = useState("");
  const [selectedValueAddress, setSelectedValueAddress] = useState("");
  const [selectedValueCategory, setSelectedValueCategory] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState({ uri: "image" });

  async function loadEvent() {
    const token = await AsyncStorage.getItem("CompanyToken");
    const response = await api.get("events/id", {
      params: {
        token: token,
        id: idEvent,
      },
    });
    setName(response.data.name);
    setDescription(response.data.description);
    setValue(response.data.value);
    setContact(response.data.contact);
    setSelectedValueAddress(response.data.address._id);
    setSelectedValueCategory(response.data.category);
    const date = new Date(
      moment(response.data.date).format("ddd MMM DD YYYY HH:mm:ss ZZ")
    );
    setDate(date);
    setSelectedImage({ uri: response.data.image || "image" });
    loadAddressCompany();
  }

  async function loadAddressCompany() {
    const token = await AsyncStorage.getItem("CompanyToken");
    const response = await api.get("addresses/user", {
      params: {
        token: token,
      },
    });
    setAddresses(response.data);
  }

  useFocusEffect(
    React.useCallback(() => {
      loadEvent();
    }, [])
  );

  async function saveEditions() {
    if (selectedValueAddress == "addressNull") {
      Alert.alert("Escolha um endereço");
    } else if (selectedValueCategory == "categoryNull") {
      Alert.alert("Escolha uma categoria");
    } else {
      try {
        const token = await AsyncStorage.getItem("CompanyToken");
        if (selectedImage.uri && selectedImage.uri != "image") {
          const image = await fetch(selectedImage.uri);
          const blob = await image.blob();

          var reader = new FileReader();
          reader.readAsDataURL(blob);

          reader.onloadend = async function () {
            var base64data = reader.result;

            const response = await api.put("events/", {
              token: token,
              id: idEvent,
              name,
              description,
              category: selectedValueCategory,
              date: date,
              value,
              contact,
              address: selectedValueAddress,
              image: base64data,
            });
          };
        } else {
          const response = await api.put("events/", {
            token: token,
            id: idEvent,
            name,
            description,
            category: selectedValueCategory,
            date: date,
            value,
            contact,
            address: selectedValueAddress,
            image: "",
          });
        }

        Alert.alert("Alteração realizada com sucesso!");
        goBack();
      } catch {
        Alert.alert("Ocorreu um erro, tente novamente");
      }
    }
  }

  const onChange = async (event: any, selectedDate: any) => {
    const currentDate = (await selectedDate) || date;
    await setShowDate(false);
    await setShowTime(false);
    await setDate(currentDate);
  };

  const showModeDate = (currentMode: any) => {
    setShowDate(true);
  };
  const showModeTime = (currentMode: any) => {
    setShowTime(true);
  };

  async function openImagePickerAsync() {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permissão para acessar o rolo da camera é necessária");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ uri: pickerResult.uri });
  }

  return (
    <View style={styles.container}>
      <PageHeaderRegister title="Edição Evento" />
      <KeyboardAwareScrollView behavior="position" enabled>
        <View style={styles.containerForm}>
          <View style={styles.inputPadding}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputPadding}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
              style={styles.input}
              placeholder="Descrição"
              value={description}
              onChangeText={setDescription}
            />
          </View>
          <Text style={styles.label}>Categoria</Text>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={selectedValueCategory}
              style={{ height: 50, borderRadius: 15 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValueCategory(itemValue)
              }
            >
              <Picker.Item
                label="Selecione uma Categoria"
                value="categoryNull"
                color="#CDC9C9"
              />
              <Picker.Item label="Show" value="show" />
              <Picker.Item label="Teatro" value="teatro" />
              <Picker.Item label="Exposições" value="exposições" />
              <Picker.Item label="Feiras" value="feiras" />
              <Picker.Item label="Outros" value="outros" />
            </Picker>
          </View>
          <View style={styles.inputPadding}>
            <Text style={styles.label}>Valor</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Valor"
              value={`${value}`}
              onChangeText={setValue}
            />
          </View>

          <View style={styles.inputPadding}>
            <Text style={styles.label}>Contato</Text>
            <TextInput
              style={styles.input}
              placeholder="Contato"
              keyboardType="numeric"
              value={contact}
              onChangeText={setContact}
            />
          </View>
          <Text style={styles.label}>Endereço</Text>
          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={selectedValueAddress}
              style={{ height: 50, borderRadius: 15 }}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValueAddress(itemValue)
              }
            >
              <Picker.Item
                label="Selecione um Endereço"
                value="addressNull"
                color="#CDC9C9"
              />
              {addresses.map((address: Address) => (
                <Picker.Item
                  key={address._id as string}
                  label={address.street + " N°:" + address.number}
                  value={address._id}
                />
              ))}
            </Picker>
          </View>
          <View style={styles.ContainerDataTime}>
            <View style={styles.containerDate}>
              <RectButton onPress={showModeDate} style={styles.dataTime}>
                <Text style={styles.dataTimeText}>Data</Text>
                <FontAwesome5
                  name="calendar-alt"
                  size={20}
                  style={styles.icon}
                />
              </RectButton>
              <Text style={styles.resultData}>
                {" "}
                {moment(date).format("DD/MM/YYYY")}
              </Text>
            </View>
            <View style={styles.containerDate}>
              <RectButton onPress={showModeTime} style={styles.dataTime}>
                <Text style={styles.dataTimeText}>Hora</Text>
                <FontAwesome5 name="clock" size={20} style={styles.icon} />
              </RectButton>
              <Text style={styles.resultData}>
                {" "}
                {moment(date).format("HH:mm")}
              </Text>
            </View>
          </View>
          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              display="default"
              onChange={onChange}
              style={styles.dataTime}
            />
          )}
          {showTime && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              display="default"
              onChange={onChange}
            />
          )}

          <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: selectedImage.uri }} />
          </View>

          <View style={styles.containerButton}>
            <RectButton style={styles.okButton} onPress={openImagePickerAsync}>
              <Text style={styles.okButtonText}>Inserir foto</Text>
            </RectButton>
            <RectButton
              style={styles.okButton}
              onPress={(state) => {
                setSelectedImage({ uri: "image" });
              }}
            >
              <Text style={styles.okButtonText}>Remover foto</Text>
            </RectButton>
          </View>

          <RectButton style={styles.okButton} onPress={saveEditions}>
            <Text style={styles.okButtonText}>Salvar</Text>
          </RectButton>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

export default EditEvent;
