function updatePage(req, res){
    const carId = req.params.carId;
    res.send(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/content/style.css">
    <title>Cars | Create page</title>
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
        <h1>Update page</h1>
        <p>This is update page</p>
    </section>

    <section class="create-form">
        <form class="row g-3" action="/update/${carId}" method="POST">
            <div class="col-md-6">
                <label for="newbrand" class="form-label">New brand</label>
                <input type="text" class="form-control" id="newbrand" name="newbrand">
            </div>
            <div class="col-md-6">
                <label for="newmodel" class="form-label">New model</label>
                <input type="text" class="form-control" id="newmodel" name="newmodel">
            </div>
            <div class="col-md-6">
                <label for="newyear" class="form-label">New year</label>
                <input type="text" class="form-control" id="newyear" name="newyear">
            </div>
            <div class="col-md-6">
                <label for="newprice" class="form-label">New price</label>
                <input type="text" class="form-control" id="newprice" name="newprice">
            </div>
            <div class="col-md-6">
                <label for="newimg" class="form-label">New image</label>
                <input type="text" class="form-control" id="newimg" name="newimg">
            </div>
            <div class="col-12">
                <input type="submit" class="btn btn-primary" value="Update">
            </div>
        </form>
    </section>

    <footer>
        <p>Copyright 2023 Created By Simona Ognyanova</p>
    </footer>
</body>

</html>
    `)
}

module.exports = {updatePage}