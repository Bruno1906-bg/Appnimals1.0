import { StyleSheet, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Text, Card, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const productosLocales = [
    { id: 1, nombre: 'Alimento para perro', precio: 299, categoria: 'Alimento', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIB-VJBXoTfnoYR7Z0y_yXzLOpJiuAQUdvw&s', descripcion:'Alimento para perro delicioso marca patito'},
    { id: 2, nombre: 'Alimento para gato', precio: 249, categoria: 'Alimento', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyVx2QtYChAb1PBk30mF6PEyblMpjx5p_ow&s', descripcion:'Comida para gato barato le dura un buen rato, gato barato comida para rato' },
    { id: 3, nombre: 'Collar', precio: 599, categoria: 'Accesorios', imagen: 'https://m.media-amazon.com/images/I/81SDp4MGsoL._AC_UF350,350_QL80_.jpg', descripcion:'Collar basico para perros' },
    { id: 4, nombre: 'Cama para Mascotas', precio: 450, categoria: 'Hogar', imagen: 'https://m.media-amazon.com/images/I/71p6dn7OQTL._AC_UF1000,1000_QL80_.jpg', descripcion:'Cama para mascotas sencilla' },
    { id: 5, nombre: 'Juguete para Perro', precio: 150, categoria: 'Juguetes', imagen: 'https://purina.com.mx/sites/default/files/2024-02/mejores-juguetes-para-perros-importancia.jpg', descripcion:'Juguete para perros' }, 
    { id: 6, nombre: 'Juguete para Gato', precio: 120, categoria: 'Juguetes', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsL_NpBhFwp52yspuuUt-JMg7XnJHCj44JoQ&s', descripcion:'Juguete para gatos' },
    { id: 7, nombre: 'Shampoo para Perro', precio: 180, categoria: 'Higiene', imagen: 'https://hebmx.vtexassets.com/arquivos/ids/642477/635890_517496296.jpg?v=638520835496730000', descripcion:'Shampoo para perros sucios como el de la foto' },
    { id: 8, nombre: 'Arena para Gato', precio: 200, categoria: 'Higiene', imagen: 'https://purina.cl/sites/default/files/2022-10/purina-como-usar-una-caja-de-arena-para-gatos.png', descripcion:'Arena para gatos' },
    { id: 9, nombre: 'Transportadora', precio: 750, categoria: 'Accesorios', imagen: 'https://m.media-amazon.com/images/I/61oRFlubPXL.jpg', descripcion:'Transportadora sencilla' },
    { id: 10, nombre: 'Comedero', precio: 300, categoria: 'Accesorios', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCws4fT5HvcHUh1Q_J-ycH5WfCqxt5w4pANA&s', descripcion:'Comedero para mascotas' }
]

export default function ScreenCompras() {
    const navigation = useNavigation();
    const [buscar, setBuscar] = useState('');

    const productosFiltrados = productosLocales.filter(prod =>
        prod.nombre?.toLowerCase().includes(buscar.toLowerCase())
    );

    return (
        <View style={styles.contenedor}>
            <TextInput
                placeholder='Buscar en la tienda...'
                mode='outlined'
                value={buscar}
                onChangeText={setBuscar}
                style={styles.buscador}
                textColor='#FFFFFF'
                outlineColor="#7B8CDE"
                activeOutlineColor="#B8C0E8"
                placeholderTextColor="#9CA3AF"
                theme={{ colors: { primary: '#7B8CDE', surfaceVariant: '#1E2130', background: '#12141A' }}}
            />

            <ScrollView keyboardShouldPersistTaps="handled">
                <View style={styles.resultados}>
                    <Text style={styles.totalTexto}>
                        Catálogo - {productosFiltrados.length} artículos
                    </Text>

                    <View style={styles.grid}>
                        {productosFiltrados.map((item) => (
                            <Card
                                style={styles.card}
                                key={item.id}
                                onPress={() => navigation.push('detallecompra', { producto: item })}
                            >
                                <View style={styles.contenedorImagen}>
                                    <Image
                                        source={{ uri: item.imagen }}
                                        style={styles.imagen}
                                        resizeMode='cover'
                                    />
                                </View>

                                <Text style={styles.nombreProducto} numberOfLines={2}>
                                    {item.nombre}
                                </Text>

                                <Text style={styles.categoria}>
                                    {item.categoria}
                                </Text>

                                <Text style={styles.precio}>
                                    ${item.precio}
                                </Text>
                            </Card>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#12141A',
    },
    buscador: {
        margin: 15,
        backgroundColor: '#1E2130',
    },
    resultados: {
        flex: 1,
    },
    totalTexto: {
        color: '#9CA3AF',
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 10,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingBottom: 30,
    },
    card: {
        width: 165,
        margin: 8,
        backgroundColor: '#1E2130',
        borderRadius: 15,
        overflow: 'hidden',
    },
    contenedorImagen: {
        backgroundColor: '#2a2e3f',
    },
    imagen: {
        width: '100%',
        height: 140,
    },
    nombreProducto: {
        color: '#FFFFFF',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
        height: 38,
    },
    categoria: {
        color: '#7B8CDE',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 4,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    precio: {
        color: '#B8C0E8',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 12,
    },
})