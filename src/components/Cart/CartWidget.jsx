export const CartWidget = () => {
    const cantArticulos = 0;
    return (<>
            <a href="/cart" className="nav-link text-success" title="Finalizar mi compra">
                <i className="bi bi-cart p-1"></i>
                { cantArticulos > 0 ? cantArticulos : 'no se han agregado ítems' }
            </a>
    </>);
}
