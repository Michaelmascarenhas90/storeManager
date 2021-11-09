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

export const getByFreteId = async (_req, res) => {
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

export const getByTest = async(req, res) => {
  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool.request().input('id', id).query(querys.getTest);

  res.send(result.recordset[0]);
}