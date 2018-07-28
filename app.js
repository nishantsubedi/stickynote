const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://localhost:27017/university', function(err){
    if (err) throw err
  else console.log("connected to mongodb"); 
});


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser()); // pull information from html in POST
app.use('/public',express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));