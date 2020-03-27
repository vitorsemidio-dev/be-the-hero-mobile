import React from 'react';
import { Feather } from '@expo/vector-icons';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>100 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Escolha um dos casos e salve o dia.</Text>

      <FlatList 
        style={styles.incidentList}
        data={[1,2,3]}
        keyExtractor={incident => String(incident)}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>XXX</Text>
            
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Descrição caso</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$100,00</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => {}}
            >
              <Text style={styles.detailsButtonText}>
                Ver mais detalhes
              </Text>

              <Feather name="arrow-right" size={16} color="#e02041" />

            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
