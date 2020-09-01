import React, { useState } from "react";
import {
    View,
    ImageBackground,
    Text,
    KeyboardAvoidingView,
    Picker,
    Alert,
    Button,
    Platform,
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

function AddEvent() {
    const { goBack } = useNavigation();
    function handleNavigateToEventList() {
        // serve para ir p/ próxima página, quando eu chamar essa função  vai direcionar para "GiveClasses"
        goBack();
    }

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [contact, setContact] = useState("");
    const [selectedValueAddress, setSelectedValueAddress] = useState(
        "addressNull"
    );
    const [selectedValueCategory, setSelectedValueCategory] = useState(
        "categoryNull"
    );
    const [addresses, setAddresses] = useState([]);
    const [showDate, setShowDate] = useState(false);
    const [showTime, setShowTime] = useState(false);
    const [date, setDate] = useState(new Date());
    const [selectedImage, setSelectedImage] = useState({ uri: "image" });

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
            loadAddressCompany();
        }, [])
    );

    async function handleAddNewEvent() {
        if (selectedValueAddress == "addressNull") {
            Alert.alert("Escolha um endereço");
        } else if (selectedValueCategory == "categoryNull") {
            Alert.alert("Escolha uma categoria");
        } else {
            try {
                const id = JSON.parse((await AsyncStorage.getItem("CompanyId")) || "");
                const token = await AsyncStorage.getItem("CompanyToken");

                if (selectedImage.uri && selectedImage.uri != "image") {
                    const image = await fetch(selectedImage.uri);
                    const blob = await image.blob();

                    var reader = new FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = async function () {
                        var base64data = reader.result;
                        const response = await api.post(
                            "events/",
                            {
                                company: id,
                                address: selectedValueAddress,
                                name,
                                description,
                                category: selectedValueCategory,
                                date: date,
                                value,
                                contact,
                                image: base64data,
                            },
                            {
                                params: {
                                    token: token,
                                },
                            }
                        );
                        Alert.alert("Evento cadastrado com sucesso!");
                        goBack();
                    }
                } else {
                    const response = await api.post(
                        "events/",
                        {
                            company: id,
                            address: selectedValueAddress,
                            name,
                            description,
                            category: selectedValueCategory,
                            date: date,
                            value,
                            contact,
                        },
                        {
                            params: {
                                token: token,
                            },
                        }
                    );
                    Alert.alert("Evento cadastrado com sucesso!");
                    goBack();

                }

            } catch (err) {
                Alert.alert("Ocorreu um erro, tente novamente.");
            }
        }
    }

    const onChange = async (event: any, selectedDate: any) => {
        const currentDate = (await selectedDate) || date;
        await setShowDate(false);
        await setShowTime(false);
        await setDate(currentDate);
        console.log(currentDate);
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
            <PageHeaderRegister title="Cadastrar Evento." />
            <KeyboardAwareScrollView behavior="position" enabled>
                <View style={styles.containerForm}>
                    <Text style={styles.titleRegister}>Informe os dados abaixo</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder="Nome"
                    />
                    <TextInput
                        style={styles.input}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                        placeholder="Descrição"
                    />
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
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        placeholder="Valor"
                    />
                    <TextInput
                        style={styles.input}
                        value={contact}
                        keyboardType="numeric"
                        onChangeText={(text) => setContact(text)}
                        placeholder="Contato"
                    />
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

                    <RectButton style={styles.okButton} onPress={handleAddNewEvent}>
                        <Text style={styles.okButtonText}>Cadastrar</Text>
                    </RectButton>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

export default AddEvent;
