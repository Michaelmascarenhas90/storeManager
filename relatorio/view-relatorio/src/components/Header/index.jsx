// import React, { useState } from "react";
import logo from '../../assets/img/logo-white.png'
import './header.css'



function Header(props) {
  // const oc = 1789
  return (
    <div className="container">
      <nav class="navbar navbar-dark bg-primary row">
        <div class="container-fluid col-sm">
          <a class="navbar-brand" href="https://www.sagrupo.com/">
            <img
              src={logo}
              alt="imagem logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            Grupo SA
          </a>
        </div>
        <div className="col-sm"><span className='id-ordem-compra'>OC: {props.oc}</span></div>
      </nav>
    </div>
  );
}

export default Header;