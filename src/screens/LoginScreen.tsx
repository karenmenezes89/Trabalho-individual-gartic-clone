import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/loginStyles';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo-gartic.png')} style={styles.logo} />

      <View style={styles.avatarContainer}>
        <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
        <TouchableOpacity style={styles.editIcon}>
          <Text style={{ fontSize: 18 }}>✏️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Nick</Text>
        <TextInput value="Menezes" style={styles.input} />
      </View>

      <View style={styles.inputBox}>
        <Text style={styles.label}>Idioma</Text>
        <TextInput value="Português" style={styles.input} />
      </View>

      <TouchableOpacity style={styles.playButton}>
        <View style={styles.buttonContent}>
          <Image source={require('../../assets/icon-play.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>JOGAR</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.roomButton}
        onPress={() => navigation.navigate('Salas')}
      >
        <View style={styles.buttonContent}>
          <Image source={require('../../assets/icon-room.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>SALAS</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}