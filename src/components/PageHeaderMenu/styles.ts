import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257e5',
        paddingTop: '10%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '5%',
        borderBottomWidth: 0.2,
        borderBottomColor: '#FFF',
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    title: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        marginHorizontal: '20%',
    },
});

export default styles;