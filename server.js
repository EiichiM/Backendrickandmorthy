require("dotenv").config();

const mongoose = require("mongoose");
const URL = process.env.URL;
mongoose.connect(URL, { useNewUrlPrser: true }, (err) => {
    if (!err) { console.log("Conectado a Mongo") }
});
const PORT = process.env.PORT || 5000;
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());

const request = require('request')
// const URLRM = 'https://rickandmortyapi.com/api/'

const getChapter = () => {

    const URLE = 'https://rickandmortyapi.com/api/episode/'

    request.get(URLE, (error, response, body) => {

        response.statusCode === 200
        const json = JSON.parse(body)
        const episode = []

        if (response.statusCode === 200) {
            for (let i = 0; i < json.results.length; i++) {
                episode.push(json.results[i])
            }
            console.log(episode)
        } else {
            console.log('Error')
        }
    })
}
getChapter()
app.get("/all/products", (req, res) => {
    getChapter.find().exec().then(products => res.send(products)).catch(err => res.status(409).send(err))
});
const getStatus = () => {

    const URLE = 'https://rickandmortyapi.com/api/character/'

    request.get(URLE, (error, response, body) => {

        response.statusCode === 200
        const json = JSON.parse(body)
        const Results = []

        if (response.statusCode === 200) {
            for (let i = 0; i < json.results.length; i++) {

                Results.push(json.results[i].status)
            }

            console.log('Eston son los status: ' + Results)
        } else {
            console.log('Error')
        }
    })
}

getStatus()
app.get("/status", (req, res) => {
    getStatus.find().exec().then(products => res.send(products)).catch(err => res.status(409).send(err))
});
const getSpicie = () => {

    const URLE = 'https://rickandmortyapi.com/api/character/'

    request.get(URLE, (error, response, body) => {

        response.statusCode === 200
        const json = JSON.parse(body)
        const Specie = []

        if (response.statusCode === 200) {
            for (let i = 0; i < json.results.length; i++) {
                Specie.push(json.results[i].species)
            }
            console.log('Eston son los especies: ' + Specie)
        } else {
            console.log('Error')
        }
    })
}
getSpicie()
app.get("/Spicie", (req, res) => {
    getSpicie.find().exec().then(products => res.send(products)).catch(err => res.status(409).send(err))
});
const getURLE = () => {

    const URLE = 'https://rickandmortyapi.com/api/character/'

    request.get(URLE, (error, response, body) => {

        response.statusCode === 200
        const json = JSON.parse(body)
        const CharURLE = []

        if (response.statusCode === 200) {
            for (let i = 0; i < json.results.length; i++) {
                CharURLE.push(json.results[i].url)
            }

            console.log('Eston son las url: ' + CharURLE)
        } else {
            console.log('Error')
        }
    })
}
getURLE()
app.get("/url", (req, res) => {
    getURLE.find().exec().then(products => res.send(products)).catch(err => res.status(409).send(err))
});
const getID = () => {

    const URLE = 'https://rickandmortyapi.com/api/episode/'

    request.get(URLE, (error, response, body) => {

        response.statusCode === 200
        const json = JSON.parse(body)
        const IDs = []

        if (response.statusCode === 200) {
            for (let i = 0; i < json.results.length; i++) {
                IDs.push(json.results[i].id)
            }
            console.log('Eston son los IDS: ' + IDs)
        } else {
            console.log('Error')
        }
    })
}
getID()
app.get("/id", (req, res) => {
    getID.find().exec().then(products => res.send(products)).catch(err => res.status(409).send(err))
});

const getName = () => {

    const URLE = 'https://rickandmortyapi.com/api/episode/'

    request.get(URLE, (error, response, body) => {

        response.statusCode === 200
        const json = JSON.parse(body)
        const names = []

        if (response.statusCode === 200) {
            for (let i = 0; i < json.results.length; i++) {
                names.push(json.results[i].name)
            }
            console.log('Eston son los episodios: ' + names)
        } else {
            console.log('Error')
        }
    })
}
getName()
app.get("/name", (req, res) => {
    getName.find().exec().then(products => res.send(products)).catch(err => res.status(409).send(err))
});

const getDate = () => {

    const URLE = 'https://rickandmortyapi.com/api/episode/'

    request.get(URLE, (error, response, body) => {

        response.statusCode === 200
        const json = JSON.parse(body)
        const date = []

        if (response.statusCode === 200) {
            for (let i = 0; i < json.results.length; i++) {
                date.push(json.results[i].air_date)
            }
            console.log('Eston son las fechas de publicación: ' + date)
        } else {
            console.log('Error')
        }
    })
}
getDate()

app.get("/date", (req, res) => {
    getDate.find().exec().then(products => res.send(products)).catch(err => res.status(409).send(err))
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en ${PORT}`)
});