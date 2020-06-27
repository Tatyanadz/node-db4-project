const express = require("require")
const helmet = require("helmet")

const recipeRouter = require("./schemes/scheme-router")
const server = express()
const port = process.env.PORT || 3500

server.use(helmet())
server.use(express.json())

server.use("/recipes", recipeRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Error"
    })
})


server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})

