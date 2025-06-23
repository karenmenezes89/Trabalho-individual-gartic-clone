import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/roomListStyles';

const rooms = [
  { id: 1, name: 'Sala 1 - Desenhos' },
  { id: 2, name: 'Sala 2 - Filmes' },
  { id: 3, name: 'Sala 3 - Objetos' },
  { id: 4, name: 'Sala 4 - Profissões' },
];

export default function RoomListScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo-gartic.png')} style={styles.logo} />
      <Text style={styles.title}>Salas Disponíveis</Text>

      <ScrollView style={styles.scrollContainer}>
        {rooms.map((room) => (
          <TouchableOpacity key={room.id} style={styles.roomItem}>
            <Image source={require('../../assets/icon-room.png')} style={styles.roomIcon} />
            <Text style={styles.roomText}>{room.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}