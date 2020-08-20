import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

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