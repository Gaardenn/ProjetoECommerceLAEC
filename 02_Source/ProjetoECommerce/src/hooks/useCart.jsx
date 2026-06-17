import { useState, useEffect } from "react"

export function useCart() {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("carrinho")) || [];
    });

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(cart));
    }, [cart]);

    const adicionarProduto = (produto) => {
        const existe = cart.find((p) => p.id === produto.id);

        if (existe) {
            setCart(cart.map((p) => p.id === produto.id ?
                { ...p, quantidade: p.quantidade + 1 } :
                p));

            return false;
        } else {
            setCart([...cart, { ...produto, quantidade: 1 }]);
            
            return true;
        }
    }

    const removerUnidade = (produto) => {
        setCart(cart.map((p) => p.id === produto.id ? { ...p, quantidade: p.quantidade - 1 } : p));
    }

    const removerItem = (produto) => {
        setCart(cart.filter(p => p.id !== produto.id));
    }

    const marcar = (produto) => {
        setCart(cart.map((p) => p.id === produto.id ? { ...p, marcado: !produto.marcado} : p));
    }

    const todosMarcados = () => {
        let todos = true;
        
        cart.map((p) => p.marcado === false ? todos = false : true);

        return todos;
    }

    const marcarTudo = (boolean) => {
        cart.map((p) => p.marcado !== boolean);
    }

    const presentear = (produto) => {
        setCart(cart.map((p) => p.id === produto.id ? { ...p, presente: !produto.presente } : p));
    }

    const quantMarcados = () => {
        let quant = 0;

        cart.map((p) => p.marcado === true ? quant++ : quant);

        return quant;
    }

    const calcularSubtotal = () => {
        let subtotal = 0;

        cart.map((p) => p.marcado === true ? subtotal += p.preco : subtotal);

        return subtotal;
    }

    return { cart, adicionarProduto, removerUnidade, removerItem, marcar, todosMarcados, marcarTudo, presentear, quantMarcados, calcularSubtotal };
}