import { StyleSheet, View, Image, ScrollView, Alert, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

export default function ScreenDetalleCompra() {

    const route = useRoute();
    const { producto } = route.params;

    const comprar = () => {
        Alert.alert(
            '¡Listo!', 
            'Compra realizada correctamente',
            [{ text: 'OK' }]
        );
    }

    return (
        <ScrollView style={styles.contenedor}>
            <View style={styles.imagenContenedor}>
                <Image
                    source={{ uri: producto.imagen }}
                    style={styles.imagen}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.infoContenedor}>
                <Text style={styles.titulo}>{producto.nombre}</Text>
                <Text style={styles.artista}>{producto.categoria}</Text>

                <View style={styles.separador}/>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Precio</Text>
                    <Text style={styles.valor}>${producto.precio} MXN</Text>
                </View>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Categoría</Text>
                    <Text style={styles.valor}>{producto.categoria}</Text>
                </View>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Descripción</Text>
                    <Text style={styles.valor}>{producto.descripcion}</Text>
                </View>

                <TouchableOpacity 
                    style={styles.botonComprar} 
                    onPress={comprar}
                    activeOpacity={0.8}
                >
                    <Text style={styles.textoBoton}>Comprar</Text>
                </TouchableOpacity>
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
        fontSize: 26,
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
        alignItems: 'center',
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
        fontSize: 15,
        fontWeight: '500',
        maxWidth: '60%',
        textAlign: 'right',
    },
    botonComprar: {
        backgroundColor: '#7B8CDE',
        paddingVertical: 15,
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    textoBoton: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    }, 
})