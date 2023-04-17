import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Texto from "./Texto";

export default function Botao({ children, style, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={[estilos.botao, style]}>
            <Texto style={estilos.textoBotao}>{ children }</Texto>
        </TouchableOpacity>
    );               
}

const estilos = StyleSheet.create({
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

});