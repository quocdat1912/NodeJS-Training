import {Request, Response} from "express";

import { BookController } from "../controllers/bookController";


export class Routes {       
    public bookController: BookController = new BookController();
    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })               

        // GET ALL BOOKS
        app.route('/books')
        .get(this.bookController.getBooks)
        .post(this.bookController.addNewBook)
        // GET DETAIL BOOK
        app.route('/books/:bookId')
        .get(this.bookController.getBookWithID)
        .put(this.bookController.updateBook)
        .delete(this.bookController.deleteBook)




    }
}