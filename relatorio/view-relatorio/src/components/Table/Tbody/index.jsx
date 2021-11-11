import React from "react";
import "./tbody.css";

const Tbody = ({ prod }) => {

  // const total = produtos.reduce((total, valor) => { return total + valor, 0 });

  return (
    <div>
      <thead>
        <tr className="row head">
          <th className="col-4">Produto</th>
          <th className="col head">Qtd</th>
          <th className="col head">Unitário</th>
          <th className="col head">Total</th>
          <th className="col head">IPI</th>
          <th className="col-2">Observação</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {prod.map((produto, i) => {
            // .toFixed(2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const vlr_unit = (produto.Preco)//.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const qtd_total = produto.QtdeSag + produto.QtdeSac
            const vlr_total = (vlr_unit * qtd_total)//.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const imposto = ((vlr_total * 5) / 100);

            return (
              <div>
                <div>
                  <tr className="row" key={i}>
                    <td className="col-4">{produto.dsProduto}</td>
                    <td className="col head">{qtd_total}</td>
                    <td className="col head">{vlr_unit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="col head">{vlr_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="col head">{imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="col-2">{produto.Observacao}</td>
                  </tr>
                </div>
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
