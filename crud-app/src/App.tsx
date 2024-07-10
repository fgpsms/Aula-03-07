import React, { useState } from "react";
import ListaItens from "./ListaItens";
import FormularioItem from "./FormularioItem";
import { Item } from "./types";
import seedData from "./seedData";

const App: React.FC = () => {
    const [itens, setItens] = useState<Item[]>(seedData);
    const [itemEditando, setItemEditando] = useState<Item | null>(null);

    const adicionarOuEditarItem = (item: Item) => {
        if (item.id === 0) {
            item.id = Math.random();
            setItens(prevItens => [...prevItens, item]);
        } else {
            setItens(prevItens => prevItens.map(i => (i.id === item.id ? item : i)));
        }

        setItemEditando(null);
    };

    const editarItem = (item: Item) => {setItemEditando(item);
    };

    const deletarItem = (id: number) => {
        setItens(prevItens => prevItens.filter(item => item.id!== id));
    };

    const cancelarEdicao = () => {
        setItemEditando(null);
    };

    return (
        <div>
            <h1>Gerenciamento de Itens</h1>
            <FormularioItem
                itemAtual={itemEditando}
                salvarItem={adicionarOuEditarItem}
                cancelarEdicao={cancelarEdicao}    
            />
            <ListaItens
                itens={itens}
                editarItem={editarItem}
                deletarItem={deletarItem}
            />
        </div>
    );
};
export default App;