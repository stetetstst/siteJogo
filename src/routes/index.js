const express = require('express')
const router = express.Router()

const home = require('../controllers/home')
const cheats = require('../controllers/cheats')
const constru = require('../controllers/constru')
const contato = require('../controllers/contato')
const sobre = require('../controllers/sobre')

router.get('/', home.home)
router.get('/cheats', cheats.cheats)
router.get('/constru', constru.constru)
router.get('/contato', contato.contato)
router.get('/sobre', sobre.sobre)

module.exports = router