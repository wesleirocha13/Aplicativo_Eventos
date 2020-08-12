import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6f0',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden', // QUando ultrapassar o tamanho da caixa ele esconte
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee',
    },

    profileInfo:{
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20,
    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 5,
    },

    bio: {
        fontFamily: 'Poppins_400Regular',
        marginHorizontal: 24,
        fontSize: 16,
        lineHeight: 26,
        color: '#6a6180',
        paddingBottom: 15,
    },

    footer:{
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
    },

    price:{
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 14,
    },
    
    priceValue:{
        fontFamily: 'Archivo_700Bold',
        color: '#8257e5',
        fontSize: 16,
    },

    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 10,
    },

    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 56,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },

    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },

    contactButtonText:{
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16,
    },

    favorited:{
        backgroundColor: '#e33d3d',
    },
});

export default styles;