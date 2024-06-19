import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Sobre from './sobre';

import Imagem from './Img/img1.png';
import Imagem2 from './Img/img2.png';
 
export default function App() {
    const [page, setPage] = React.useState('home');
 
    const renderPage = () => {
        if (page === 'home') {
            return (
                <View style={styles.container}>
                    
                    <Image source={Imagem2} style={styles.img}/>
                    <p></p>
                    <Text style={styles.texto}>LocateMe é a sua solução definitiva para encontrar locais e direções com facilidade e precisão.
                         Com uma interface intuitiva e recursos avançados de localização, LocateMe permite que você descubra pontos de interesse próximos,
                          encontre rotas otimizadas para o seu destino e compartilhe sua localização em tempo real com amigos e familiares.
                         Nunca se perca novamente com LocateMe - sua ferramenta confiável para navegação precisa e eficiente.</Text>
                    <Image source={Imagem} style={styles.img}/>
                    <TouchableOpacity style={styles.button} onPress={() => setPage('sobre')}>
                        <Text style={styles.buttonText}>Sua Localização</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (page === 'sobre'){
            return <Sobre/>;
        }
    };
 
    return <View style={styles.container}>{renderPage()}</View>;
}
 
 
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ffff',
    },
    title: {
        fontSize:50,
        fontWeight: 'bold',
        color: '#1E063F',
        marginBottom:20,
    },
    texto: {
        fontSize:12,
        fontWeight: 'bold',
        color: '#00000',
        marginBottom:20,
    },
    button: {
        backgroundColor:'#fff',
        padding:10,
        borderRadius:5,
       
    },
    buttonText: {
        color:'#1E063F',
        fontSize:16,
        fontWeight: 'bold',
    },
    img:{
        
    },
});