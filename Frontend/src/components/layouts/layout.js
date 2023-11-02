import React from "react";
import Footer from "./footer.js";
import Header from "./header.js";

const Layout = ({ children }) => {
  return (
    <div >
  
      <Header />
      <main style={{ minHeight: "85vh", backgroundColor:"" , }}>
       

        {children}
      </main>
      <Footer />
    </div>
  );
};



export default Layout;
