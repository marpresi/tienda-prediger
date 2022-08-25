export const CartWidget = ({cantArticulos}) => {
    return (<>
            <a href="/cart" className="nav-link text-success">
                <i className="bi bi-cart p-1"></i>
                { cantArticulos > 0 ? cantArticulos : 'no se han agregado ítems' }
            </a>
    </>);
}
