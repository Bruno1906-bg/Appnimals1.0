import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { EstadoGlobalContext } from './app/context/EstadoGlobalUser';
import { Entypo, FontAwesome5, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

// Importacion de pantallas
import ScreenInicial from './app/screen/home/ScreenInicial';
import ScreenLogin from './app/screen/login/ScreenLogin';
import ScreenCrearCuenta from './app/screen/login/ScreenCrearCuenta';
import ScreenGatos from './app/screen/animales/ScreenGatos';
import ScreenGatosDetalles from './app/screen/animales/ScreenGatosDetalles';
import ScreenCompras from './app/screen/compras/ScreenCompras';
import ScreenConfig from './app/screen/config/ScreenConfig';
import ScreenDetalleCompras from './app/screen/compras/ScreenDetalleCompras';
import ScreenMiperfil from './app/screen/perfil/ScreenMiperfil';
import ScreenPerros from './app/screen/animales/ScreenPerros';
import Screendetallesperro from './app/screen/animales/ScreenPerrosDetalles';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function MyNavegation() {
  const { login } = useContext(EstadoGlobalContext);
  return login ? <MiTabNavigator /> : <MyStackLogin />;
}

function MiTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#12141A' }, 
        headerTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#7B8CDE',
        tabBarInactiveTintColor: '#9CA3AF', 
        tabBarStyle: {
          backgroundColor: '#1E2130', 
          borderTopColor: '#7B8CDE',
        }
      }}
    >
      <Tab.Screen name="Home" component={MyStackPerfil} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) =>
          <Entypo name="home" size={size} color={color} />
      }} />

      <Tab.Screen name="Gatos" component={MyAdopcionGato} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) =>
          <MaterialCommunityIcons name="cat" size={size} color={color} />
      }} />

      <Tab.Screen name="Perros" component={MyAdopcionPerro} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) =>
          <MaterialCommunityIcons name="dog" size={size} color={color} />
      }} />

  
      <Tab.Screen name="Compras" component={MyStackCompras} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) =>
          <Entypo name="shopping-cart" size={size} color={color} />
      }} />

      <Tab.Screen name="Ajustes" component={ScreenConfig} options={{
        tabBarIcon: ({ color, size }) =>
          <Fontisto name="player-settings" size={size} color={color} />
      }} />
    </Tab.Navigator>
  )
}

function MyAdopcionGato() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#12141A' },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Stack.Screen name="gato" component={ScreenGatos} options={{ title: "Gatos" }} />
      <Stack.Screen name="detallegato" component={ScreenGatosDetalles} options={{ title: "Información del gato" }} />
    </Stack.Navigator>
  )
}

function MyStackLogin() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#12141A' },
        headerTintColor: '#FFFFFF',
      }}
    >
      <Stack.Screen name="Iniciar Sesión" component={ScreenLogin} />
      <Stack.Screen name="Crear Cuenta" component={ScreenCrearCuenta} />
    </Stack.Navigator>
  )
}

function MyStackCompras() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#12141A' },
        headerTintColor: '#FFFFFF',
      }}>
      <Stack.Screen name="compra" component={ScreenCompras} options={{ title: "Compras" }} />
      <Stack.Screen name="detallecompra" component={ScreenDetalleCompras} options={{ title: "Detalles de la Compra" }} />
    </Stack.Navigator>
  )
}

function MyStackPerfil() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#12141A' },
        headerTintColor: '#ffffff',
      }}>
      <Stack.Screen name="inicio" component={ScreenInicial} options={{ title: "Home" }} />
      <Stack.Screen name="miperfil" component={ScreenMiperfil} options={{ title: "Mi Perfil" }} />
    </Stack.Navigator>
  )
}

function MyAdopcionPerro() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#12141A' },
        headerTintColor: '#ffffff',
      }}>
      <Stack.Screen name="perro" component={ScreenPerros} options={{ title: "Perros" }} />
      <Stack.Screen name="detallesperro" component={Screendetallesperro} options={{ title: "Detalles Perro" }} />
    </Stack.Navigator>
  )
}