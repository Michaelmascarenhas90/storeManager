import sql from 'mssql';

const dbSettings = {
  user: "sa",
  password: "infor@2015",
  server: '10.81.234.6',
  //database: 'SCRMSA',
  database: 'SCRMSA_t',
  options: {
    encrypt: true, //for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  }
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error)
  }
};
