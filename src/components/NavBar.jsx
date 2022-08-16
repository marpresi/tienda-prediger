import {CartWidget} from './Cart/CartWidget';
export const NavBar = ({tiendaName}) => {
    return ( <>
      <header>
        <div className="px-3 py-2 text-bg-dark">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <i className="bi bi-bootstrap p-1"></i>
                {tiendaName}
              </a>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <CartWidget productQuantity="1"/>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </header>
    </>)
  }
