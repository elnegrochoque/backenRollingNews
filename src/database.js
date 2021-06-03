import mongoose from 'mongoose';


// const url='mongodb://localhost:27017/noticias';
const url='mongodb+srv://elnegrochoque:elnegrochoque_11@cluster0.yy3fo.mongodb.net/noticias';
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

// guardar la conxion en una variable

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('BD conectada')
})
