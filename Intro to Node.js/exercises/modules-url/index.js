const url = new URL('/home?page=5', 'http://localhost:3030');

console.log(url.searchParams.get('page'));
console.log(url.pathname);