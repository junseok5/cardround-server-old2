import cors from "cors"
import express, { Express } from "express"
import helmet from "helmet"
import logger from "morgan"

class App {
    public app: Express = express()

    constructor() {
        this.runMiddlewares()
    }

    private runMiddlewares = () => {
        this.app.use(cors())
        this.app.use(logger("dev"))
        this.app.use(helmet())
        console.log("middleware running")
    }
}

export default App
