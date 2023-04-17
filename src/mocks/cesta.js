import logo from '../../assets/assets/logo.png';

import batata from "../../../../assets/assets/frutas/Batata.png";
import brocolis from "../../../../assets/assets/frutas/Brócolis.png";
import pepino from "../../../../assets/assets/frutas/Pepino.png";
import tomate from "../../../../assets/assets/frutas/Tomate.png";
import abobora from "../../../../assets/assets/frutas/Abóbora.png";
    
const cesta = {
    topo: {
        titulo: "Detalhes da Cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: logo,
        nomeFazenda: "Fazenda do Mangs",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da Cesta",
        lista: [
            {
             nome: "Tomate",
             imagem: tomate,
            },
            {
             nome: "Batata",
             imagem: batata,
            },
            {
             nome: "Abóbora",
             imagem: abobora,
            },
            {
             nome: "Brócolis",
             imagem: brocolis,
            },
            {
             nome: "Pepino",
             imagem: pepino,
            },
        ]
    },
}

export default cesta;