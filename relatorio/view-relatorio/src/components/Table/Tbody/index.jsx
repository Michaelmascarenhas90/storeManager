import React from "react";
import "./tbody.css";

const Tbody = ({ produtos }) => {
  return (
    <tbody className="tbody">
      {produtos.map((produto, i) => {
          // .toFixed(2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          const vlr_unit = produto.vlr_unit
          const vlr_total = (produto.vlr_unit * produto.qtd)
          return (
              <div>
                <tr key={i} className="row">
                  <td className="col-4">{produto.item}</td>
                  <td className="col-1 head">{produto.qtd}</td>
                  <td className="col-1 head">{vlr_unit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="col-1 head">{vlr_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="col-1 head">{((vlr_total * produto.alq_imposto) / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="col-4 head">{produto.obs}</td>
                </tr>
              </div>
          );
        })
      }
    </tbody>
  )
  // return tabela;
}

export default Tbody;
