import { useState, useEffect } from "react";
import { ProductService } from '../services/ProductService';

export function useProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            try {
                const data = await ProductService();
                setProducts(data);
            } catch (error) {
                console.error("Erro ao carregar produtos ", error);
            }
        }
        loadProducts();
    }, []);

    const getProduct = (productId) => {
        return products.find((product) => product.id === productId);
    }

    return {products, getProduct};
}