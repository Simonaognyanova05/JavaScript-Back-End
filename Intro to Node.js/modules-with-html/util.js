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

function addItem(name, contact) {
    const id = nextId();
    data[id] = { name, contact };
}
function getItems(){
    return Object
    .entries(data)
    .map(([id, item]) => Object.assign({}, item, { id }));
}
function nextId(){
    return 'xxxxxxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
} 

const data = {
    '234774d4': {
        name: "Test",
        contact: "1234"
    },
    '4dff5f6e': {
        name: "Test1",
        contact: "123422222"
    },
};
module.exports = {
    layout,
    addItem,
    getItems, 
};