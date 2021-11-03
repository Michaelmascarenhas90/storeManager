import React from "react";
import "./tbody.css";

const Tbody = ({ produtos }) => {

  // const total = produtos.reduce((total, valor) => { return total + valor, 0 });

  return (
    <div>
      <tbody className="tbody">
        {produtos.map((produto, i) => {
            // .toFixed(2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const vlr_unit = (produto.vlr_unit)//.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const vlr_total = (produto.vlr_unit * produto.qtd)//.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            const imposto = ((vlr_total * produto.alq_imposto) / 100);
            
            return (
              <div>
                <div>
                  <tr key={i} className="row">
                    <td className="col-4">{produto.item}</td>
                    <td className="col head">{produto.qtd}</td>
                    <td className="col head">{vlr_unit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="col head">{vlr_total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="col head">{imposto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td className="col-3 head">{produto.obs}</td>
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
