//creo un objeto vacio con la logica del backend
const noticiasCtrl = {};
noticiasCtrl.getPrueba = (req, res) => {
    res.send('Prueba desde el controlador');
}

export default noticiasCtrl;