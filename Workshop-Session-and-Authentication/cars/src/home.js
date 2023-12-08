const mongoose = require('mongoose');
const Car = require('../models/Car');

const connectionString = 'mongodb://localhost:27017/cars';

async function homePage(req, res){
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });


    const cars = await Car.find({});
    res.send(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/content/style.css">

    <title>Car | Home page</title>
</head>

<body>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
  <a class="navbar-brand" href="/">The Car's Home</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      ${req.session.user ? ` <li class="nav-item">
      <a class="nav-link" href="/create">Create car</a>
    </li>` : `<li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="/register">Register</a>
</li>`}
      
    </ul>
  </div>
</div>
<p class="rightpos">${req.session.user ? req.session.user.username : ``}</p>

</nav>
    <section class="header">
        <h1>Home page</h1>
    </section>

    <div class="container">
    ${cars.length > 0 ? cars.map(car => `
    <div class="card" style="width: 18rem;">
            <img src=${car.img} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${car.brand}</h5>
              <p class="card-text">${car.model}</p>
              <p class="card-text">${car.year} г.</p>
              <p class="card-text">${car.price} лв.</p>

              <a href="/update/${car._id.toString()}" class="btn btn-primary">Update</a>
              <a href="/delete/${car._id.toString()}" class="btn btn-primary">Delete</a>

            </div>
          </div>
    `) : '<h2 class="anycars">No cars</h2>'}
    </div>

    <footer>
        <p>Copyright 2023 Created By Simona Ognyanova</p>
    </footer>
</body>

</html>
    `)
}

module.exports = {homePage}