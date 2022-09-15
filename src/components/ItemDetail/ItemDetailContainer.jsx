import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query, where, documentId, doc, getDoc } from 'firebase/firestore';

import GridLoader from "react-spinners/GridLoader";

//import { Productos } from '../../resources/data/productos';
import { db } from "../../utils/firebase";
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {
    const { id } = useParams();

    let [loadingInProgress, setLoading] = useState(true);

    const [producto, setProducto] = useState(null);
    const [productoNoEncontrado, setProductoNoEncontrado] = useState('');


    // const getProducto = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (Productos) {
    //                 const producto = Productos.find(p => p.id === parseInt(id));
    //                 if(producto){
    //                     resolve(producto);
    //                 } else {
    //                     reject('No se encontraró el producto seleccionado.')
    //                 }

    //             } else {
    //                 reject('No se encontraró el producto seleccionado.');
    //             }
    //         }, 2000);
    //     })
    // }

    useEffect(() => {
        const cargarProducto = async () => {
            setLoading(true);
            try {
                if(id){
                    const docRef = doc(db,'ItemCollection',id); 
                    const docSnap = await getDoc(docRef); 
                    if(docSnap.exists()){
                        setProducto({...docSnap.data(),id: docSnap.id});
                    }else{
                        setProductoNoEncontrado('El producto no existe');
                    }
                }

                //const producto = await getProducto();
                setLoading(false);
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

                    { !loadingInProgress && producto && <ItemDetail producto={producto} /> }
                    
                    { !loadingInProgress && !producto && 
                    
                    <>
                    <div className="px-4 py-5 my-5 text-center">
                        <h1 className="display-5 fw-bold">Ups!!! </h1>
                        <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">El producto al que intentas acceder no existe o ya no esta disponible.</p>
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
        </div>
    </>);
}