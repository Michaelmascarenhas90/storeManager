import React from "react";
import "./tbody.css";

const Tbody = ({ prod, ipi }) => {

  // const total = produtos.reduce((total, valor) => { return total + valor, 0 });
  // console.log(ipi)
  // .replace(/( )+/g, ' '); expressão para remover espaçõs duplicados
  
  // const ipiMap = ipi.map(ipiItem => {
  //   return (
  //     {
  //       cod_produto: ipiItem.B1_COD.replace(/( )+/g, ' '),
  //       alq_ipi: ipiItem.B1_IPI
  //     }
  //   )
  // })

  // console.log(ipiMap.cod_produto)

  return (
    <div>
      <thead>
        <tr className="row head">
          <th className="col-5">Produto</th>
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
            const qtd_total = produto.QtdeSag + produto.QtdeSac;
            
            const vlr_total = (vlr_unit * qtd_total)//.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const imposto = '5'

            return (
              <div>
                <div>
                  <tr className="row" key={i}>
                    <td className="col-5">{produto.dsProduto}</td>
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
