import React from "react";
import "./thead.css"

const Thead = () => {
  return (
    <thead>
      <tr className="row head">
        <th className="col-4">Produto</th>
        <th className="col-1">Qtd</th>
        <th className="col-1">Unitário</th>
        <th className="col-1">Total</th>
        <th className="col-1">IPI</th>
        <th className="col-4">Observação</th>
      </tr>
    </thead>
  );
}

export default Thead;
