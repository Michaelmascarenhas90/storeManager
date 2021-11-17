import { Router } from 'express';

import {
  getOrder,
  getOrderById,
  getByFrete,
  getFreteById,
  getByVendedores,
  getByCondicao,
  // getIpi,
  // gitIpiAll,
  getByItensForId,
  getByAddress
} from '../controllers/orderBy.controller'

const router = Router();

router.get('/order', getOrder);

router.get('/order/:id', getOrderById);

router.get('/frete', getByFrete);
router.get('/frete/:id', getFreteById)

router.get('/vendedor/:id', getByVendedores)
router.get('/condicao/:id', getByCondicao)

router.get('/productsbypedido/:id', getByItensForId)
// router.get('/ipitem/:id', getIpi)
// // router.get('/ipitem', gitIpiAll)

router.get('/address/:id', getByAddress)

export default router;
