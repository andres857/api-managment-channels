const express = require('express')
const app = express()
var cors = require('cors');
const { getPlayersByClient } = require('./services/players/getPlayers')
const { newStreamingPlayers } = require('./services/players/globalActions')
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

// actions globals
app.post('/v1/streaming/wc/players',(req, res)=>{
    const player_id = req.query.id
    const actions = req.body
    newStreamingPlayers(actions)
    res.json({
        player_id,
        actions
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})