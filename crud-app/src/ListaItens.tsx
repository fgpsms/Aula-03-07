import React from "react";
import { Item } from "./types";

interface ListaItensProps {
  itens: Item[];
  editarItem: (item: Item) => void;
  deletarItem: (id: number) => void;
}

const ListaItens: React.FC<ListaItensProps> = ({
  itens,
  editarItem,
  deletarItem,
}) => {
  return (
    <div>
      <h2>Lista de Itens</h2>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <button onClick={() => editarItem(item)}>Editar</button>
            <button onClick={() => deletarItem(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaItens;
