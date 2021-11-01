import React from "react";

import Thead from "./Thead";
import Tbody from "./Tbody";

import "./table.css";

const Table = ({ produtos }) => {
  return (
    <table className="container tabela">
        <Thead />
        <Tbody produtos={ produtos } />
    </table>
  );
}

export default Table;
