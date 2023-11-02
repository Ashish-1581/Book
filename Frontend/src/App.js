
import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import CreateBook from './pages/CreateBook';
import UpdateBook from './pages/UpdateBook';

function App() {
  return (
    <>
   <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/create-book" element={<CreateBook />} />
   <Route path="/update-book/:id" element={<UpdateBook />} />

   
   </Routes>
    
    </>
  );
}

export default App;
