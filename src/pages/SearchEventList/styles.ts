import { StyleSheet, TouchableWithoutFeedbackComponent } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },
    teacherList:{
        marginTop: -40,
    },
    searchForm:{
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
        width: '50%',
    },

    inputBlock2:{
        backgroundColor: '#FFF',
        width: '48%',
        height: 55,
        borderRadius: 8,
        marginTop: 22.5,
        marginLeft: -35     
    },

    input:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 10,
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
        marginBottom: '8%',
    },

    submiteButtonText:{
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },

    picker:{
        height: '48%'
    },

    dataTime:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: 86.5,
        height: 50,
    },

    dataTimeText:{
        fontSize: 16,
        marginTop: '13%',
    },

    icon:{  
        marginTop: '15%',
    },

    containerDate:{
        flexDirection: 'row',
        marginTop: '3%',
    },

    ContainerResultData:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 16,
        height: 50,
        width: '68%',
        backgroundColor: '#FFF',
        borderRadius: 8,
        paddingLeft: '3%',
        marginLeft: '3%',
        marginBottom: '1%',
    },

    resultDataText:{
        fontSize: 16,
        textAlignVertical: 'center',
    },

    ContainerClean:{
        flexDirection: 'row',
        paddingTop: '22%',
        marginLeft: '10%'
    },

    cleanText:{
        fontSize: 13,
        color: '#EE0000',
        fontWeight: 'bold',
    },
});

export default styles;