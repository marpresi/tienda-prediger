import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import GridLoader from "react-spinners/GridLoader";

import { Productos } from '../../resources/data/productos';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const { id } = useParams();

    let [loadingInProgress, setLoading] = useState(true);

    const [producto, setProducto] = useState(null);
    const [productoNoEncontrado, setProductoNoEncontrado] = useState('');


    const getProducto = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Productos) {
                    const producto = Productos.find(p => p.id === parseInt(id));
                    if(producto){
                        resolve(producto);
                    } else {
                        reject('No se encontraró el producto seleccionado.')
                    }

                } else {
                    reject('No se encontraró el producto seleccionado.');
                }
            }, 2000);
        })
    }

    useEffect(() => {
        const cargarProducto = async () => {
            setLoading(true);
            try {
                const producto = await getProducto();
                setProducto(producto);
                setLoading(false);
                console.log(producto);
            } catch (err) {
                console.log(err);
                setLoading(false);
                setProductoNoEncontrado(err);
            }
        }
        cargarProducto();
    }, [id])


    return (<>
        <div className="container-fluid">
            <div className="row">
                <div className="px-1 py-1 my-1 text-center">
                    <GridLoader color={'#c3c3c3'} loading={loadingInProgress} size={10} />
                    { (!loadingInProgress && producto)? <ItemDetail producto={producto} /> : ''}
                    { (!loadingInProgress && !producto)? <p>{productoNoEncontrado}</p> : ''}
                </div>
            </div>
        </div>
    </>);
}