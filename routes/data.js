import express from 'express'
import {_getProducts,_addProduct,_updateProduct,_addSale, _getSales,_getSalesFiveDays, _deleteProduct,_getDestinctTop} from '../controllers/data.js'


const router = express.Router();

router.get('/products',_getProducts)
router.post('/product', _addProduct)
router.post('/product/:id',_updateProduct)
router.delete('/product/:id',_deleteProduct)
router.post('/sales', _addSale)
router.get('/sales',_getSales)
router.get('/sales-five-days',_getSalesFiveDays)
router.get('/sales-dest',_getDestinctTop)
// router.delete('/product',)


export default router