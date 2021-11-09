
export const querys =  {
  getAllOrders: 'SELECT * FROM Pedidos',
  getById: 'select * from Pedidos where Id = @Id',
  getFretes: 'select * from Fretes',
  getTest: 'with Consulta as(select distinct NrItem,idPedido, dsProduto, (QtdeSac + QtdeSag) AS QT, Preco as PrecoT, Total, ((QtdeSag*Preco)*B1_IPI/100) as IPI, Observacao, o.Tipo,n.GA_DESCOPC as opcional from PedidosItens p LEFT join PedidosItensOpcionais o on o.IdItem=p.Id LEFT join vw_opcionais n on n.gravar = o.Valor Join [10.81.234.7].[MP12SAG_PRD].[dbo].[SB1010] b ON B1_COD COLLATE SQL_Latin1_General_CP1_CI_AI = cdProduto) select NrItem,IdPedido,dsProduto,QT,PrecoT,Total,IPI,Observacao,string_agg(tipo, ";")tipo,string_agg (opcional, ";")opcional from Consulta where idPedido IN (@id) group by NrItem,IdPedido,dsProduto,QT,PrecoT,Total,IPI,Observacao order by NrItem',
}