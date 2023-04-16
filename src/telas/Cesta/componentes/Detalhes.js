import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Texto from "../../../componentes/Texto";
import logo from "../../../../assets/assets/logo.png";


export default function Detalhe() {
    return <>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeFazenda}>Fazenda do Mangs</Texto>
            </View>
            <Texto style={estilos.descricao}>
                Uma cesta com produtos
                selecionados cuidadosamente
                da fazenda direto para sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
            <Texto> Testando GGit</Texto>
    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 30,
        lineHeight: 42,
        fontWeight: "bold",

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