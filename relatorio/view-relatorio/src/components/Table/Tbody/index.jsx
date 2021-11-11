import React from "react";
import "./tbody.css";

const Tbody = ({ produtos, prod }) => {

  // const total = produtos.reduce((total, valor) => { return total + valor, 0 });

  return (
    <div>
      <thead>
        <tr className="row row-test head">
          <th className="col-4">Produto</th>
          <th className="col-1">Qtd</th>
          <th className="col">Unitário</th>
          <th className="col">Total</th>
          <th className="col">IPI</th>
          <th className="col-3">Observação</th>
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
                  <tr key={i} className="row row-test">
                    <td className="col-4">{produto.dsProduto}</td>
                    <td className="col-1 head">{qtd_total}</td>
                    <td className="col head">{vlr_unit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="col head">{vlr_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="col head">{imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="col-3 head">{produto.Observacao}</td>
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
