import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ScreenLogin from './app/screen/login/ScreenLogin';
import MyNavegation from './MyNavegation';
import { NavigationContainer } from '@react-navigation/native';
import EstadoGlobalUser from './app/context/EstadoGlobalUser';

export default function App() {
  return (
    <EstadoGlobalUser>
      <NavigationContainer>
        <MyNavegation/>
      </NavigationContainer>
    </EstadoGlobalUser>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});