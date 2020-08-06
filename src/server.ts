import express from 'express'

const app = express()

app.get('/users', (req, res, next) => {
  console.log('Acessou a rota')
  return res.json({user: 'john'})
})



app.listen(3333, () => {
  console.log('Server listening on port 3333')
})