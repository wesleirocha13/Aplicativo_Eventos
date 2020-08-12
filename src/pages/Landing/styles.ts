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

    banner: {
        width: '100%', //Refere-se ao tamnho que a imagem pode ocupar referente a tela
        resizeMode: 'contain', // Serve para evitar distorcer a imagem, pois tinha dito que a largura vai ser 100    
    },
    title:{
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30, //Para espaçamento entre as linhas
        marginTop: 80,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row', // Para que os dois botoes fiquem na msm linha
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height:150,
        width: '48%',
        backgroundColor: 'green',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },

    buttonPrimary: {
        backgroundColor: '#9871f5',
    },

    buttonSecondary: {
        backgroundColor: '#04d361',
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 18,
    },

    totalsConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 300, // serve para definar a largura máxima que o texto pode ocupar
        marginTop: 40,
    },
});

export default styles;