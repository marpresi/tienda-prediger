import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

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
                <h1 className="display-5 fw-bold">{greeting}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Esta pagina está creada con React y es el trabajo práctico de la clase de <a href="https://coderhouse.com" target="_blank">CoderHouse</a></p>
                </div>
                <hr />
                <ClipLoader color={'#c3c3c3'} loading={loadingInProgress} size={50} />
                <ItemList productos={productos}/>
            </div>
        </div>
    </>);
}