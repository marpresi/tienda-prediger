import { ItemCount } from "./Cart/ItemCount";
import producto_1 from '../resources/images/producto_1.jpg';

export const ItemListContainer = ({ greeting = "Bienvenido", onRefreshCarro }) => {

    const agregarAlCarro = (cantidad) => {
        onRefreshCarro(cantidad);
    }

    const producto = {
        id: 1,
        titulo: 'Toallón  con Capucha y Orejas',
        descripcion: 'Confeccionada con tela de toalla doble felpa con capucha en tela piqué o gabardina estampada 100 % algodón y en su interior en tela de toalla.',
        imagen: producto_1,
    };

    return (<>
        <div className="container-fluid">
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">{greeting}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Esta pagina está creada con React y es el trabajo práctico de la clase de <a href="https://coderhouse.com" target="_blank">CoderHouse</a></p>
                </div>
                <hr />
                <div className="col-lg-6 mx-auto">
                    <ItemCount 
                        producto={producto}
                        stock={2}
                        initial={1}
                        onAdd={agregarAlCarro}/>
                </div>

            </div>
        </div>
    </>);
}