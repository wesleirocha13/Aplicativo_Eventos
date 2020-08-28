import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: '3%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginTop: '4%',
        margin: '2%',
        marginBottom: '4%',
    },

    title: {
        justifyContent: 'center',
        alignItems: "center",
    },

    titleText: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 21,
        paddingTop: '3%',
        paddingBottom: '5%',
    },

    EventContainer: {
        marginHorizontal: 5,
        paddingBottom: 5,
    },

    textBold: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 16,
        color: '#6a6180',
        fontWeight: 'bold',
    },

    TextAddress: {
        fontSize: 18,
    },

    text: {
        fontSize: 16,
        fontWeight: 'normal',
    },

    section1: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: '3%',
    },

    section2: {
        paddingBottom: '3%',
    },

    underLineText: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#EE0000',
        fontWeight: 'bold',
    },

    avatar: {
        paddingTop: '50%',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#eee',
    },

    // ----------------------------------

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

});

export default styles;