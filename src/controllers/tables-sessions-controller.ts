import { Request, Response, NextFunction } from "express";

class TablesSessionsController {
  async create(req: Request, res: Response, next: NextFunction){
    try {
      
      return res.status(201).json()
    } catch (error) {
      next(error)
    }
  }
}

export { TablesSessionsController }