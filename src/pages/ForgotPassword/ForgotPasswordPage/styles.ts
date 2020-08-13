import { StyleSheet } from 'react-native';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';
StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    containerTitle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 25,
    },

    title: {
        marginTop: '5%',
        fontSize: 18,
        lineHeight: 23,
        color: '#828282',
    },

    containerForm:{
        paddingLeft:25,
        paddingRight: 25,
    },

    input:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: '5%',
        marginBottom: 16,
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
});

export default styles;