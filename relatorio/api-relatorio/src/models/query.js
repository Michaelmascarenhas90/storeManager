

export const querys =  {
  getAllOrders: 'SELECT * FROM Pedidos',
  getById: 'select * from Pedidos where id = @Id',
  getTypeFrete: 'select * from Fretes',
  getCondPagto: 'select * from vw_Condicoes_Pagtos',
}