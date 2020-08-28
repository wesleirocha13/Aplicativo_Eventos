import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    containerForm:{
        padding:25,
    },

    input:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 5,
    },

    inputPadding:{
        paddingBottom: '4%',
    },

    label:{
        fontSize: 15,
    },
    
    okButton: {
        marginVertical: 20, // O vertical sobe verticalmente e empurra tudo que tá em cima pra cima
        backgroundColor: '#04d361',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom: 10,
        
    },

    okButtonText: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Archivo_700Bold'
    },

    picker:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 4,
        marginBottom: 4,
    },

    ContainerDataTime:{
        
        paddingTop: '4%',
    },

    dataTime:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: 100,
        height: 45,
    },

    dataTimeText:{
        fontSize: 16,
        marginTop: '8%',
    },

    icon:{  
        marginTop: '10%',
    },

    containerDate:{
        flexDirection: 'row',
        
    },

    resultData:{
        fontSize: 16,
        height: 45,
        width: '65%',
        backgroundColor: '#FFF',
        borderRadius: 8,
        textAlignVertical: "center",
        paddingLeft: '3%',
        marginLeft: '2%',
        marginBottom: '4%',
    },

});

export default styles;