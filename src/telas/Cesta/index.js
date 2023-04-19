import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import Topo from './componentes/Topo';
import Detalhes from "./componentes/Detalhes";
import Itens from "./componentes/Itens";

export default function Cesta({topo, detalhes, itens}) {
    return <SafeAreaView>
        <Topo {...topo} />

        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
        </View>
       <View >
        <Itens {...itens} />
        </View>
    </SafeAreaView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})