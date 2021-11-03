import React from "react";
import "./thead.css"

const Thead = () => {
  return (
    <thead>
      <tr className="row head">
        <th className="col-4">Produto</th>
        <th className="col">Qtd</th>
        <th className="col">Unitário</th>
        <th className="col">Total</th>
        <th className="col">IPI</th>
        <th className="col-3">Observação</th>
      </tr>
    </thead>
  );
}

export default Thead;
