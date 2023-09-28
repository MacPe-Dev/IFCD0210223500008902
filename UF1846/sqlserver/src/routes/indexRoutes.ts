import { Router } from 'express'; // importar express
import routeruser from './UserRoutes' // importar el archivo de rutas de usuarios
import routercurso from './CursoRoutes'


const rutas_init = () => { // se ponen todas las rutas que existen
  const router = Router() // crear una instancia de express.Router()

  router.use("/usuarios", routeruser) // para acceder a las rutas de usuarios de la api siempre deberá empezar con /usuarios
  router.use("/cursos", routercurso)
    
  return router // retornar el router
};

export default  rutas_init;  // exportar el archivo de rutas de la api