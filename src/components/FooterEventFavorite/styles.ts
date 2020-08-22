import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    footer: {
        backgroundColor: '#fafafc',
        padding: '4%',
        paddingTop: '3%',
        paddingBottom: '3%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: "space-around",
    },

    edit: {
        flexDirection: 'row',
        alignSelf: 'center',
    },

    underLineText: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#EE0000',
        fontWeight: 'bold',
    },

    favoriteButton: {
        backgroundColor: '#8257e5',
        width: 50,
        height: 50,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },

    favorited: {
        backgroundColor: '#e33d3d',
    },

    contactButton: {
        backgroundColor: '#04d361',
        flex: 1,
        height: 50,
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
        marginLeft: 5,
    },
});

export default styles;