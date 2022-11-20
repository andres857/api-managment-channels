const express = require('express')
const app = express()
var cors = require('cors');
const { getPlayersByClient } = require('./services/players/getPlayers')
const { newStreamingPlayers, service } = require('./services/players/globalActions')
const port = 3000

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended: false }) );

// get info of all players by client
app.get('/v1/{:idclient}/players',(req, res)=>{
    const payload = req.body
    service(payload)
    res.json({
        client:payload,
    })
})

// get info of a player
app.get('/v1/player/{:idPlayer}',(req, res)=>{
    const payload = req.body
    service(payload)
    res.json({
        client:payload,
    })
})

// actions to players by client
app.post('/v1/{:idclient}/action/players',(req, res)=>{
    const payload = req.body
    service(payload)
    res.json({
        client:payload,
    })
})

// create player by client
app.post('/v1/{:idclient}/create/player',(req, res)=>{
    const payload = req.body
    service(payload)
    res.json({
        client:payload,
    })
})

// actions to players
app.post('/v1/player/action/{:idplayer}',(req, res)=>{
    const payload = req.body
    service(payload)
    res.json({
        client:payload,
    })
})

// get info all streamings by client
app.get('/v1/{:idclient}/streaming',(req, res)=>{
    const payload = req.body
    service(payload)
    res.json({
        client:payload,
    })
})

// get info of streaming
app.put('/v1/{:idclient}/streaming/{:id}',(req, res)=>{
    const payload = req.body
    service(payload)
    res.json({
        client:payload,
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

