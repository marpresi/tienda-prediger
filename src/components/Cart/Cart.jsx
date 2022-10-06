import React from 'react';

import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { db } from '../../utils/firebase';
import { collection, getDoc, addDoc, doc, updateDoc, Timestamp } from 'firebase/firestore'

import { CartDetail } from './CartDetail';
import { Buyer } from './Buyer';

export const Cart = () => {

    const { cartList, removeItem, clear, getTotalCount, getTotalAmount } = useContext(CartContext);

    const [idOrder, setIdOrder] = useState();

    const onSendOrder = (buyer) => {
        const order = {
            buyer,
            items: cartList,
            total: getTotalAmount(),
            date: Timestamp.now()
        }
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then((r) => {
            setIdOrder(r.id);
            cartList.map((element) => {
                updateStock(element.id, element.cantidad);
                return true;
            })
            clear();
        });

    }

    const updateStock = (id, cantidad) => {
        const docRef = doc(db, 'ItemCollection', id);
        getDoc(docRef).then((r) => {
            console.log(r);
            const producto = r.data();
            producto.stock = producto.stock - cantidad;
            updateDoc(docRef, producto).then(() => console.log("producto actualizado"));
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
                            <CartDetail cartList={cartList}
                                removeItem={removeItem}
                                clear={clear}
                                getTotalCount={getTotalCount}
                                getTotalAmount={getTotalAmount} />
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Orden de Compra</h4>
                                    <Buyer onSendOrder={onSendOrder} />
                                </div>
                            </div>
                        </div>
                    </>
                }
                {idOrder !== undefined && cartList.length === 0 &&
                    <>
                        <div className="px-4 py-5 my-5 text-center">
                            <h1 className="display-5 fw-bold">Felicitaciones!!!</h1>
                            <div className="col-lg-6 mx-auto">
                                <p className="lead mb-4">Tu orden fue registrada con el número: <b>{idOrder}</b></p>
                                <p className="lead mb-4">Gracias por tu compra!</p>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <Link to="/" type="button" className="btn btn-outline-primary btn-lg px-4 gap-3">Continuar comprando</Link>
                                </div>
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