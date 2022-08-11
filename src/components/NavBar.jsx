import React from 'react';
class NavBar extends React.Component {
    render() {
      return <>
        <header>
    <div class="px-3 py-2 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
          <i class="bi bi-bootstrap"></i> 
          Tienda Prediger
          </a>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/home" class="nav-link text-secondary">
              <i class="bi bi-house"></i> 
                Home
              </a>
            </li>
            <li>
              <a href="/dashboard" class="nav-link text-white">
              <i class="bi bi-speedometer2"></i>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/orders" class="nav-link text-white">
              <i class="bi bi-table"></i>
                Orders
              </a>
            </li>
            <li>
              <a href="/products" class="nav-link text-white">
              <i class="bi bi-grid"></i>
                Products
              </a>
            </li>
            <li>
              <a href="/customers" class="nav-link text-white">
              <i class="bi bi-person-circle"></i>
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
