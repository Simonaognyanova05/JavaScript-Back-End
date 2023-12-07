async function createPage(req, res){
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
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./create.html">Create car</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./update.html">Update car</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./delete.html">Delete car</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <section class="header">
        <h1>Create page</h1>
        <p>This is create page</p>
    </section>

    <section class="create-form">
        <form class="row g-3" action="/create" method="POST">
            <div class="col-md-6">
                <label for="brand" class="form-label">Brand</label>
                <input type="text" class="form-control" id="brand" name="brand">
            </div>
            <div class="col-md-6">
                <label for="model" class="form-label">Model</label>
                <input type="text" class="form-control" id="model" name="model">
            </div>
            <div class="col-12">
                <label for="year" class="form-label">Year</label>
                <input type="text" class="form-control" id="year" name="year">
            </div>
            <div class="col-12">
                <label for="price" class="form-label">Price</label>
                <input type="text" class="form-control" id="price" name="price">
            </div>
            <div class="col-12">
                <label for="img" class="form-label">Image URL</label>
                <input type="text" class="form-control" id="img" name="img">
            </div>

            <div class="col-12">
                <input type="submit" class="btn btn-primary" value="Submit">
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

module.exports = {createPage}