import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {

    const [cantidad, setCantidad] = useState(initial);

    const agregar = () => {
        if(stock > cantidad){
            setCantidad(cantidad + 1);
        }
    }

    const quitar = () => {
        if(cantidad > 0){
            setCantidad(cantidad - 1);
        }
    }

    return (<>
            <div className="mx-auto">
                <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item">
                        <button onClick={quitar} disabled={cantidad === 0  || stock === 0} className="btn btn-sm btn-outline-secondary" type="button">- Quitar</button>
                    </li>
                    <li className="list-group-item">
                        <span className="badge rounded-pill text-bg-primary">{(stock === 0)? 'sin stock' : cantidad}</span>
                    </li>
                    <li className="list-group-item">
                        <button onClick={agregar} disabled={cantidad === stock || stock === 0} className="btn btn-sm btn-outline-secondary" type="button">+ Agregar</button>
                    </li>
                </ul>
                <div className="p-1">
                <button onClick={()=>(onAdd(cantidad))} disabled={cantidad === 0 || stock === 0} className="btn btn-sm btn-outline-secondary" type="button">Agregar al carrito</button>
                </div>
            </div>
    </>);
}
