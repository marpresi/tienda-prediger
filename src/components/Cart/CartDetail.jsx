export const CartDetail = ({ cartList, removeItem, clear, getTotalCount, getTotalAmount }) => {

    return (<>

        <table className="table table-hover align-middle">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col" className="text-start">Nombre</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Sub Total</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartList.map(item => (
                        <tr key={item.id}>
                            <th scope="row">
                                <img src={item.pictureUrl} className="img-thumbnail" style={{ 'maxHeight': '80px' }} alt={item.title} />
                            </th>
                            <td className="text-start">{item.title}</td>
                            <td>{item.cantidad}</td>
                            <td className="text-end">${item.price}</td>
                            <td className="text-end">${item.price * item.cantidad}</td>
                            <td>
                                <button onClick={() => { removeItem(item.id) }} className="btn btn-sm btn-outline-danger" title="Esta acción elimina este producto de su carrito.">
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </td>
                        </tr>
                    ))

                }
            </tbody>
            <tfoot>
                <tr className="bg-secondary text-white">
                    <th>&nbsp;</th>
                    <td className="text-white text-end">
                        Total de Productos
                    </td>
                    <th>
                        {getTotalCount()}
                    </th>
                    <td className="text-white text-end">
                        Importe Total
                    </td>
                    <th className="text-end">
                        {getTotalAmount()}
                    </th>
                    <th><button onClick={clear} className="btn  btn-danger btn-sm" title="Esta acción eliminará todos los productos de su carrito.">VACIAR CARRITO</button></th>
                </tr>
            </tfoot>
        </table>

    </>)

}