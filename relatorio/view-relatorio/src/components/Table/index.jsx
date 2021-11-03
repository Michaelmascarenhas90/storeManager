import React from "react";

import Thead from "./Thead";
import Tbody from "./Tbody";
// import Tfooter from "./Tfooter";

import "./table.css";

const Table = ({ produtos }) => {
    const observações = produtos.map((produto) => <span className="row">{produto.obs}</span>)
  return (
    <div className="container tabela">
      <section className="row">
        {observações}
      </section>
      <table className="table">
          <Thead />
          <Tbody produtos={ produtos } />
          {/* <Tfooter produtos={ produtos } /> */}
      </table>
    </div>
  );
}

export default Table;
