import { StyleSheet, View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Text, Card, TextInput, ActivityIndicator } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const API_KEY = 'live_8IQtBQhQGXnPpVQkBUD4tUDSnO48TAJSOt4o6N8rgOCTYDS4lZvwvuBnaleY9Pxj'

export default function ScreenPerros() {
    const navigation = useNavigation();
    const [razas, setRazas] = useState([]);
    const [buscar, setBuscar] = useState('');
    const [cargando, setCargando] = useState(true);

    const obtenerRazas = () => {
        fetch(`https://api.thedogapi.com/v1/breeds`, {
            headers: {
                'x-api-key': API_KEY
            }
        })
            .then((response) => response.json())
            .then((result) => {
                setRazas(Array.isArray(result) ? result : []);
                setCargando(false);
            })
            .catch((error) => {
                console.error(error);
                setCargando(false);
            });
    }

    useEffect(() => {
        obtenerRazas();
    }, [])

    const razasFiltradas = (razas || []).filter(raza => 
        raza.name?.toLowerCase().includes(buscar.toLowerCase())
    );

    return (
        <View style={styles.contenedor}>
            <TextInput
                placeholder='Busca tu raza de perro ideal...'
                mode='outlined'
                value={buscar}
                onChangeText={setBuscar}
                style={styles.buscador}
                textColor='#FFFFFF'
                outlineColor="#7B8CDE"
                activeOutlineColor="#B8C0E8"
                placeholderTextColor="#9CA3AF"
                theme={{ 
                    colors: { 
                        primary: '#7B8CDE', 
                        surfaceVariant: '#1E2130',
                        background: '#12141A' 
                    }
                }}
            />

            {(
                <ScrollView>
                    <View style={styles.resultados}>
                        <Text style={styles.totalTexto}>
                            Razas encontradas - {razasFiltradas.length}
                        </Text>

                        <View style={styles.grid}>
                            {razasFiltradas.map((raza, index) => (
                                <Card 
                                    style={styles.card} 
                                    key={index} 
                                    onPress={() => navigation.push('detallesperro', { perro: raza })}
                                >
                                    {raza.image?.url ? (
                                        <Image
                                            source={{ uri: raza.image.url }}
                                            style={styles.imagen}
                                            resizeMode='cover'
                                        />
                                    ) : (
                                        <View style={styles.sinImagen}>
                                            <Text style={{color:'#9CA3AF', fontSize:30}}>🐶</Text>
                                        </View>
                                    )}
                                    
                                    <Text style={styles.nombrePerro} numberOfLines={1}>
                                        {raza.name}
                                    </Text>
                                    
                                    <Text style={styles.etiquetaOrigen} numberOfLines={1}>
                                        Origen: {raza.origin || 'Origen desconocido'}
                                    </Text>
                                </Card>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#12141A',
    },
    centro: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    card: {
        width: 160,
        margin: 8,
        backgroundColor: '#1E2130',
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 4,
    },
    imagen: {
        width: 160,
        height: 160,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    sinImagen: {
        width: 160,
        height: 160,
        backgroundColor: '#2a2e3f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nombrePerro: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 8,
        paddingHorizontal: 5,
    },
    etiquetaOrigen: {
        color: '#7B8CDE',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: '600',
    },
})