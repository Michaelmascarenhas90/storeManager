import React from "react";
import logo from '../assets/img/logo-white.png'

function Header() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://www.sagrupo.com/">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Grupo SA
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;