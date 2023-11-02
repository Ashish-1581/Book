
import Layout from '../components/layouts/layout'
import axios from "axios";
import toast from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
    const [books, setBooks] = useState([]);



     //getall products
  const getBooks = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/books/get-books`);
      setBooks(data.books);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

    //delete category
    const handleDelete = async (pId) => {
        try {
          const { data } = await axios.delete(
            `${process.env.REACT_APP_API}/api/v1/books/delete-book/${pId}`
          );
          if (data.success) {
            toast.success(`category is deleted`);
    
            getBooks();
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          toast.error("Somtihing went wrong");
        }
      };

   //lifecycle method
   useEffect(() => {
    getBooks();
  }, []);


  return (

    <Layout>
    <div className='container'>
    <h1 className="text-center">All Books List</h1>
        <div className="col-md-12 ">
          
          <div className="d-flex flex-wrap">
            {books?.map((p) => (
          
                <div className="card m-2" style={{ width: "18rem" }}>
                 <div key={p._id}>
                 <div className="btn-group">
                 <button
                            className="btn btn-danger ms-2"
                            onClick={() => {
                              handleDelete(p._id);
                            }}
                          >
                            Delete
                          </button>
                          <Link to={`/update-book/${p._id}`}>

                          <button  
                            className="btn btn-primary ms-2"
                            
                          >
                            Update
                          </button>
                          </Link>

                          


                 </div>
                  <div className="card-body">
                    <h2 className="card-title">{p.title}</h2>
                    <h5 className="card-title">{p.author}</h5>
                    <p className="card-text">{p.summary}</p>
                    </div>
                  </div>
                </div>
            
            ))}
          </div>
        </div>
      </div>
    </Layout>
    
    
  )
}

export default HomePage