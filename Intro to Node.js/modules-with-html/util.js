function layout(body, title = 'Hello'){
    return `
<!DOCTYPE html>
<html lang="en">
<head>
<title>${title}</title>
</head>
<body>
<nav>
   <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>

   </ul>
   </nav>
    ${body}
</body>
</html>
    `
}

const data = [
    {
        name: "Test",
        contact: "1234"
    },
    {
        name: "Test1",
        contact: "123422222"
    },
];
module.exports = {
    layout,
    data
};