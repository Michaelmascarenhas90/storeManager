import { pool } from 'mssql';
import { getConnection, querys } from '../models';

export const getOrder = async (_req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllOrders);
    // console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getOrderById = async (req, res) => {
  const {id} = req.params;

  const pool = await getConnection();
  const result = await pool.request().input('Id', id).query(querys.getById);
  // console.log(result);
  res.send(result.recordset[0]);
};

export const getByFrete = async (_req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getFretes);
    // console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

export const getFreteById = async (req, res) => {
  const {id} = req.params;

  const pool = await getConnection();
  const result = await pool.request().input('Id', id).query(querys.getFreteById);
  // console.log(result);
  res.send(result.recordset[0]);
}

export const getByVendedores = async (req, res) => {
  const {id} = req.params;

  const pool = await getConnection();
  const result = await pool.request().input('Id', id).query(querys.getVendedoresById);
  // console.log(result);
  res.send(result.recordset[0]);
};

export const getByCondicao = async (req, res) => {
  const {id} = req.params;

  const pool = await getConnection();
  const result = await pool.request().input('Id', id).query(querys.getCondPagByID);
  // console.log(result);
  res.send(result.recordset[0]);
};

export const getIpi = async (req, res) => {
  const {id} = req.params;

  const pool = await getConnection();
  const result = await pool.request().input('Id', id).query(querys.getIpiList);
  // console.log(result);
  res.send(result.recordset[0]);
}

// export const gitIpiAll = async (_req, res) => {
//   try {
//     const pool = await getConnection();
//     const result = await pool.request().query(querys.getIpiForAll);
//     // console.log(result);
//     res.json(result.recordset);
//   } catch (error) {
//     res.status(500);
//     res.send(error.message);
//   }
// }

export const getByItensForId = async (req, res) => {
  const {id} = req.params;

  const pool = await getConnection();
  const result = await pool.request().input('Id', id).query(querys.getItemsById);
  // console.log(result);
  res.send(result.recordset.flat(2));
};

export const getByAddress = async (req, res) => {
  const {id} = req.params;

  const pool = await getConnection();
  const result = await pool.request().input('Id', id).query(querys.getAddressId);
  // console.log(result);
  res.send(result.recordset[0]);
};

