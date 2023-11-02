import express from "express";

import {
  
  createBookController,updateBookController,booksController,deleteBookController, getBookController
 
} from "../controllers/bookController.js";

const router = express.Router();

//routes

// create book
router.post(
  "/create-book",
  
  createBookController
);

//update book-details
router.put(
  "/update-book/:id",
  
  updateBookController
);

//getALL books
router.get("/get-books", booksController);

//get single book
 router.get("/get-book/:id", getBookController);


//delete book
router.delete(
  "/delete-book/:id",
  
  deleteBookController
);

export default router;
