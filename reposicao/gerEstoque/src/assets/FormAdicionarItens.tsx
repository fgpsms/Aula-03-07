import { ChangeEvent, FormEvent, useState } from "react"
import { ItemEstoque } from "./types"

interface FormAddItemProps{
    adicionarItem: (item: ItemEstoque) => void
}

export const FormularioAdicionarItem = ({adicionarItem}) => {
    const [novoItem, setNovoItem] = useState<ItemEstoque>({
        id: 0,
        nome:"",
        quantidade: 0,
        preco: 0
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>)  => {
        const {name, value} = e.target;
        setNovoItem(prevItem => ({
            ...prevItem,
            [name]: name == "quantidade" 
            || name === "preco" 
            ? parseFloat(value) 
            : value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        adicionarItem({...novoItem, id: Math.random()})
        setNovoItem({
            id: 0,
            nome:"",
            quantidade: 0,
            preco: 0
        })
    }
    return (<form onSubmit={handleSubmit}>
        <div>
            <label> Produto: </label>
            <input
            type="text"
            name="nome"
            value={novoItem.nome}
            onChange={handleChange} />
        </div>
        <div>
            <label>Quantidade: </label>
            <input
            type="number"
            name="quantidade"
            value={novoItem.quantidade}
            onChange={handleChange} />
        </div>
        <div>
            <label> Preco: </label>
            <input
            type="number"
            name="preco"
            value={novoItem.preco}
            onChange={handleChange}
            step="0.01" />
        </div>
        <button type="submit"> Adicionar Item</button>
    </form>)
} 