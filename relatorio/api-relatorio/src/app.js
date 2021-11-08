import express from 'express';
import config from './config';
import cors from 'cors'

import orderByRoutes from './routes/orderBy.routes'

const app = express();

// settings
app.set('port', config.port || 3000);

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  app.use(cors())
  next();
})
app.use(express.urlencoded({ extended: false }));

app.use(orderByRoutes)

export default app;
