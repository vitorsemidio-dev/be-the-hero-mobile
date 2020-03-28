import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();
  const message = 'Olá, xxx! Estou entrando em contato pois gostaria de ajudar no caso "caso_x" com o valor de R$100,00';

  const navigateBack = () => {
    navigation.goBack();
  }

  const sendEmail = () => {
    MailComposer.composeAsync({
      subject: 'Herói do caso: data_incident',
      recipients: ['vitorsemidio@gmail.com'],
      body: message
    })
  }

  const sendWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=21123456789&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
          
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>XXX</Text>
        
        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Descrição caso</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>R$100,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>
          Salve o dia!
        </Text>
        <Text style={styles.heroTitle}>
          Seja o herói desse caso.
        </Text>
        <Text style={styles.heroDescription}>
          Entre em contato:
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}