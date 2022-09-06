import { Link } from 'react-router-dom';

import { Item } from './Item';

export const ItemList = ({productos}) => {
    return (<>
        <div className="col-lg-12 d-flex">
            {
                productos.map(producto =>(
                    <Link key={producto.id} to={`/item/${producto.id}`} >
                        <Item producto={producto}/>
                    </Link>
                ))
            }
        </div>
    </>);
}