const express = require('express')
const app = express()
const { getPlayersByClient } = require('./services/getPlayers')
const { service } = require('./services/main')
const port = 3000

app.use( express.json() )
app.use( express.urlencoded({ extended: false }) );

app.get('/v1/streaming/wc/players', (req, res) => {
    const { client } = req.body
    getPlayersByClient(client)
        .then((players)=>{
            res.json(players)
        }).catch(e=>{console.log(e);})
})

app.post('/v1/streaming/wc/players',(req, res)=>{
    const player_id = req.query.id
    const actions = req.body

    res.json({
        player_id,
        actions
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})