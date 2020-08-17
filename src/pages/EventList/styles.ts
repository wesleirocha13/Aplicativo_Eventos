import { StyleSheet, TouchableWithoutFeedbackComponent } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    menu:{
        elevation: 3,
        zIndex: 1,
    },

    topBarContainer: {
        backgroundColor: '#8257e5',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '5%',
    },

    topBarItens: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    searchForm:{
        marginTop: 15,
        marginBottom: 5,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },
    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock:{
        width: '48%',
    },

    input:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },
    submiteButton:{
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    submiteButtonText:{
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },

    addEvent:{
        flexDirection: 'row',
    },

    addEventLabel:{
        fontSize: 16,
        alignSelf: "center",
        paddingLeft: 5,
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
    },

    item:{
        marginTop: '15%',
    },

});

export default styles;