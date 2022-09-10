import { NavLink } from 'react-router-dom';

export const CartWidget = () => {
    const cantArticulos = 0;
    return (<>

                <NavLink to="/cart" 
                    className={`nav-link text-success ${({isActive}) => isActive ? 'active': ''}`}
                    title="Finalizar mi compra"
                    >
                        <i className="bi bi-cart p-1"></i>
                        { cantArticulos > 0 ? cantArticulos : 'no se han agregado ítems' }
                </NavLink>
    </>);
}
