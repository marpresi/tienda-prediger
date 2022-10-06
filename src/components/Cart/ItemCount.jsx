import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);

    const agregar = () => {
        if (stock > cantidad) {
            setCantidad(cantidad + 1);
        }
    }

    const quitar = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    const comprarAhora = () => {
        console.log(cantidad);
        onAdd(cantidad);
    }

    return (<>
        <div className="d-flex">
            <ul className="list-group list-group-horizontal-sm">
                <li className="cart list-group-item border-0 p-1">
                    <button onClick={quitar} disabled={cantidad === 0 || stock === 0} className="btn btn-sm btn-outline-secondary" type="button">- Quitar</button>
                </li>
                <li className="cart list-group-item border-0 p-1">
                    <span className="badge rounded-pill text-bg-primary">{(stock === 0) ? 'sin stock' : cantidad}</span>
                </li>
                <li className="cart list-group-item border-0 p-1">
                    <button onClick={agregar} disabled={cantidad === stock || stock === 0} className="btn btn-sm btn-outline-secondary" type="button">+ Agregar</button>
                </li>
            </ul>
            <div className="p-1">
                <button onClick={comprarAhora} disabled={cantidad === 0 || stock === 0} className="btn btn-sm btn-success" type="button">Comprar Ahora</button>
            </div>
        </div>
    </>);
}
