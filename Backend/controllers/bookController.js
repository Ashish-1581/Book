import bookModel from "../models/bookModel.js";

//create book
export const createBookController = async (req, res) => {
    try {
      const { title,author,summary } = req.body;
      if (!title) {
        return res.status(401).send({ message: "Title is required" });
      }
      if (!author) {
        return res.status(401).send({ message: "author is required" });
      }
      if (!summary) {
        return res.status(401).send({ message: "Summary is required" });
      }
      
     
      const books = await new bookModel({
        title,
        author,
        summary,
        
      }).save();
      res.status(201).send({
        success: true,
        message: "new book added",
        books,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Errro in adding new book",
      });
    }
  };


  //update book details
export const updateBookController = async (req, res) => {
  try {
    const { title,author,summary } = req.body;
    const { id } = req.params;
    const books = await bookModel.findByIdAndUpdate(
      id,
      { title,author,summary },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "book details Updated Successfully",
      books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating book details",
    });
  }
};

// get all books
export const booksController = async (req, res) => {
  try {
    const books = await bookModel.find({});
    res.status(200).send({
      success: true,
      message: "All books List",
      books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all books",
    });
  }
};

//get single book
export const getBookController = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await bookModel.findById(id);
    res.status(200).send({
      success: true,
      message: "Single book",
      books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single book",
    });
  }
};

//delete book
export const deleteBookController = async (req, res) => {
  try {
    const { id } = req.params;
    await bookModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Book Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting category",
      error,
    });
  }
};