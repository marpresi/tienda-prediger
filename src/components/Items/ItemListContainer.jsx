import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import GridLoader from "react-spinners/GridLoader";

import { Productos } from "../../resources/data/productos";
import { ItemList } from './ItemList';



export const ItemListContainer = () => {

    const { id } = useParams();

    let [loadingInProgress, setLoading] = useState(true);

    const [productos, setProductos] = useState([]);
    const [sinProductos, setSinProductos] = useState('');


    const getProductos = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Productos.length > 0) {
                    if(id){
                        const productosFiltrados = Productos.filter(p => p.categoria === id);
                        if(productosFiltrados.length > 0){
                            resolve(productosFiltrados);
                        }else{
                            reject('No se encontraron productos para esta categoría.');
                        }
                    }else{
                        resolve(Productos);
                    }
                } else {
                    reject('No se encontraron productos.');
                }
            }, 2000);
        })
    }

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            try {
                const result = await getProductos();
                setProductos(result);
                setLoading(false);
            } catch (err) {
                setProductos([]);
                setSinProductos(err);
                setLoading(false);
            }
        }
        cargarProductos();
    }, [id])


    return (<>
        <div className="container-fluid">
            <div className="px-4 py-5 my-5 text-center">
                <GridLoader color={'#c3c3c3'} loading={loadingInProgress} size={10} />
                { (!loadingInProgress)? <ItemList productos={productos} /> : <p className="text-center">Cargando componente de lista...</p>}
                { (!loadingInProgress && productos.length === 0)? <p>{sinProductos}</p> : ''}
            </div>
        </div>
    </>);
}