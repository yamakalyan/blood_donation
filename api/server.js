const express = require('express')
const app = express()
const cors = require('cors')
const env = require('dotenv')
const donor = require('./controllers/users')
const patient = require('./controllers/Patient')

env.config()
app.use(cors({
    origin : '*'
}))

app.listen(process.env.PORT, (req, res)=>{
    console.log('its working on port 3120')
})

app.use(express.json())

app.use('/donor', donor)
app.use('/patient', patient)
