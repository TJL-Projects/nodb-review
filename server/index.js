const express = require('express')
const wildCtrl = require('./controllers/wildPokemonCtrl')
const caughtCtrl = require('./controllers/caughtPokemonCtrl')
const app = express()

app.use(express.json())

//Wild pokemon endpoints
app.get('/api/wild-pokemon', wildCtrl.getThreeRandom)

//caught pokemon endpoints
app.get('/api/pokemon', caughtCtrl.getCaughtPokemon)
app.post('/api/pokemon', caughtCtrl.catchPokemon)
app.put('/api/pokemon/:pokemon_id', caughtCtrl.editPokemon)
app.delete('/api/pokemon/:pokemon_id', caughtCtrl.deletePokemon)

const SERVER_PORT = 3000

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port: ${SERVER_PORT}`)
})