import React from 'react';

import { useContext } from "react";
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

export const CartListContainer = () => {

    const { cartList, removeItem, clear } = useContext(CartContext);

    console.log('lista de productos del carrito', cartList);


    return <>
        {
            cartList.length > 0 ?
                <>
                    <div>
                        <div className="d-flex justify-content-between">
                            <h3>Resumen de sus productos</h3>

                        </div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio Unitario</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Sub Total</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartList.map(item => (
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.title}</td>
                                            <td>${item.price}</td>
                                            <td>{item.cantidad}</td>
                                            <td>${item.price * item.cantidad}</td>
                                            <td>
                                                <button onClick={() => { removeItem(item.id) }} className="btn btn-sm btn-outline-danger" title="Esta acción elimina este producto de su carrito.">
                                                    <i className="bi bi-trash3"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))

                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan={4}>
                                        Total
                                    </th>
                                    <th>
                                        {cartList.reduce((prev, cur) => {
                                            return prev + (cur.price * cur.cantidad);
                                        }, 0)}
                                    </th>
                                    <th><button onClick={clear} className="btn  btn-outline-danger btn-sm" title="Esta acción eliminará todos los productos de su carrito.">VACIAR CARRITO</button></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </>
                :
                <>
                    <div className="px-4 py-5 my-5 text-center">
                        <h1 className="display-5 fw-bold">Todavía no has agregado productos al carrito!</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">Te invitamos a recorrer la galería de nuestros productos y descubrir todas las novedades que ofrecemos. Te va a fascinar!</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <Link to="/" type="button" className="btn btn-outline-primary btn-lg px-4 gap-3">Encontrar un producto</Link>
                            </div>
                        </div>
                    </div>
                   
                </>
        }
    </>
}