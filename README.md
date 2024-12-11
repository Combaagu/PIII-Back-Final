#### Proyecto API RESTfull y Aplicación Frontend

## Descripción del Proyecto
Este proyecto consiste en una API RESTfull desarrollada con Node.js y Express que permite gestionar productos, junto con una aplicación frontend simple que muestra el listado de productos disponibles.

### Tecnologías Utilizadas

## Backend
- Node.js
- Express
- MongoDB (base de datos)
- dotenv (gestión de variables de entorno)
- CORS (manejo de políticas de origen cruzado)
- nodemon (entorno de desarrollo) (devDependencia)

## Herramientas
- Postman (para probar los endpoints de la API)
- en este caso:
    - Get, Post, Put, Delete

## Instrucciones de Configuración y Ejecución

1. **Desccargar Repositorio o clonar:**
    -Git Hub

2. **Instalar dependencias:**
   npm install

3. **Configurar variables de entorno:**
   Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   - .env = 
   MONGO_URI= (conexion a mongoDB)
   PORT= (puerto a eleccion)

4. **Ejecutar el servidor:**
   npm start

   El servidor estará corriendo en `http://localhost:PORT`.


### Endpoints de la API

## Base URL: `http://localhost:PORT/api`

- Metodos de la solicitud de la API

| GET    | `/productos`| Obtener listado de productos (con paginado).

| GET    | `/producto/:id`| Obtener un producto específico por ID. 

| POST   | `/producto`| Crear un nuevo producto.          

| PUT    | `/producto/:id`| Actualizar un producto por ID.    

| DELETE | `/producto/:id`| Eliminar un producto por ID.      

# Ejemplo para Paginado
 - json:
{
  "perPage": 5,
  "page": 2
}


# Ejemplo de Body para Crear/Actualizar Producto
    - json
{
  "nombre": "Producto",
  "descripcion": "Descripción del producto",
  "precio": Precio del producto,
  "categoria": "Categoría"
}

## Postman

Se incluye un archivo de colección de Postman que contiene ejemplos para probar todos los endpoints.

# {}PIII-Final.postman_collection.json