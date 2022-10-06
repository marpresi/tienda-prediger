export const Item = ({ producto }) => {

    return (<>
        <div className="card">
            <div className="card-body">
                <div style={{ 'height': '80px' }} className="d-flex justify-content-center align-items-center">
                    <h4 className="card-title text-middle align-middle">{producto.title}</h4>
                </div>
                <img src={producto.pictureUrl} alt="imagen de producto" className="img-thumbnail" style={{ height: '160px' }} />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-middle">
                        <h4> ${producto.price} </h4>
                        <small><strong>{producto.stock}</strong> unidades disponibles</small>
                    </li>
                    <li className="list-group-item text-start text-description">
                        {producto.description}
                    </li>
                </ul>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-primary">Ver detalle</button>
            </div>
        </div>
    </>);
}
