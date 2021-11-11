import { Router } from 'express';

import {
  getOrder,
  getOrderById,
  getByFreteId,
  getByVendedores,
  getByCondicao,
  getIpi,
  getByItensForId,
  getByAddress
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

router.get('/address/:id', getByAddress)

export default router;
