var erase;
// Calculation Process
var totalProduct;
var totalPrice;
function sample(item, price) {
    {
        totalProduct = item;
        totalPrice = (item * price);
    }

}

function btn_click(product) {
    // Element Creation
    var pro_name = document.createElement('div');
    pro_name.setAttribute('class', 'order-item');
    var para_1 = document.createElement('p');
    para_1.setAttribute('id', 'pro-name');
    para_1.innerHTML = product;
    var para_2 = document.createElement('p');
    para_2.setAttribute('id', 'qty-num');
    para_2.innerHTML = 'Quantity ' + totalProduct;
    var para_3 = document.createElement('p');
    para_3.setAttribute('id', 'price-amt');
    para_3.innerHTML = 'Price ' + totalPrice;
    erase = document.createElement('button');
    erase.setAttribute('id', 'remove-btn');
    erase.setAttribute('onclick', 'remove_btn()');
    erase.innerHTML = 'remove';
    //Using appendChild method
    var side = document.getElementById('side-container');
    pro_name.appendChild(para_1);
    pro_name.appendChild(para_2);
    pro_name.appendChild(para_3);
    pro_name.appendChild(erase);
    side.appendChild(pro_name);
}
// Remove button Function
function remove_btn() {
    var orderId = document.querySelector('.order-item');
    orderId.remove();
}
