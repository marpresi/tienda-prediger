export const Item = ({ producto}) => {

    return (<>
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-header">
                <h5 className="card-title text-start">{producto.title}</h5>
            </div>
            <div className="card-body">
                <img src={producto.pictureUrl} alt="imagen de producto" className="img-thumbnail" style={{height: '200px'}} />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-start">
                        Precio: {producto.price}
                    </li>
                    <li className="list-group-item text-start">
                        Stock: {producto.stock}
                    </li>
                    <li className="list-group-item text-start">
                        {producto.description}
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-sm btn-primary">Ver detalle</a>
            </div>
        </div>
    </>);
}
