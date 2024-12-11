import Producto from '../models/producto.js';  

const obtenerProductos = async (req, res) => {
  try {
    // Obtener los valores de los headers
    const perPage = parseInt(req.get('perPage')) || 3; //  productos por página
    const page = parseInt(req.get('page')) || 1; // página 1

    // Calcular el índice de los productos que vamos a devolver
    const skip = (page - 1) * perPage;

    // Obtener los productos con paginado
    const productos = await Producto.find()
      .skip(skip) // Salta los productos de las páginas anteriores
      .limit(perPage); // Limita la cantidad de productos por página

    // Contar el total de productos disponibles
    const totalProductos = await Producto.countDocuments();

    // Devolver los productos con información sobre el total de productos
    res.json({
      productos,
      totalProductos,
      totalPaginas: Math.ceil(totalProductos / perPage), // Total de páginas disponibles
      paginaActual: page
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

const obtenerProducto = async (req, res) => {
  const { id } = req.params; // Obtén el ID desde los parámetros de la ruta
  try {
    const producto = await Producto.findById(id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el producto' });
  }
};

const crearProducto = async (req, res) => {
  const { nombre, descripcion, precio, categoria } = req.body;

  const producto = new Producto({
    nombre,
    descripcion,
    precio,
    categoria
  });

  try {
    const nuevoProducto = await producto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const actualizarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json(producto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const eliminarProducto = async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};

// "nombre": "Galaxy",
// "descripcion": "pantalla plegable y cámara de 108 MP",
// "precio": 999,
// "categoria": "Tecnología0",