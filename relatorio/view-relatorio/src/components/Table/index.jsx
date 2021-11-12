import React from "react";

// import Thead from "./Thead";
import Tbody from "./Tbody";
// import Tfooter from "./Tfooter";

import "./table.css";

const Table = ({ prod, obs }) => {
    // const observações = produtos.map((produto) => <span className="row">{produto.obs}</span>)
  return (
    <div className="table-responsive">
      <section className="row">
        <p>{obs}</p>
      </section>
      <table className="table" width="100%">
          {/* <Thead /> */}
        <Tbody prod={ prod } />
          {/* <Tfooter produtos={ produtos } /> */}
      </table>
    </div>
  );
}

export default Table;
