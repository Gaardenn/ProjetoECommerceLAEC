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

    return { cart, adicionarProduto, removerUnidade, removerItem, marcar, todosMarcados };
}