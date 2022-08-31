import { useState, useEffect } from 'react';
import GridLoader from "react-spinners/GridLoader";

import { Productos } from '../resources/data/productos';
import { ItemDetail } from './ItemDetail/ItemDetail';

export const ItemDetailContainer = () => {

    let [loadingInProgress, setLoading] = useState(true);

    const [producto, setProducto] = useState([]);


    const getProducto = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Productos) {
                    resolve(Productos[0]);
                } else {
                    reject('No se encontraró el producto seleccionado.');
                }
            }, 2000);
        })
    }

    useEffect(() => {
        const cargarProducto = async () => {
            try {
                const producto = await getProducto();
                setProducto(producto);
                setLoading(false);
                console.log(producto);
            } catch (err) {
                console.log(err);
            }
        }
        cargarProducto();
    }, [])


    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="px-4 py-5 my-5 text-center">
                    <GridLoader color={'#c3c3c3'} loading={loadingInProgress} size={10} />
                    { (!loadingInProgress)? <ItemDetail producto={producto} /> : <p className="text-center">Cargando componente de detalle...</p>}
                </div>
            </div>
        </div>
    </>);
}