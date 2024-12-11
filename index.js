
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import productoRoutes from './routes/productoRoutes.js';

dotenv.config();

const app = express();


app.use(express.json());  
app.use(cors());  

//eliminan las advertencias de mongodb
process.noDeprecation = true;
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error de conexión:', err));


app.use('/api', productoRoutes);  


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
