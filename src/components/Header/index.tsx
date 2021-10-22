import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import LogoSVG from '../../assets/logo.svg';
import { UserPhoto } from '../UserPhoto';

export function Header() {
    return (
        <View style={styles.container}>
            <LogoSVG />
            <View style={styles.logoutButton}>
                <TouchableOpacity>
                    <Text style={styles.logoutText}>Sair</Text>
                </TouchableOpacity>

                <UserPhoto imgUri='https://github.com/RuizHenrique01.png' />

            </View>
        </View>
    );
}