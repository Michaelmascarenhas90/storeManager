import { Router } from 'express';

import {
  getOrder,
  getOrderById,
  getByFreteId,
  getByVendedores,
  getByCondicao,
  getIpi,
  getByItensForId,
} from '../controllers/orderBy.controller'

const router = Router();

router.get('/order', getOrder);

router.get('/order/:id', getOrderById);

router.get('/frete', getByFreteId);

// router.get('/teste/:id', getByTest);

router.get('/vendedor/:id', getByVendedores)
router.get('/condicao/:id', getByCondicao)

router.get('/productsbypedido/:id', getByItensForId)
router.get('/ipitem', getIpi)

export default router;
