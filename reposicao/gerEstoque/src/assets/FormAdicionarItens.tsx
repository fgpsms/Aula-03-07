import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { ItemEstoque } from "./types"

interface FormAddItemProps {
  adicionarItem: (item: ItemEstoque) => void;
  editItem: (item: ItemEstoque) => void;
  itemParaEdiar: ItemEstoque
}

export const FormularioAdicionarItem = ({ itemParaEditar, editIten, adicionarItem }) => {
  const [novoItem, setNovoItem] = useState<ItemEstoque>({
    id: 0,
    nome: "",
    quantidade: 0,
    preco: 0,
  });

const[edicao, setEdicao] = useState<boolean>(false)
  useEffect(() => {
    setEdicao(true)
    setNovoItem(itemParaEditar);
  }, [itemParaEditar]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNovoItem((prevItem) => ({
      ...prevItem,
      [name]:
        name === "quantidade" || name === "preco" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adicionarItem({ ...novoItem, id: Math.random() });
    setNovoItem({
      id: 0,
      nome: "",
      quantidade: 0,
      preco: 0,
    });
  };

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editItem({...novoItem, id: Math.random()});
    setNovoItem({
      id: 0,
      nome: "",
      quantidade: 0,
      preco: 0,
    });
    setEdicao(false)
  };

  return (
    <form onSubmit={!!itemParaEditar ? handleUpdate : handleSubmit}>
      <div>
        <label> Produto: </label>
        <input
          type="text"
          name="nome"
          value={novoItem.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Quantidade: </label>
        <input
          type="number"
          name="quantidade"
          value={novoItem.quantidade}
          onChange={handleChange}
        />
      </div>
      <div>
        <label> Preco: </label>
        <input
          type="number"
          name="preco"
          value={novoItem.preco}
          onChange={handleChange}
          step="0.01"
        />
      </div>
      <button type="submit"> Adicionar Item</button>
    </form>
  );
}; 

function editItem(arg0: { id: number; nome: string; quantidade: number; preco: number; }) {
  throw new Error("Function not implemented.");
}
