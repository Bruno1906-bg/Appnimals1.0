import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { EstadoGlobalContext } from '../../context/EstadoGlobalUser';

export default function ScreenMiperfil() {
  const navigation = useNavigation();
  const { setLogin } = useContext(EstadoGlobalContext);

  const cerrarSesion = () => {
    Alert.alert(
      'Cerrar Sesión',
      '¿Estás seguro que deseas salir?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Salir', onPress: () => setLogin(false) }
      ]
    )
  }

  return (
    <View style={styles.contenedor}>

      <View style={styles.perfilHeader}>
        <IconButton
          icon="account-circle"
          iconColor="#7B8CDE"
          size={100}
        />
        <Text style={styles.nombre}>Jefte Asael Castillo Chi</Text>
        <Text style={styles.correo}>2402137@utrivieramaya.edu.mx</Text>
      </View>

      <View style={styles.infoContenedor}>
        <View style={styles.datoBloque}>
          <Text style={styles.etiqueta}>Matrícula</Text>
          <Text style={styles.valor}>20260045</Text>
        </View>

        <View style={styles.datoBloque}>
          <Text style={styles.etiqueta}>Telefono</Text>
          <Text style={styles.valor}>9842092740</Text>
        </View>
      </View>

      <View style={styles.centrarBoton}>
        <TouchableOpacity style={styles.botonSalir} onPress={cerrarSesion}>
          <Text style={styles.textoBotonSalir}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#12141A',
    padding: 30,
    alignItems: 'center',
  },
  perfilHeader: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  nombre: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  correo: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  infoContenedor: {
    width: '100%',
    marginBottom: 40,
  },
  datoBloque: {
    backgroundColor: '#1E2130',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  etiqueta: {
    color: '#B8C0E8',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  valor: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 5,
  },
  centrarBoton: {
    width: '100%',
  },
  botonSalir: {
    backgroundColor: '#7B8CDE',
    padding: 15,
    borderRadius: 15,
    width: '100%',
    elevation: 4,
  },
  textoBotonSalir: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});