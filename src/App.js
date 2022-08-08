import axios from "axios";
import React, { useEffect, useState } from "react"
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Bbsdetail from "./Components/bbsdetail";
import Bbslist from "./Components/bbslist";
import Bbsupdate from "./Components/bbsupdate";
import Bbswrite from "./Components/bbswrite";
import Login from "./Components/login";
import Register from "./Components/register";

import './main.css';

function App() {

  var loginId = sessionStorage.getItem("loginId");

  const [checkLogin, setCheckLogin] = useState(false);

  const logout = async () => {
    
    await axios.get("http://localhost:3000/logout")
                .then(function(resp) {

                  sessionStorage.removeItem("loginId");

                  setCheckLogin(false);
                })
                .catch(function(error) {
                  console.log(error);
                })
  }

  useEffect( () => {
    if(loginId != null) {
      setCheckLogin(true);
    }
  },[])

  return (
    <div>
      <BrowserRouter>
      <header className="py-4">
        <div className="container text-center">
          <img alt="" src="header.jpg" width='960' height='150' />
        </div>
      </header>

      
      <nav className="navbar navbar-expand-md navbar-dark bg-info sticky-top">
          <div className="container">

            <div className="collapse navbar-collapse" id="navbar-content">
              <ul className="navbar-nav mr-auto">

                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>

                <li className="nav-item dropdown">
                  <div className="nav-link dropdown-toggle" id="navbarDropdown" 
                        role="button" data-toggle="dropdown" aria-haspopup="true" 
                        aria-expanded="false">게시판
                  </div>

                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/bbslist">글목록</Link>
                    <Link className="dropdown-item" to="/bbswrite">글추가</Link>
                  </div>
                </li>

                <li>
                  <Link className="nav-link" to="/bbslist">자료실</Link>
                </li>

                <li>
                  {checkLogin === false ?
                    <Link className="nav-link" to="/login">로그인</Link> : <Link className="nav-link" onClick={ () => {logout()}} to="/">로그아웃</Link>}
                </li>

                <li>
                  <Link className="nav-link" to="/register">회원가입</Link>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <div className="py-4 mb-5">
            <div className="container">

              <Routes>

                <Route path="/" element={<Home />}></Route>

                <Route path="/bbslist" element={<Bbslist />}></Route>

                <Route path="/bbswrite" element={<Bbswrite />}></Route>

                <Route path="/bbsdetail/:seq" element={<Bbsdetail />}></Route>

                <Route path="/bbsupdate" element={<Bbsupdate />}></Route>

                <Route path="/register" element={<Register />}></Route>

                <Route path="/login" element={<Login setCheckLogin={setCheckLogin} />}></Route>

              </Routes>

            </div>
          </div>
        </main>

      </BrowserRouter>

      <footer className="py-4 bg-info text-light">
        <div className="container text-center wrap">
          <ul className="nav justify-content-center mb-3">
            <li className="nav-item">
              <a className="nav-link" href="/">Top</a>
            </li>
          </ul>

          <p>
            <small>Copyright &copy;Graphic Arts</small>
          </p>
        </div>
      </footer>


    </div>
  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <br />

      <div id="wrap">
        <Link className="btn btn-primary" to="/bbslist">글 목록</Link>
        <br />
        <br />
        <Link className="btn btn-primary" to="/bbswrite">글쓰기</Link>
      </div>
    </div>
  )
}


export default App;
