async function createPage(req, res){
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cars | Create page</title>
</head>
<body>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/create">Create car</a></li>
        <li><a href="/update">Update car</a></li>
        <li><a href="/delete">Delete car</a></li>
    </ul>
    <h1>Create page</h1>
    <p>This is create page</p>
    <form action="/create" method="POST">

        <label for="brand">Brand: <input type="text" name="brand"></label>
        <label for="model">Model: <input type="text" name="model"></label>
        <label for="year">Year: <input type="text" name="year"></label>
        <label for="price">Price: <input type="text" name="price"></label>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
    `)
}

module.exports = {createPage}