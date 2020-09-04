import { StyleSheet } from 'react-native';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';
StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    containerTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },

    titleLogin: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 25,
        lineHeight: 37,
        maxWidth: 180,
    },

    containerForm: {
        paddingLeft: 25,
        paddingRight: 25,
    },

    containerOptions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
    },

    underLineText: {
        fontSize: 12,
        textDecorationLine: 'underline',
    },

    rememberMeText: {
        paddingTop: 5,
        fontSize: 12,
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    checkboxContainer: {
        flexDirection: "row",
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
    },

    okButton: {
        marginVertical: 20, // O vertical sobe verticalmente e empurra tudo que tá em cima pra cima
        backgroundColor: '#04d361',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Archivo_700Bold'
    },

    forgotPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,

    },
});

export default styles;