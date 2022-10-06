import { Link } from 'react-router-dom';

import { Item } from './Item';

export const ItemList = ({ productos }) => {
    return (<>
        <div className="row">
            {
                productos.map(producto => (
                    <div className="col-lg-3" key={producto.id}>
                        <Link to={`/item/${producto.id}`} style={{ 'textDecoration': 'none' }}>
                            <Item producto={producto} />
                        </Link>
                    </div>
                ))
            }

        </div>
    </>);
}