import React from 'react';

import { useContext, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { db } from '../../utils/firebase';
import { collection,  getDoc, addDoc, doc, updateDoc, query, Timestamp} from 'firebase/firestore'

export const Cart = () => {

    const { cartList, removeItem, clear, getTotalCount, getTotalAmount } = useContext(CartContext);

    const [idOrder, setIdOrder] = useState();

    console.log('lista de productos del carrito', cartList);

    const sendOrder = (e) => {
        e.preventDefault();
        console.log(e);
        const order = {
            buyer: {
                name: e.target[0].value,
                phone: e.target[1].value,
                email: e.target[2].value
            },
            items: cartList,
            total: getTotalAmount(),
            date: Timestamp.now()
        }
        const queryRef = collection(db,"orders");
        addDoc(queryRef, order).then((r) => {
            setIdOrder(r.id);

            cartList.map((element) => {
                updateStock(element.id, element.cantidad);
            })
            clear();
        });

        console.log("order",order);
    }

    const updateStock = (id,cantidad) => {
        const docRef = doc(db,'ItemCollection',id); 
        getDoc(docRef).then((r) => {
            console.log(r);
            const producto = r.data();
            producto.stock = producto.stock - cantidad;
            updateDoc(docRef,producto).then(() => console.log("producto actualizado"));
        });       
    }

    return (<>
        <div className="container-fluid">
            <div className="row">
        {cartList.length > 0 &&
            <>
                <div className="col-9">
                    <div className="d-flex justify-content-between">
                        <h3>Resumen de sus productos</h3>

                    </div>
                    <table className="table table-hover align-middle">
                        <thead>
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-start">Nombre</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio Unitario</th>
                                <th scope="col">Sub Total</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartList.map(item => (
                                    <tr key={item.id}>
                                        <th scope="row">
                                            <img src={item.pictureUrl} className="img-thumbnail" style={{'maxHeight': '80px'}} alt={item.title}/>
                                        </th>
                                        <td className="text-start">{item.title}</td>
                                        <td>{item.cantidad}</td>
                                        <td className="text-end">${item.price}</td>
                                        <td className="text-end">${item.price * item.cantidad}</td>
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
                            <tr className="bg-secondary text-white">
                                <th>&nbsp;</th>
                                <td className="text-white text-end">
                                    Total de Productos
                                </td>
                                <th>
                                    { getTotalCount() }
                                </th>                               
                                <td className="text-white text-end">
                                    Importe Total
                                </td>
                                <th className="text-end">
                                    { getTotalAmount() }
                                </th>
                                <th><button onClick={clear} className="btn  btn-danger btn-sm" title="Esta acción eliminará todos los productos de su carrito.">VACIAR CARRITO</button></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="col-3">
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Orden de Compra</h4>
                        <form onSubmit={sendOrder}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control form-control-sm" placeholder="example" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono</label>
                                <input type="text" className="form-control form-control-sm" placeholder="example" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control form-control-sm" placeholder="example" />
                            </div>
                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-sm btn-success">Enviar Orden</button>
                            </div>
                            
                    </form>
                    </div>
                    </div>
                </div>      
                </> 
        }
        {idOrder != undefined && cartList.length === 0 && 
            <>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Felicitaciones!!!</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Tu orden fue registrada con el número: <b>{idOrder}</b></p>
                    <p className="lead mb-4">Gracias por tu compra!</p>
                </div>
            </div>
            </>
        }
        {idOrder === undefined && cartList.length === 0 && 
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
        </div>
        </div>
    </>);
}