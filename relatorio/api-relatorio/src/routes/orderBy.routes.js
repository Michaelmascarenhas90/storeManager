import { Router } from 'express';

import {
  getOrder,
  getOrderById,
  getByFreteId,
  getByTest,
} from '../controllers/orderBy.controller'

const router = Router();

router.get('/order', getOrder);

router.get('/order/:id', getOrderById);

router.get('/frete', getByFreteId);

router.get('/teste', getByTest);

export default router;
