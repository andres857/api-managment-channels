const express = require('express')
const app = express()
var cors = require('cors');
const { getPlayersByClient } = require('./services/players/getPlayers')
const { newStreamingPlayers, service } = require('./services/players/globalActions')
const port = 3000

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded({ extended: false }) );

app.get('/v1/streaming/wc/info',(req,res)=>{
    const {client} = req.query
    getPlayersByClient(client)
        .then((players)=>{
            console.log(players);
            res.json(players)
        }).catch(e=> console.log(e))
})
// get Players
app.get('/v1/streaming/wc/players', (req, res) => {
    const { client } = req.body
    getPlayersByClient(client)
        .then((players)=>{
            res.json(players)
        }).catch(e=>{console.log(e);})
})

// request to players
app.post('/v1/streaming/wc/players',(req, res)=>{
    const payload = req.body
    service(payload)
    res.json({
        client:payload,
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})