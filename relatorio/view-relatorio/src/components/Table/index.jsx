import React from "react";
import Table from 'react-bootstrap/Table'

// import Thead from "./Thead";
import Tbody from "./Tbody";
// import Tfooter from "./Tfooter";

import "./table.css";

const TableComponent = ({ prod, obs, ipi }) => {
    // const observações = produtos.map((produto) => <span className="row">{produto.obs}</span>)
    const renderObs = <section className="row"><p className="head"><strong>Observações: </strong><span>{obs}</span></p>
  </section>
  return (
    <div className="table-responsive">
      {obs ? renderObs : null}

      <Table className="table" width="100%">
          {/* <Thead /> */}
        <Tbody prod={ prod } ipi={ipi}/>
          {/* <Tfooter produtos={ produtos } /> */}
      </Table>
    </div>
  );
}

export default TableComponent;
