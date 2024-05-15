import "./App.css";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Home from "./screens/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login.js";
import Signup from "./screens/Signup.js";
import { CartProvider } from "./components/ContextReducer.js";
import MyOrder from "./screens/MyOrder.js";

import React from "react";

// import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

function App() {
  let mybutton;

  window.onscroll = function () {
    mybutton = document.getElementById("btn-back-to-top");
    scrollFunction(mybutton);
  };

  function scrollFunction(mybutton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/myorder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>

      {/* //<MDBContainer fluid> */}
        <button
          onClick={backToTop}
          id="btn-back-to-top"
          style={{
            position: "fixed",
            bottom: "50px",
            right: "20px",
            display: "none",
            backgroundColor: "red", // Set your desired background color
            color: "#fff", // Set your desired text color
            border: "none",
            fontSize: "16px", // Set your desired font size
            padding: "10px", // Set your desired padding
            borderRadius: "100px", // To make it circular, adjust as needed
            cursor: "pointer",
            outline: "none", // Remove default focus outline
          }}
          className="btn-floating"
          size="lg"
        >
          {/* <img src="%PUBLIC_URL%/up-32.ico" alt="..." /> */}
          {" Back to Top"}
        </button>
    </CartProvider>
  );
}

export default App;