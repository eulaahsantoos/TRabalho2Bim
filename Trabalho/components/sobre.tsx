import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Home from './home';
import Imagem from './Img/img4.png';
import Imagem5 from './Img/img5.png';
import Imagem6 from './Img/img6.png';
import Imagem7 from './Img/Loca.png';
 
export default function App() {
    const [page, setPage] = React.useState('sobre');
 
    const renderPage = () => {
        if (page === 'sobre') {
            return (
                <View style={styles.container}>
                     <Image source={Imagem5} />
                    <Image source={Imagem} />
                    <Text style={styles.title}>Latitude: 0.00</Text>
                    <Text style={styles.title}>Longitude: 0.00</Text>
                    <Image source={Imagem7} />
                    <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
                        <Text style={styles.buttonText}> Obter Localização </Text>
                    </TouchableOpacity>
                    <Image source={Imagem6} />
                </View>
            );
        } else if (page === 'home'){
            return <Home />;
        }
    };
 
    return <View style={styles.container}>{renderPage()}</View>;
}
 
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#fff',
    },
    title: {
        fontSize:24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom:20,
    },
    button: {
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5,
    },
    buttonText: {
        color:'#1E063F',
        fontSize:25,
         fontWeight: 'bold',
    },
});

