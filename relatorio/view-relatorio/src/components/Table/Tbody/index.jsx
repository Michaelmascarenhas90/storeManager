import React from "react";

import "./tbody.css";

const Tbody = ({ prod }) => {
  
  return (
    <div>
      <thead>
        <tr className="row head">
          <th className="col-4 border-t">Produto</th>
          <th className="col-1 border-t">Qtd</th>
          <th className="col-1 border-t">Unitário</th>
          <th className="col-2 border-t">Total</th>
          <th className="col-2 border-t">IPI</th>
          <th className="col-2">Observacao</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {prod.map((produto, i) => {
            // .toFixed(2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const vlr_unit = (produto.PrecoT)//.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const qtd_total = produto.QT;
            const vlr_total = (vlr_unit * qtd_total)//.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const imposto = produto.IPI

            return (
              <div id="line-padding">
                <tr className="row" id="line-padding" key={i}>
                  <td className="col-4 name-prod head border-t">{produto.dsProduto}</td>
                  <td className="col-1 head border-t">{qtd_total}</td>
                  <td className="col-1 head border-t">{vlr_unit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="col-2 head border-t">{vlr_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="col-2 head border-t">{imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  <td className="col-2 head">{produto.Observacao}</td>
                </tr>
                { produto.opcional ?<tr className="opcionais"><strong>Opcionais: </strong>{produto.opcional}</tr> : null }

              </div>
            );
          })
        }
      </tbody>
    </div>
  )
  // return tabela;
}

export default Tbody;
