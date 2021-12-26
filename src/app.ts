import express from "express"
import cors from "cors"
import moongose from "mongoose"

class App {
    public express: express.Application

    constructor() {
        this.express = express()

        this.middlewares()
        //this.database()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database(): void {
        moongose.connect(`mongodb://localhost:${process.env.MONGODB_PORT}/tsnode`, {})
    }

    private routes(): void {
        this.express.get("/", (req, res) => {
            return res.send("To hell and back")
        }) 
    }
}

export default new App().express