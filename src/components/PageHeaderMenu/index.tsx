import React, { ReactNode } from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';
import styles from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';

interface PageHeaderProps {
    title: string,
    headerRight?: ReactNode; // Significa que posso passar um componente como uma propriedade
};

const PageHeaderMenu: React.FC<PageHeaderProps> = ({title, children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View>
                    {children}
                </View>
                <View>
                    <Text style={styles.title} >{title}</Text>
                </View>
            </View>
        </View>
    );    
}

export default PageHeaderMenu;