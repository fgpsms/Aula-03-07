import { ItemEstoque } from "./types";

interface ListaItensProps {
  listaItens: ItemEstoque[];
  handleDelItens: (id: number) => void;
  handleSelectItem: (id: number) => void;
}

export const ListaItens = ({
  listaItens,
  handleSelectItem,
  handleDelItens,
}: ListaItensProps) => {
  return (
    <div>
      <h1>Lista de Itens do Estoque</h1>
      <ul>
        {listaItens.map((item: ItemEstoque) => (
          <li key={item.id}>
            <h2>{item.nome}</h2>
            <p>R$ {item.preco}</p>
            <p>Quantidade de itens em estoque: {item.quantidade}</p>
            <button onClick={() => handleSelectItem(item.id)}>Editar</button>
            <button onClick={() => handleDelItens(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

