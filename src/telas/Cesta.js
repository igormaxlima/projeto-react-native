import React from "react";
import { StyleSheet, Image, Dimensions, Text, SafeAreaView, View } from "react-native";

import topo from '../../assets/assets/topo.png';
import logo from '../../assets/assets/logo.png';


const width = Dimensions.get('screen').width;


export default function Cesta() {
    return <SafeAreaView>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>

        <View style={estilos.cesta}>
            <Text style={estilos.nome}>Cesta de Verduras</Text>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Text style={estilos.nomeFazenda}>Fazenda do Mangs</Text>
            </View>
            <Text style={estilos.descricao}>
                Uma cesta com produtos
                selecionados cuidadosamente
                da fazenda direto para sua cozinha
            </Text>
            <Text style={estilos.preco}>R$ 40,00</Text>
        </View>
    </SafeAreaView>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        fontSize: "20",
        color: "white",
        fontWeight: "bold",
        lineHeight: "26",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 30,
        lineHeight: 42,
        fontWeight: "bold",
        fontFamily: "MontSerratBold",

    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 38,
        height: 38,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,

    },
    descricao : {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
})