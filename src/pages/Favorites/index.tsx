import React from 'react';
import { View, ImageBackground, Text, ScrollView } from 'react-native';
import styles from './styles';
import giveClassesbgImage from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


function Favorites(){
    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />
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

export default Favorites;