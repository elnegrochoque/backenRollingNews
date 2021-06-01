import mongoose, { Schema } from "mongoose"

const noticiaSchema = new Schema({
    tituloNoticia: {
        type: String,
        require: true
    },
    tituloExtendido:{
        type: String,
        require: true
    },
    urlImagen: {
        type: String,
        require: true
    },
    descripcionImagen: {
        type: String,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
    hora: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    descripcionNoticia: {
        type: String,
        require: true
    },
    cuerpoNoticia: {
        type: String,
        require: true
    } 
});

const Noticia = mongoose.model('noticia',noticiaSchema);

export default Noticia;