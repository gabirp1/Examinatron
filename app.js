const express = require('express');
const Test = require('./models/test');
const User = require('./models/user')

require('./db/mongoose')
const testRouter = require('./routers/test')
const userRouter = require('./routers/user')

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

app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies

app.get('/', async (req, res) => {
  try{
    const tests =await Test.find({})
    res.render('index', { tests: tests, titulo: 'Índice' });
  }catch (e){

  res.render('index', { tests: [], titulo: 'Índice' });
  }
});

app.get('/', async (req, res) => {
  try{
    const users =await User.find({})
    res.render('index', { users: users, titulo: 'Índice' });
  }catch (e){

  res.render('index', { users: [], titulo: 'Índice' });
  }
});

app.get('/form', (req, res) => {
  res.render('form', { titulo: 'Form' });
});



app.post('/form', (req,res) => {
  res.redirect(307, './')
})


app.use(express.json())
app.use('/api', testRouter)



// 404 page
app.use((req, res) => {
  res.status(404).render('404', { titulo: '404' });
});

