import React from "react";
import "./Tfooter.css"

const valorTotal = ({ produtos }) => {
  const valores = produtos.map((produto) => {
    const calculo = (produto.vlr_unit * produto.qtd)
    
    return calculo;
  })

  const aliquotaIpi = produtos.map((produto) => {
    const alqIpi = produto.alq_imposto;
    return alqIpi;
  });

  const totalidade = valores.reduce((total, valor) => total + valor, 0)

  const valorTotal = totalidade.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const vlrIpi = ((totalidade * aliquotaIpi) / 100);


  return(
    <div>
      <tbody className="tbody">
        <tr className="row">
          <td className="col">Subtotal:</td>
          <td className="col">{ valorTotal }</td>
        </tr>
        <tr className="row">
          <td className="col">Total</td>
          <td className="col">{vlrIpi}</td>
        </tr>
      </tbody>
    </div>
  );

}

export default valorTotal;
