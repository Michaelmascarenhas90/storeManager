import React from "react";
import "./Tfooter.css"

const valorTotal = ({ produtos, vlr_total }) => {
  // const valores = produtos.map((produto) => {
  //   const calculo = (produto.vlr_unit * produto.qtd)
    
  //   return calculo;
  // })

  // const totalidade = valores.reduce((total, valor) => total + valor, 0)

  // const valorTotal = totalidade.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return(
    <div className="table-responsive">
      <tbody className="tbody">
        <tr className="row">
          <td className="col vlrTotal">Total:</td>
          <td className="col align-items-end vlrTotal"><strong>{ vlr_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</strong></td>
        </tr>
        {/* <tr className="row">
          <td className="col-3  align-items-end">Total</td>
          <td className="col align-items-end"><strong>{ valorTotal }</strong></td>
        </tr> */}
      </tbody>
    </div>
  );
}

export default valorTotal;
