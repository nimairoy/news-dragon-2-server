const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 7000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res)=>{
    res.send('Hello World!!')
})

// all categories load 
app.get('/categories', (req, res)=>{
    res.send(categories);
})

// all news load 
app.get('/news', (req, res)=>{
    res.send(news)
})


app.listen(port, ()=>{
    console.log('Server is Running on port', port);
})