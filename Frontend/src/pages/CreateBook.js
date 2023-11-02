import React, { useState } from "react";
import Layout from '../components/layouts/layout'
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CreateBook = () => {

    const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
const navigate=useNavigate();
       //handle Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/books/create-book`, {
        title,
        author,
        summary,
      });
      if (data?.success) {
        toast.success("Book is created");
        navigate("/");
        
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("somthing went wrong in input form");
    }
  };
  return (
    <>
    <Layout>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control"  value={title}
    onChange={(e) => setTitle(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
    <input type="text" value={author}
    onChange={(e) => setAuthor(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Summary</label>
    <input type="text" value={summary}
    onChange={(e) => setSummary(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

    
    </Layout></>
    
    
   
  )
}

export default CreateBook