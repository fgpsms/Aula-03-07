import { useEffect, useState } from "react";
import estoque from "./assets/estoque.json";
import { ListaItens } from "./assets/ListaItens";
import { ItemEstoque } from "./assets/types";
import { FormularioAdicionarItem } from "./assets/FormAdicionarItens";

function App() {
  const [listaItens, setListaItens] = useState<ItemEstoque[]>([]);
  useEffect(() => {
    setListaItens(estoque.itens);
  }, []);

  const deleteItens = (id: number) => {
    setListaItens((prevItens) =>
      prevItens.filter((item: ItemEstoque) => item.id !== id)
    );
  };
  const addItem = (item: ItemEstoque) => {
    setListaItens((prevItens) => [item, ...prevItens]);
  };

  const [formOn, setFormOn] = useState<boolean>(false);
  const handleOcultarForm = () => setFormOn(prev => !prev)

  const [itemAtual, setItemAtual] = useState<ItemEstoque>(null)

  const selectItem = (id: number) => {
    const item = listaItens.find((it: ItemEstoque) => it.id === id);
    console.log("~selectItem ~item:", item);
    if (item) {
      setItemAtual(item);
    }
  };

const editarItem = (item: ItemEstoque) => {
  const restoLista = listaItens.filter((it: ItemEstoque) => it.id !== item.id)
  setListaItens([item, ...restoLista])
};
  return (
    <div className="mt-4 bg-slate-100 p-4">
      <h1 className="text-2xl font-bold text-slate-800"></h1>
      <button className="rounded-sm bg-slate-600 p-2" onClick={() => handleOcultarForm()}>
        {formOn ? "Ocultar" : "Exibir"}
      </button>
      {formOn && (
        <FormularioAdicionarItem
          adicionarItem={addItem}
          editItem={editarItem}
          itemParaEditar={itemAtual}
        />
      )}

      <ListaItens
        listaItens={listaItens}
        handleDelItens={deleteItens}
        handleSelectItem={selectItem}
      />
    </div>
  );
}
export default App
