import express from 'express';
import productoController from '../controllers/productoController.js';

const router = express.Router();


router.get('/productos', productoController.obtenerProductos);
router.get('/producto/:id', productoController.obtenerProducto);

router.post('/producto', productoController.crearProducto);

router.put('/producto/:id', productoController.actualizarProducto);

router.delete('/producto/:id', productoController.eliminarProducto);

export default router;
