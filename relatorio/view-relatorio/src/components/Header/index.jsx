// import React, { useState } from "react";
import logo from '../../assets/img/logo-white.png'
import './header.css'



function Header({ order, client }) {
  // const oc = 1789
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-primary row">
        <div className="container-fluid col-sm">
          <a className="navbar-brand" href="https://www.sagrupo.com/">
            <img
              src={logo}
              alt="imagem logo"
              width="60"
              className="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div className="col-6"><h2>Orçamento</h2></div>
        <div className="col col-lg-2"><span className='id-ordem-compra'>OC: { order.Id }</span></div>
        <div className="col col-lg-2"><span className='id-ordem-compra'>Data: { client.data }</span></div>
      </nav>
    </div>
  );
}

export default Header;