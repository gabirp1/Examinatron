const express = require('express')

require('./db/mongoose')
const cocheRouter = require('./routers/coche')

const port = process.env.PORT

// express app
const app = express();

// listen for requests
app.listen(port, () => {
  console.log(`Server listening to port ${port}`)
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  const preguntas = [
    { marca: 'Audi', modelo: 'A3' },
    { marca: 'BMW', modelo: 'X6' },
    { marca: 'Mercedes', modelo: 'A380' }
  ];
  res.render('index', { preguntas: preguntas, titulo: 'Índice' });
});


app.use(express.json())
app.use('/api', cocheRouter)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { titulo: '404' });
});