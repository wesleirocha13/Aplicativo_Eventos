import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    titleRegister: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 23,
        lineHeight: 37,
        paddingBottom: 15,
    },

    containerForm:{
        padding:25,
    },

    input:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 5,
    },

    inputDanger:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 5,
        borderBottomColor: "red",
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    okButton: {
        marginTop: 15,
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