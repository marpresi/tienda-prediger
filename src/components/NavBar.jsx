import React from 'react';
class NavBar extends React.Component {
  render() {
    return <>
      <header>
        <div className="px-3 py-2 text-bg-dark">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <i className="bi bi-bootstrap"></i>
                Tienda Prediger
              </a>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="/home" className="nav-link text-secondary">
                    <i className="bi bi-house"></i>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/dashboard" className="nav-link text-white">
                    <i className="bi bi-speedometer2"></i>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="/orders" className="nav-link text-white">
                    <i className="bi bi-table"></i>
                    Orders
                  </a>
                </li>
                <li>
                  <a href="/products" className="nav-link text-white">
                    <i className="bi bi-grid"></i>
                    Products
                  </a>
                </li>
                <li>
                  <a href="/customers" className="nav-link text-white">
                    <i className="bi bi-person-circle"></i>
                    Customers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </header>
    </>
  }
}

export default NavBar;
