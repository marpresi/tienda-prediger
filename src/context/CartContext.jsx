import { useState, createContext } from 'react';
import { Productos } from '../resources/data/productos';

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [ cartList, setCartList ] = useState([]);

    const addItem = (producto) => {
        const idx = isInCart(producto.id);
        if(idx > -1){
            const tempCartList = cartList;
            const cantActual = tempCartList[idx].cantidad;
            tempCartList[idx].cantidad = cantActual + producto.cantidad;
            setCartList(tempCartList);
        }else{
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
        return cartList.findIndex(item => item.id === productoId);
    }


    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}} >
            {children}
        </CartContext.Provider>
    )

}