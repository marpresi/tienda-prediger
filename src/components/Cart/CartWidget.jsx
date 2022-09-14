import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const { cartList, getTotalCount } = useContext(CartContext);
    
    
    return (<>
                { getTotalCount() > 0 && 

                <NavLink to="/cart" 
                    className={`nav-link text-success ${({isActive}) => isActive ? 'active': ''}`}
                    title="Terminar mi compra"
                    >
                        <i className="bi bi-cart p-1"></i>
                        { getTotalCount() }
                </NavLink>

                
                 

                }
    </>);
}
