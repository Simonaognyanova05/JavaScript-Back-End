var products = [];
var carItems = [];
var cart_n = document.getElementById('cart_n');

var fruitDIV = document.getElementById('fruitDIV');
var juiceDIV = document.getElementById('juiceDIV');
var saladDIV = document.getElementById('saladDIV');

var FRUIT = [
    {name: 'Apple', price: 1},
    {name: 'Orange', price: 1},
    {name: 'Cherry', price: 1},
    {name: 'Strawberry', price: 1},
    {name: 'Kiwi', price: 1},
    {name: 'Banana', price: 1},
];
var JUICE = [
    {name: 'Juice #1', price: 10},
    {name: 'Juice #2', price: 11},
    {name: 'Juice #3', price: 12},
];
var SALAD = [
    {name: 'Salad #1', price: 11},
    {name: 'Salad #2', price: 12},
    {name: 'Salad #3', price: 15},
];

function HTMLfruitProduct(con){
    let URL = `../img/fruit${con}.jpeg`;
    let btn = `btnFruit${con}`;

    return `
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="card-img-top" style="height:16rem;" src="${URL}" alt="Card image Cap">
            <div class="card-body">
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <i style="color:orange;" class="fa fa-star"></i>
                <p class="card-text">${FRUIT[con-1].name}</p>
                <p class="card-text">Price: ${FRUIT[con-1].price}.00</p>
                <div class="d-flex justify-content-between align-items-center">
                    <button type="button" onclick="cart2('${FRUIT[con-1].name}',
                    '${FRUIT[con-1].price}', '${URL}', '${con}', '${btn}')"
                </div>
            </div>
        </div>
    </div>
    `
}