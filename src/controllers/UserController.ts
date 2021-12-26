import { Request, Response } from "express"

class UserController {
    public async index (req: Request, res: Response): Promise<String> {
        return "Hello Guilherme"
    }
}

export default new UserController()