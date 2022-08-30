import { Item } from './Item';

export const ItemList = ({productos}) => {
    return (<>
        <div className="col-lg-12 d-flex">
            {
                productos.map((producto) => {
                    return <Item key={producto.id} producto={producto}/>
                })
            }
        </div>
    </>);
}