import { StyleSheet } from 'react-native';
import { Archivo_700Bold } from '@expo-google-fonts/archivo';
StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',
        justifyContent: 'center',
        padding: 40,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 18,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },

    okButton: {
        marginVertical: 40, // O vertical sobe verticalmente e empurra tudo que tá em cima pra cima
        backgroundColor: '#04d361',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Archivo_700Bold'
    },
});

export default styles;