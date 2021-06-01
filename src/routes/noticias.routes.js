import { Router } from "express";
import noticiasCtrl from "../controllers/noticias.controllers";

//creo una instancia del Router
const router = Router();

//crear las rutas
//router.route("/").get(funcion con logica)
router.route("/")
    .get(noticiasCtrl.listarNoticias)
    .post(noticiasCtrl.crearNoticia)
router.route("/:id")
    .delete(noticiasCtrl.eliminarNoticia)




export default router;
