import React from "react";

// import Thead from "./Thead";
import Tbody from "./Tbody";
// import Tfooter from "./Tfooter";

import "./table.css";

const Table = ({ produtos, prod }) => {
    const observações = produtos.map((produto) => <span className="row">{produto.obs}</span>)
  return (
    <div className="table-responsive">
      <section className="row">
        {observações}
      </section>
      <table className="table">
          {/* <Thead /> */}
        <Tbody produtos={ produtos } prod={ prod } />
          {/* <Tfooter produtos={ produtos } /> */}
      </table>
    </div>
  );
}

export default Table;
