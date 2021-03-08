// import express from 'express';

const cors = require('cors');
const express = require('express')

const testimonials = require('./data/testimonials.json');

const app = express()
const port = 7000


app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
  res.send('Hello World! Api testimonials')
})

app.get('/testimonials', (req, res) => {
    res.json(testimonials)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
