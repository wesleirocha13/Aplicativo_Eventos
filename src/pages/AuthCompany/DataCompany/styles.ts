import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    elementsCenter:{
        marginTop: "7%",
        justifyContent: "center",
        alignItems: 'center',
        paddingBottom: "8%",
    },

    elementsRight:{
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        margin: "5%",
    },
    
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#eee',
    },

    nameCompany:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        paddingTop: 25,
        textAlign: "center",
    },

    textBold:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: '5%',
    },

    text:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        fontWeight: 'normal',
    },

    okButton: {
        margin: "5%",
        marginTop: "2%",
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

    forgotPassword:{
        flexDirection: 'row',
        alignSelf: 'center',
    },

    underLineText: {
        fontSize: 18,
        textDecorationLine: 'underline',
        color: '#EE0000',
        fontWeight: 'bold',
    },

});

export default styles;