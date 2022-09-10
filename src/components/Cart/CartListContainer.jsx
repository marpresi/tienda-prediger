import React from 'react';

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartListContainer = () => {
    
    const { cartList, removeItem, clear } = useContext(CartContext);
   
    console.log('lista de productos del carrito', cartList);
   
    
    return <>
        <div>  
            <div className="d-flex justify-content-between">      
                <h3>Resumen de sus productos</h3>
                <button onClick={clear} className="btn  btn-danger btn-sm">VACIAR CARRITO</button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartList.map(item => (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.title}</td>
                                <td>${item.price}</td>
                                <td>{item.cantidad}</td>
                                <td>
                                    <button onClick={() => {removeItem(item.id)}} className="btn btn-sm btn-danger">
                                        ELIMINAR
                                    </button>
                                </td>
                            </tr>
                        ))
                    
                    }
                </tbody>
            </table>
        </div>
    </>
}