import React from "react";
import "./Tfooter.css"

const valorTotal = ({ produtos, vlr_total }) => {
  const valores = produtos.map((produto) => {
    const calculo = (produto.vlr_unit * produto.qtd)
    
    return calculo;
  })

  const totalidade = valores.reduce((total, valor) => total + valor, 0)

  const valorTotal = totalidade.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  // const arr = [7, 7, 7, 7, 6, 8, 4, 12]
  // const aliquotaIpi = arr.filter((el, i) => arr.indexOf(el) === i);
  // const vlrIpi = ((totalidade * produtos.alq_imposto) / 100);

  // const valoresIpi = produtos.map((produto) => {
  //   const valores = []
  //   const calculo = (produto.vlr_unit * produto.qtd);
  //   const alqIpi = produto.alq_imposto / 100;
  //   const sum = (calculo * alqIpi);
  //   const totalComImposto = sum + calculo;
  //   valores.push(totalComImposto);
  //   // const totalAbsoluto = totalComImposto.reduce((total, valor) => total + valor, 0)
  //   return totalComImposto;
  // })

  // const totalyWithIpi = valoresIpi.reduce((totaly, value) => totaly + value, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return(
    <div className="container">
      <tbody className="tbody">
        <tr className="row">
          <td className="col-3 col-md-auto">Subtotal:</td>
          <td className="col align-items-end">{ valorTotal }</td>
        </tr>
        <tr className="row">
          <td className="col-3 col-md-auto">Total</td>
          <td className="col align-items-end"><strong>{ vlr_total }</strong></td>
        </tr>
      </tbody>
    </div>
  );

}

export default valorTotal;
