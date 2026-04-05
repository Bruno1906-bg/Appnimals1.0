import { StyleSheet, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Text, IconButton, Divider } from 'react-native-paper'
import { useRoute, useNavigation } from '@react-navigation/native'

export default function ScreenGatosDetalles() {
    const navigation = useNavigation();
    const route = useRoute();
    const { gato } = route.params;

    return (
        <ScrollView style={styles.contenedor}>
            <View style={styles.imagenContenedor}>
                <Image
                    source={{ uri: `https://cdn2.thecatapi.com/images/${gato.reference_image_id}.jpg` }}
                    style={styles.imagen}
                />
            </View>

            <View style={styles.infoContenedor}>
                <Text style={styles.titulo}>{gato.name}</Text>
                <Text style={styles.artista}>{gato.origin}</Text>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Temperamento</Text>
                    <Text style={styles.valor}>{gato.temperament}</Text>
                </View>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Esperanza de vida</Text>
                    <Text style={styles.valor}>{gato.life_span} años</Text>
                </View>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Peso</Text>
                    <Text style={styles.valor}>{gato.weight?.metric} kg</Text>
                </View>

                <View style={styles.descripcionBloque}>
                    <Text style={styles.etiqueta}>Descripción</Text>
                    <Text style={styles.descripcionTexto}>{gato.description}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#12141A',
    },
    imagenContenedor: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor: '#1E2130',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    imagen: {
        width: 280,
        height: 280,
        borderRadius: 20,
    },
    infoContenedor: {
        padding: 25,
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    artista: {
        color: '#7B8CDE',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: '600',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#1E2130',
    },
    etiqueta: {
        color: '#B8C0E8',
        fontSize: 15,
        fontWeight: 'bold',
    },
    valor: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
        maxWidth: '60%',
        textAlign: 'right',
    },
    descripcionBloque: {
        marginTop: 20,
    },
    descripcionTexto: {
        color: '#9CA3AF',
        fontSize: 15,
        lineHeight: 22,
        marginTop: 10,
        textAlign: 'justify',
    },
})