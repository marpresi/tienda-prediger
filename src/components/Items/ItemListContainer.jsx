import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import GridLoader from "react-spinners/GridLoader";

import { db } from "../../utils/firebase";
//import { Productos } from "../../resources/data/productos";
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

    const { id } = useParams();

    let [loadingInProgress, setLoading] = useState(true);

    const [productos, setProductos] = useState([]);
    const [sinProductos, setSinProductos] = useState('');


    // const getProductos = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (Productos.length > 0) {
    //                 if(id){
    //                     const productosFiltrados = Productos.filter(p => p.categoria === id);
    //                     if(productosFiltrados.length > 0){
    //                         resolve(productosFiltrados);
    //                     }else{
    //                         reject('No se encontraron productos para esta categoría.');
    //                     }
    //                 }else{
    //                     resolve(Productos);
    //                 }
    //             } else {
    //                 reject('No se encontraron productos.');
    //             }
    //         }, 2000);
    //     })
    // }

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            try {
                let data = [];
                if(id){
                    const q = query(
                        collection(db,'ItemCollection'),
                        where('categoria', '==', id));
                    const querySnapshot = await getDocs(q);
                    const docs = querySnapshot.docs;
                    data = docs.map(doc => {return {...doc.data(),id: doc.id}});
                }else{
                    const query = collection(db,'ItemCollection');
                    const result = await getDocs(query);
                    const docs = result.docs;
                    data = docs.map(doc => {return {...doc.data(),id: doc.id}});
                }
                
                //const data = await getProductos();
                setProductos(data);
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
            <div className="px-4 text-center">
                <GridLoader color={'#c3c3c3'} loading={loadingInProgress} size={10} />

                { !loadingInProgress && productos.length > 0 && <ItemList productos={productos} /> }
                
                { !loadingInProgress && productos.length === 0 &&
                
                <>
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="display-5 fw-bold">Ups!!! </h1>
                    <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">La categoría a la que intentas acceder no existe o ya no esta disponible.</p>
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