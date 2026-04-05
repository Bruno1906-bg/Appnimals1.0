import { StyleSheet, View, TouchableOpacity, Text, Alert, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

export default function ScreenConfig() {

    const opcionSimple = (opcion) => {
        Alert.alert('Pestaña Ajustes', `Clic en la opción: ${opcion}`);
    }

    return (
        <ScrollView style={styles.contenedor}>
            <Text style={styles.tituloSeccion}>Ajustes</Text>

            <TouchableOpacity style={styles.opcion} onPress={() => opcionSimple('Notificaciones')}>
                <View style={styles.fila}>
                    <MaterialIcons name="notifications-none" size={22} color="#7B8CDE" />
                    <Text style={styles.textoOpcion}>Notificaciones</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opcion} onPress={() => opcionSimple('Privacidad y Seguridad')}>
                <View style={styles.fila}>
                    <MaterialIcons name="lock-outline" size={22} color="#7B8CDE" />
                    <Text style={styles.textoOpcion}>Privacidad y Seguridad</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.opcion} onPress={() => opcionSimple('Idioma de la App')}>
                <View style={styles.fila}>
                    <MaterialIcons name="language" size={22} color="#7B8CDE" />
                    <Text style={styles.textoOpcion}>Idioma de la App</Text>
                </View>
            </TouchableOpacity>
        </ScrollView> 
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#12141A',
        padding: 20,
    },
    tituloSeccion: {
        color: '#7B8CDE',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 15,
        marginTop: 20,
    },
    opcion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E2130',
        padding: 18,
        borderRadius: 15,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#2a2e3f',
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textoOpcion: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 12,
    },
})