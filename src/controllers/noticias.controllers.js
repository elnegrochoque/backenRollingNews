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
            mensaje: "Producto agregado a la BD"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error al agregar la noticia"
        })
        // enviar codigo de error
    }
}

noticiasCtrl.listarNoticias = async (req, res) => {
    try {
        // obtener un areglo con las noticias
        const arregloNoticias = await Noticia.find();
        res.status(200).json(arregloNoticias);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error al obtener las noticias"
        })
    }

}
noticiasCtrl.eliminarNoticia = async (req, res) => {
    try {

        console.log(req.params.id)
        await Noticia.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: "el producto fue eliminado"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error eliminar la noticia"
        })
    }

}
noticiasCtrl.obtenerNoticia = async (req, res) => {
    try {

        console.log(req.params.id)
        const noticiaBuscada = await Noticia.findById(req.params.id)

        res.status(200).json(noticiaBuscada)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener la noticia"
        })
    }

}
noticiasCtrl.editarNoticia = async (req, res) => {
    try {
        console.log(req.body)
        await Noticia.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje:"el producto fue modificado"
        })
    } catch (error) {
    console.log(error)
    res.status(404).json({
        mensaje: "error al editar la noticia"
    })
}
}


export default noticiasCtrl;