import "dotenv/config";
import express from "express";
import cors from "cors";
import routeruser from "./routes/UserRoutes";
import routercurso from './routes/CursoRoutes'
import sequelize from './config/connectdb';

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(routercurso);
app.use(routeruser);
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));

try {
    sequelize.authenticate();
    console.log('La conexión se ha establecido correctamente.');
  } catch (error) {
    console.error('No se puede conectar a la base de datos:', error);
  }