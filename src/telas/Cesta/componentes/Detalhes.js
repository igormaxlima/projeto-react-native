import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Texto from "../../../componentes/Texto";
import Botao from "../../../componentes/Botao";

export default function Detalhes( { nome, logoFazenda, nomeFazenda, descricao, preco, botao } ) {
    return <>
            <Texto style={estilos.nome}> { nome } </Texto>
            <View style={estilos.fazenda}>
                <Image source={ logoFazenda } style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeFazenda}> { nomeFazenda } </Texto>
            </View>
            <Texto style={estilos.descricao}> {descricao} </Texto>
            <Texto style={estilos.preco}> { preco } </Texto>

            <Botao>
                <Texto>{ botao }</Texto>
            </Botao>
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
    botao : {
        marginTop: 26,
        paddingVertical: 16,
        borderRadius: 6,
        backgroundColor: "#2A9F85",
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    },

})