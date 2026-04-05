import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Text, Divider, IconButton } from 'react-native-paper';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function Screendetallesperro() {
    const navigation = useNavigation();
    const route = useRoute();
    const { perro } = route.params;

    return (
        <ScrollView style={styles.contenedor}>
            <View style={styles.imagenContenedor}>
                <Image
                    source={{ uri: perro.image?.url }}
                    style={styles.imagen}
                    resizeMode='cover'
                />
            </View>

            <View style={styles.infoContenedor}>
                <Text style={styles.titulo}>{perro.name}</Text>
                <Text style={styles.subtitulo}>{perro.breed_group || 'Grupo General'}</Text>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Temperamento</Text>
                    <Text style={styles.valor}>{perro.temperament || 'No disponible'}</Text>
                </View>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Vida promedio</Text>
                    <Text style={styles.valor}>{perro.life_span || 'No disponible'}</Text>
                </View>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Peso</Text>
                    <Text style={styles.valor}>{perro.weight?.metric} kg</Text>
                </View>

                <View style={styles.fila}>
                    <Text style={styles.etiqueta}>Altura</Text>
                    <Text style={styles.valor}>{perro.height?.metric} cm</Text>
                </View>

                <View style={styles.descripcionBloque}>
                    <Text style={styles.etiqueta}>Descripcion</Text>
                    <Text style={styles.descripcionTexto}>
                        {perro.bred_for || "Compañía y lealtad para el hogar."}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    contenedor: { 
        flex: 1, 
        backgroundColor: '#12141A' 
    },
    imagenContenedor: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor: '#1E2130',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    botonVolver: { 
        position: 'absolute', 
        left: 10, 
        top: 40, 
        zIndex: 1 
    },
    imagen: { 
        width: 280, 
        height: 280, 
        borderRadius: 20 
    },
    infoContenedor: { 
        padding: 25 
    },
    titulo: { 
        color: '#FFFFFF', 
        fontSize: 28, 
        fontWeight: 'bold', 
        textAlign: 'center' 
    },
    subtitulo: { 
        color: '#7B8CDE', 
        fontSize: 18, 
        textAlign: 'center', 
        marginTop: 5, 
        fontWeight: '600' 
    },
    fila: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-start', 
        paddingVertical: 12, 
        borderBottomWidth: 1, 
        borderBottomColor: '#1E2130' 
    },
    etiqueta: { 
        color: '#B8C0E8', 
        fontSize: 15, 
        fontWeight: 'bold' 
    },
    valor: { 
        color: '#FFFFFF', 
        fontSize: 14, 
        fontWeight: '500', 
        maxWidth: '60%', 
        textAlign: 'right' 
    },
    descripcionBloque: { 
        marginTop: 20 
    },
    descripcionTexto: { 
        color: '#9CA3AF', 
        fontSize: 15, 
        lineHeight: 22, 
        marginTop: 10, 
        textAlign: 'justify' 
    },
})