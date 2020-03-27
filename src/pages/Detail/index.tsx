import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={() => {}}>
          <Feather name="arrow-left" size={28} color="#e02041" />
          
        </TouchableOpacity>
      </View>
    </View>
  )
}