import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257e5',
        padding: 30,
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Isso serve pra colocar cada um  icone em uma extremidade da tela
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 24,
        maxWidth: 160,
        marginVertical: 40,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default styles;