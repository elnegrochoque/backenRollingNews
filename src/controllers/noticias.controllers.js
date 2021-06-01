import Noticia from "../models/noticia"
//creo un objeto vacio con la logica del backend
const noticiasCtrl = {};
noticiasCtrl.getPrueba = (req, res) => {
    res.send('Prueba desde el controlador');
}
noticiasCtrl.crearNoticia = async (req, res) => {
    console.log(req.body);
    try {
        const {
            tituloNoticia,
            tituloExtendido,
            urlImagen,
            descripcionImagen,
            fecha,
            hora,
            autor,
            categoria,
            descripcionNoticia,
            cuerpoNoticia
        } = req.body
        //crear el nuevo objeto
        const noticiaNuevo = new Noticia({
            tituloNoticia,
            tituloExtendido,
            urlImagen,
            descripcionImagen,
            fecha,
            hora,
            autor,
            categoria,
            descripcionNoticia,
            cuerpoNoticia
        });
        await noticiaNuevo.save();
        res.status(201).json({
            mensaje:"Producto agregado a la BD"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje:"Ocurrio un error al agregar la noticia"
        })
        // enviar codigo de error
    }


    res.send('Desde crear noticia');
}

export default noticiasCtrl;