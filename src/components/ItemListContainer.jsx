import { useState, useEffect } from 'react';
import GridLoader from "react-spinners/GridLoader";

import { Productos } from "../resources/data/productos";
import { ItemList } from './Items/ItemList';

export const ItemListContainer = ({ greeting = "Bienvenido" }) => {

    let [loadingInProgress, setLoading] = useState(true);

    const [productos, setProductos] = useState([]);


    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Productos.length > 0) {
                    resolve(Productos);
                } else {
                    reject('No se encontraron productos.');
                }
            }, 2000);
        })
    }

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                const productos = await getProductos();
                setProductos(productos);
                setLoading(false);
                console.log(productos);
            } catch (err) {
                console.log(err);
            }
        }
        cargarProductos();
    }, [])


    return (<>
        <div className="container-fluid">
            <div className="px-4 py-5 my-5 text-center">
                <GridLoader color={'#c3c3c3'} loading={loadingInProgress} size={10} />
                { (!loadingInProgress)? <ItemList productos={productos} /> : <p className="text-center">Cargando componente de lista...</p>}
            </div>
        </div>
    </>);
}