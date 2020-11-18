const express = require('express')

require('./db/mongoose')
const testRouter = require('./routers/test')

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
  const test = [
  {question,answer1,answer2,answer3,answer4}
  ];
  res.render('index', { test: test, titulo: 'Índice' });
});


app.use(express.json())
app.use('/api', testRouter)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { titulo: '404' });
});