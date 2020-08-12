import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function TeacherList(){

    const [isFiltersVisible, setisFiltersVisible] = useState(false);

    function handleToggleFiltersVisible(){
        setisFiltersVisible(!isFiltersVisible); // Ele vai setar o valor contrário que está no filtro, ex:tava true agora vira false
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color={'#FFF'} />
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm}>
                            <Text style={styles.label}>Matéria</Text>
                            <TextInput style={styles.input}  placeholder="Qaul a mtéria?" />
                        
                        <View style={styles.inputGroup} >
                            <View style={styles.inputBlock} > 
                                <Text style={styles.label}>Dia de samena</Text>
                                <TextInput style={styles.input}  placeholder="Qual o dia?" />
                            </View>
                            <View style={styles.inputBlock} > 
                                <Text style={styles.label}>Horário</Text>
                                <TextInput  style={styles.input}  placeholder="Qual o Horário?" />
                            </View>
                        </View>
                        <RectButton style={styles.submiteButton}>
                            <Text style={styles.submiteButtonText}>Filtrar</Text>
                        </RectButton>

                    </View>
                )}    
            </PageHeader>    
            <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }} >
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>
        </View>

    );    
}

export default TeacherList;