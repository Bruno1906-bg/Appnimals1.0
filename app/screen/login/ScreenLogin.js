import { StyleSheet, View, Alert } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { EstadoGlobalContext } from '../../context/EstadoGlobalUser'

export default function ScreenLogin() {

  const { setLogin } = useContext(EstadoGlobalContext);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const iniciarSesion = () => {
    if (usuario === 'admin' && password === '123') {
      setLogin(true);
    } else {
      Alert.alert('Error','Usuario o contraseña incorrectos');
    }
  }

  return (
    <View style={styles.contenedorp}>

      <Text style={styles.txthola}>Login</Text>
      <Text style={styles.txtsubtitle}>Bienvenido</Text>

      <View style={{ padding: 20 }}>
        <TextInput
          placeholder='Usuario'
          mode='outlined'
          value={usuario}
          onChangeText={setUsuario}
          style={styles.input}
          textColor='#FFFFFF'
          outlineColor="#7B8CDE"
          activeOutlineColor="#B8C0E8"
          placeholderTextColor="#9CA3AF"
          theme={{ colors: { primary: '#7B8CDE', onSurfaceVariant: '#9CA3AF', background: '#1E2130' }}}
        />
        <TextInput
          placeholder='Password'
          mode='outlined'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          textColor='#FFFFFF'
          outlineColor="#7B8CDE"
          activeOutlineColor="#B8C0E8"
          placeholderTextColor="#9CA3AF"
          theme={{ colors: { primary: '#7B8CDE', onSurfaceVariant: '#9CA3AF', background: '#1E2130' }}}
        />
      </View>

      <View style={styles.contenedorboton}>
        <Button 
          mode="contained" 
          buttonColor='#7B8CDE' 
          style={styles.boton} 
          onPress={iniciarSesion}
          textColor='#FFFFFF'
        >
          Iniciar Sesión
        </Button>
        <Button 
          mode="contained" 
          buttonColor='#2a2e3f' 
          style={styles.boton} 
          onPress={() => navigation.navigate('Crear Cuenta')}
          textColor='#B8C0E8'
        >
          Crear Cuenta
        </Button>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  contenedorp: {
    backgroundColor: '#12141A',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginTop: 20,
    backgroundColor: '#1E2130',
  },
  contenedorboton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  boton: {
    borderRadius: 12,
    width: 160,
    paddingVertical: 4,
  },
  txthola: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
  },
  txtsubtitle: {
    color: '#7B8CDE',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
})