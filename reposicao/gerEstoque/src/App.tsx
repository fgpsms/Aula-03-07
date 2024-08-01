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
  return (
    <>
      <FormularioAdicionarItem adiconarItem={addItem} />
      <ListaItens listaItens={listaItens} handDelItens={deleteItens} />
    </>
  );
}

export default App;
