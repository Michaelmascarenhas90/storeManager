
export const querys =  {
  getAllOrders: 'SELECT * FROM Pedidos',
  getById: 'select * from Pedidos where Id = @Id',
  getFretes: 'select * from Fretes',
  getVendedoresById: 'select Nome from Usuarios where Id = @Id',
  getCondPagByID: 'select Descricao from vw_Condicoes_Pagtos where CdCondPagto = @Id',
  getIpiList: 'select * from View_ipi',
  getItemsById: 'select * from PedidosItens where IdPedido = @Id',
  getAddressId: 'select * from View_ENDCLI where A1_COD = @Id',
}
