import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Alert,} from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!usuario.trim() || !senha.trim()) {
      Alert.alert(
        'Campos obrigatórios',
        'Por favor, preencha o usuário e a senha.', [{ text: 'OK' }]);
    }  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/imgLogin.jpg')}
        style={styles.logo} />

      <TextInput
        placeholder="Telefone, usuário ou e-mail"
        value={usuario}
        onChangeText={setUsuario}
        style={styles.input}/>

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text></TouchableOpacity>

      <Text style={styles.link}>Esqueceu a senha?</Text>
      <StatusBar style="auto" /> </View>);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#1976d2',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    paddingHorizontal: 75,
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    paddingHorizontal: 75,
    marginTop:10,
    color: '#1976d2',
    textDecorationLine: 'underline',
    fontSize: 12,
    alignSelf: 'flex-end',
  },

});
