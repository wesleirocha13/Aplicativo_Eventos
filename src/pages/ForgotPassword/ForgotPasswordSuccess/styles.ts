import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257E5',    
    },

    textContainer:{
        marginTop: '50%',
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
    },

    textTitle:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#FFF',
        fontSize: 35,
        textAlign: 'center',
    },

    textDescription:{
        fontFamily: 'Poppins_600SemiBold',
        color: '#DCDCDC',
        textAlign: 'center',
        maxWidth: 200,
        paddingTop: 10,
    },

    loginButton: {
        backgroundColor: '#04d361',
        height: 50,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        margin: "8%",
        marginTop: '30%',
    },

    loginButtonText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Archivo_700Bold'
    },

});

export default styles;