import { Link, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Gab from "./GAB/Gab";
import logo from "./logo.png";

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
      <a class="navbar-brand" href="#">
    <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
    Ensas Bank
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
            <li class="nav-item">
                <a class="nav-link" >Home</a>
            </li>
            <li class="nav-item">
                <Link to="/gab" class="nav-link"  >GAB</Link>
            </li>
            <li class="nav-item">
                <a class="nav-link" >Products</a>
            </li>
        </ul>
        <ul class="navbar">

            <div class="dropdown">
                <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    [Username]
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a class="dropdown-item" href="#">Login</a></li>
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                    <li><a class="dropdown-item" href="#">Profil</a></li>
                </ul>
            </div>
        </ul>
    </div>

</nav>
      <Routes>
          <Route path="gab" element={<Gab/>}/>
      </Routes>
    </div>
  )
}

export default App;
