const url = new URL('/catalog?page=4', 'http://localhost:3000');

console.log(url.pathname);
console.log(url.searchParams.get('page'));
