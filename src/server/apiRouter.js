import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({msg: "It works"})
})

router.all('/*', (req, res) => {
    res.status(404).send({msg: "Not found"})
})

export default router