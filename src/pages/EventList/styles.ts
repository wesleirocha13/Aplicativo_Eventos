import { StyleSheet, TouchableWithoutFeedbackComponent } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    topBarContainer: {
        backgroundColor: '#8257e5',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingBottom: '5%',
    },

    topBarItens: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '3%',
        paddingBottom: '3%',
        width: 320
    },

    addEvent: {
        flexDirection: 'row',
        height: 28,
        width: 300
    },

    filter: {
        width: 100,
        height: 28
    },

    searchForm: {
        marginTop: 15,
        marginBottom: 5,
    },

    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },

    label2: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputBlock: {
        width: '48%',
    },

    inputBlock2: {
        backgroundColor: '#FFF',
        width: '48%',
        height: 55,
        borderRadius: 8,
        marginTop: 18,
        marginLeft: -35

    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 16,
    },

    submiteButton: {
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },

    submiteButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    },

    addEventLabel: {
        fontSize: 16,
        alignSelf: "center",
        paddingLeft: 5,
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
    },

    picker: {
        height: '48%'
    },

    dataTime: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: 92,
        height: 50,
    },

    dataTimeText: {
        fontSize: 16,
        marginTop: '13%',
    },

    icon: {
        marginTop: '15%',
    },

    containerDate: {
        flexDirection: 'row',
        marginTop: '3%',
    },

    ContainerResultData: {
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

    resultDataText: {
        fontSize: 16,
        textAlignVertical: 'center',
    },

    ContainerClean: {
        flexDirection: 'row',
        paddingTop: '22%',
        marginLeft: '10%'
    },

    cleanText: {
        fontSize: 13,
        color: '#EE0000',
        fontWeight: 'bold',
    }
});

export default styles;