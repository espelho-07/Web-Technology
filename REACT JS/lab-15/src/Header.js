// File: MyFunctionComponent.js
import React from 'react';
import i1 from './i1.jpeg';
import balasir from './balasir.jpg';

function Header() {
  return (<>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Darshan University</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div>
  <center>
    <h1>Darshan Faculty</h1>
  </center>
</div>
<br></br>
<br></br>
<br></br>
<div class="row">
  <div class="card col-6" style={{width: "18rem"}}>
  <img src={balasir} class="card-img-top" alt="..."/>
  <div class="card-body">
    <center><h5 class="card-title">Arjun Bala</h5></center>
    <br></br>
    <center class="card-text">---DESI TAMNCHO---</center>
    <br></br>
    <center><a href="#" class="btn btn-primary">Want To Know More</a></center>
  </div>
  </div>
  <div class="card col-6" style={{width: "18rem"}}>
  <img src={balasir} class="card-img-top" alt="..."/>
  <div class="card-body">
    <center><h5 class="card-title">Arjun Bala</h5></center>
    <br></br>
    <center class="card-text">---DESI TAMNCHO---</center>
    <br></br>
    <center><a href="#" class="btn btn-primary">Want To Know More</a></center>
</div>
</div>
</div>

  </>);
}

export default Header;