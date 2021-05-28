import {Router} from "express";
import noticiasCtrl from '../controllers/noticias.controllers'

//creo una instancia del Router
const router = Router();

//crear las rutas
//router.route("/").get(funcion con logica)
router.route("/").get(noticiasCtrl.getPrueba);

export default router; 