import React, { useEffect, useState } from "react";
import Layout from '../components/layouts/layout'
import toast from "react-hot-toast";
import axios from "axios";
import {  useNavigate, useParams } from "react-router-dom";




const UpdateBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [summary, setSummary] = useState("");
  const {id} = useParams();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/api/v1/books/get-book/${id}`)
        .then((res) => {
            setTitle(res.data.books.title);
            setAuthor(res.data.books.author);
            setSummary(res.data.books.summary);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    const navigate=useNavigate();

     //update category
  const HandleUpdate = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/books/update-book/${id}`,
        {  title,
            author,
            summary, }
      );
      if (data?.success) {
        toast.success(`${title} is updated`);
        navigate("/");
       
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
    <Layout>
    <div className='container'>
    <form onSubmit={HandleUpdate}>
    
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
  
  <button type="submit" className="btn btn-primary">Update</button>
</form>
</div>

    
    </Layout>
    </>
  )
}

export default UpdateBook