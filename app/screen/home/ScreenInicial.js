import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Card, Avatar, IconButton, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ScreenInicial() {
  const navigation = useNavigation();

  const MascotasAdopcion = [
    { id: 1, nombre: 'Perros', icono: 'dog' },
    { id: 2, nombre: 'Gatos', icono: 'cat' },
    { id: 3, nombre: 'Aves', icono: 'bird' },
    { id: 4, nombre: 'Otros', icono: 'rabbit' },
  ];

  const Actividades = [
    { id: 1, nombre: 'Refugios', icono: 'home-heart' },
    { id: 2, nombre: 'Eventos', icono: 'calendar-star' },
    { id: 3, nombre: 'Donaciones', icono: 'hand-heart' },
    { id: 4, nombre: 'Tips', icono: 'lightbulb-on' },
  ];

  return (
    <ScrollView 
      style={styles.contenedor}
      contentContainerStyle={styles.contenidoScroll}
    >
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text variant="headlineMedium" style={styles.saludo}>¡Hola!</Text>
          <Text variant="bodyMedium" style={styles.subtitulo}>¿Listo para adoptar un nuevo amigo?</Text>
        </View>
        <IconButton
          icon="account-circle"
          iconColor="#7B8CDE"
          size={60}
          onPress={() => navigation.push('miperfil')}
        />
      </View>

      <Text style={styles.seccionTitulo}>Mascotas por categoría</Text>
      <View style={styles.acomodo}>
        {MascotasAdopcion.map((mascota, index) => (
          <Card style={styles.tarjeta} key={`adopcion-${index}`}>
            <Card.Content style={styles.tarjetaContenido}>
              <Avatar.Icon size={40} icon={mascota.icono} backgroundColor="#7B8CDE" color="#FFFFFF" />
              <Text style={styles.textoTarjeta}>{mascota.nombre}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>

      <Text style={styles.seccionTitulo}>Otras actividades</Text>
      <View style={styles.acomodo}>
        {Actividades.map((actividad, index) => (
          <Card style={styles.tarjeta} key={`actividad-${index}`}>
            <Card.Content style={styles.tarjetaContenido}>
              <Avatar.Icon size={40} icon={actividad.icono} backgroundColor="#7B8CDE" color="#FFFFFF" />
              <Text style={styles.textoTarjeta}>{actividad.nombre}</Text>
            </Card.Content>
          </Card>
        ))}
      </View>

      <View style={styles.contenedorBoton}>
        <Button 
          mode="contained" 
          onPress={() => navigation.push('miperfil')}
          style={styles.botonAccion}
          contentStyle={styles.botonAccionContenido}
          buttonColor="#7B8CDE"
          textColor="#FFFFFF"
          labelStyle={styles.textoBoton}
        >
          Configurar Perfil
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#12141A',
  },
  contenidoScroll: {
    padding: 20,
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  saludo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#9CA3AF',
  },
  seccionTitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  acomodo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tarjeta: {
    width: '48%',
    backgroundColor: '#1E2130',
    marginBottom: 15,
    borderRadius: 12,
  },
  tarjetaContenido: {
    alignItems: 'center',
    padding: 15,
  },
  textoTarjeta: {
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
  contenedorBoton: {
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
  },
  botonAccion: {
    borderRadius: 30,
    width: '90%',
  },
  botonAccionContenido: {
    paddingVertical: 10,
  },
  textoBoton: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});