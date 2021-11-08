import { Router } from 'express';

import { getOrder, getOrderById, getFrete, condPagto } from '../controllers/orderBy.controller'

const router = Router();


router.get('/order', getOrder);

router.get('/order/:id', getOrderById);

router.get('/frete', getFrete);

router.get('/condpag', condPagto);

export default router;