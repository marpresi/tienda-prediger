import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cartList, setCartList] = useState([]);

    const addItem = (producto) => {
        const productoInCart = isInCart(producto.id);
        if (productoInCart.exists) {
            const tempCartList = [...cartList];
            const cantActual = tempCartList[productoInCart.idx].cantidad;
            tempCartList[productoInCart.idx].cantidad = cantActual + producto.cantidad;
            setCartList(tempCartList);
        } else {
            const newCartList = [...cartList, producto];
            setCartList(newCartList);
        }
    }

    const removeItem = (productoId) => {
        const tempCartList = [...cartList];
        const updatedCartList = tempCartList.filter(item => item.id !== productoId);
        setCartList(updatedCartList);
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (productoId) => {
        const exist = cartList.findIndex(item => item.id === productoId);
        if (exist > -1) {
            return { exists: true, idx: exist };
        } else {
            return { exists: false, idx: undefined };
        }
        return
    }

    const getTotalCount = () => {
        return cartList.reduce((prev, cur) => prev + cur.cantidad, 0);
    }

    const getTotalAmount = () => {
        return cartList.reduce((prev, cur) => { return prev + (cur.price * cur.cantidad); }, 0);
    }


    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, getTotalCount, getTotalAmount }} >
            {children}
        </CartContext.Provider>
    )

}