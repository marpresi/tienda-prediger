export const CartWidget = ({productQuantity = 0}) => {
    return (<>
            <a href="/cart" className="nav-link text-success">
                <i className="bi bi-cart p-1"></i>
                { productQuantity > 0 ? productQuantity : '' }
            </a>
    </>);
}
