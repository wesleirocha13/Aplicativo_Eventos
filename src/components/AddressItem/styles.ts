import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 30,
    },

    title:{
        justifyContent: 'center',
        alignItems: "center",
    },

    titleText: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 18,
        paddingTop: '3%',
        paddingBottom: '3%',
    },

    addressContainer: { 
        marginHorizontal: 18, 
        paddingBottom: 5,
    },

    textBold:{
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        color: '#6a6180',
        fontWeight: 'bold',
    },

    text:{
        fontWeight: 'normal',
    },

    section1:{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: '3%',
    },

    section2:{
        paddingBottom: '3%',
    },

    footer:{
        backgroundColor: '#fafafc',
        padding: '4%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-around",
    },

    edit:{
        flexDirection: 'row',
        alignSelf: 'center',
    },

    underLineText: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#EE0000',
        fontWeight: 'bold',
    },

});

export default styles;