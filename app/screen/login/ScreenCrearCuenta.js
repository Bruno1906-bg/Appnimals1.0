import { StyleSheet, View, ScrollView } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper'
import React from 'react'

export default function ScreenCrearCuenta() { 
  return (
    <ScrollView style={styles.contenedorp}>

      <Text style={styles.txthola}>Crear Cuenta</Text>
      <Text style={styles.txtsubtitle}>Bienvenido</Text>

      <View style={{ padding: 20 }}>
        <TextInput
          placeholder='Ingrese su nombre'
          mode='outlined'
          style={styles.input}
          textColor='#FFFFFF'
          outlineColor="#7B8CDE"
          activeOutlineColor="#B8C0E8"
          placeholderTextColor="#9CA3AF"
          theme={{ colors: { primary: '#7B8CDE', onSurfaceVariant: '#9CA3AF', background: '#1E2130' }}}
        />
        <TextInput
          placeholder='Ingrese sus apellidos'
          mode='outlined'
          style={styles.input}
          textColor='#FFFFFF'
          outlineColor="#7B8CDE"
          activeOutlineColor="#B8C0E8"
          placeholderTextColor="#9CA3AF"
          theme={{ colors: { primary: '#7B8CDE', onSurfaceVariant: '#9CA3AF', background: '#1E2130' }}}
        />
        <TextInput
          placeholder='Ingrese fecha de nacimiento'
          mode='outlined'
          style={styles.input}
          textColor='#FFFFFF'
          outlineColor="#7B8CDE"
          activeOutlineColor="#B8C0E8"
          placeholderTextColor="#9CA3AF"
          theme={{ colors: { primary: '#7B8CDE', onSurfaceVariant: '#9CA3AF', background: '#1E2130' }}}
        />
        <TextInput
          placeholder='Ingrese un correo'
          mode='outlined'
          keyboardType='email-address'
          style={styles.input}
          textColor='#FFFFFF'
          outlineColor="#7B8CDE"
          activeOutlineColor="#B8C0E8"
          placeholderTextColor="#9CA3AF"
          theme={{ colors: { primary: '#7B8CDE', onSurfaceVariant: '#9CA3AF', background: '#1E2130' }}}
        />
        <TextInput
          placeholder='Ingrese nombre de usuario'
          mode='outlined'
          style={styles.input}
          textColor='#FFFFFF'
          outlineColor="#7B8CDE"
          activeOutlineColor="#B8C0E8"
          placeholderTextColor="#9CA3AF"
          theme={{ colors: { primary: '#7B8CDE', onSurfaceVariant: '#9CA3AF', background: '#1E2130' }}}
        />
        <TextInput
          placeholder='Ingrese una contraseña'
          mode='outlined'
          secureTextEntry
          style={styles.input}
          textColor='#FFFFFF'
          outlineColor="#7B8CDE"
          activeOutlineColor="#B8C0E8"
          placeholderTextColor="#9CA3AF"
          theme={{ colors: { primary: '#7B8CDE', onSurfaceVariant: '#9CA3AF', background: '#1E2130' }}}
        />
        <TextInput
          placeholder='Confirmar contraseña'
          mode='outlined'
          secureTextEntry
          style={styles.input}
          textColor='#FFFFFF'
          outlineColor="#7B8CDE"
          activeOutlineColor="#B8C0E8"
          placeholderTextColor="#9CA3AF"
          theme={{ colors: { primary: '#7B8CDE', onSurfaceVariant: '#9CA3AF', background: '#1E2130' }}}
        />
      </View>

      <View style={styles.contenedorboton}>
        <Button mode="contained" buttonColor='#2a2e3f' style={styles.boton} textColor='#B8C0E8'>
          Cancelar
        </Button>
        <Button mode="contained" buttonColor='#7B8CDE' style={styles.boton} textColor='#FFFFFF'>
          Crear Cuenta
        </Button>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contenedorp: {
    backgroundColor: '#12141A',
    flex: 1,
  },
  input: {
    marginTop: 10,
    backgroundColor: '#1E2130',
  },
  contenedorboton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: 40,
    marginTop: 10,
  },
  boton: {
    borderRadius: 12,
    width: 160,
    paddingVertical: 4,
  },
  txthola: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 50,
  },
  txtsubtitle: {
    color: '#7B8CDE',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
    fontWeight: '500',
  },
})