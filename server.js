require('dotenv').config()

const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const { v4: uuidV4 } = require('uuid')
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  // create new chat room
  res.redirect(`/${uuidV4()}`)
})

app.get('/:room', (req, res) => {
  res.send(`Your new room id is: ${req.params.room}`)
  // res.render('room', { roomId: req.params.room })
})

server.listen(port)