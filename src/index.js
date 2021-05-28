import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import noticiasRoutes from './routes/noticias.routes'

const app = express();

const port = 4000;

app.set('port', process.env.PORT || 4000);

app.listen((app.get('port')), () => {
    
    console.log('estoy en el puerto ' + app.get('port'))
}
);

// Middlewares
app.use(morgan('dev'));
//cors nos permite realizar las peticiones al backend
app.use(cors());
// de express
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// agrego la carpeta public como estatica

app.use(express.static(path.join(__dirname,'../public')));


// app.get('/',(req,res)=>{
//     res.send('hola  desde el servidor');
// })

app.use('/api/noticias',noticiasRoutes);
