let decBtn = document.querySelector('#quantity-down')
let incBtn = document.querySelector('#quantity-up')

let quantity = 1

function updateQuantity(displayQuantity){
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}

decBtn.addEventListener('click', function(e){
    if (quantity > 0) {
        --quantity
    }
    else {
        window.alert('There is nothing in your cart.')
    }
    updateQuantity(`Quantity: ${quantity}`) //Interpolates the quantity and updates the display Quantity//
})

incBtn.addEventListener('click', function(e){
    ++quantity
    updateQuantity(`Quantity: ${quantity}`)
})
