import data from './data.js'
const cartTotal = document.getElementById('cart-total')
const itemList = document.getElementById('item-list')
const cartQty = document.getElementById('cart-qty')
const itemsContainer = document.getElementById('items')
// the length of our data determines how many times this loop goes around
for (let i=0; i<data.length; ++i) {
    // create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // create an image element
    let img = document.createElement('img');
    // console.log(img)
    itemsContainer.appendChild(newDiv)
    // this will change each time we go through the loop. Can you explain why?
    img.src = data[i].image
    img.width = 300
    img.height = 300
  // Add the image to the div
    newDiv.appendChild(img)

    // add paragrpah 
    let desc = document.createElement('p');
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)

    // add price
    let price = document.createElement('p');
    price.innerText = data[i].price
    newDiv.appendChild(price)
    // add button
    let button = document.createElement('button')
    button.id= data[i].name 
    newDiv.appendChild(button)

    // creates a custom attribute called data-price.
    // That will hold the price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
}
const all_items_button = document.querySelectorAll("button")
all_items_button.forEach(elt => elt.addEventListener('click', () => {
  addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
  showItems()
}))


// --------------------

const cart = []


// console.log(obj)
// console.log('***********')

function addItem(name, price) {
  for (let i =0; i < cart.length; i +=1) {
    if (cart[i].name === name) {
        cart[i].qty += 1
        return
        // done 
    }
  }
  const item = {name: name, price: price, qty: 1 }
  cart.push(item)
}


//  --------------------------------
// show item


function showItems() {
  let qty = getQty()
  console.log(qty)
  cartQty.innerHTML = `you have ${cart.length} items in your cart`

 

  // let qty = 0

  for (let i= 0; i < cart.length; i += 1) {
    qty += cart[i].qty 
  }

  // console.log('you have ${cart.length} items in your cart')

  let itemStr = ''

  for (let i=0; i< cart.length; i += 1) {
    //  console.log('${cart[i].name} ${cart[i].price}
    //     *${cart[i].qty} ')

    itemStr += `<li> ${cart[i].name} $${cart[i].price} * ${cart[i].qty } = ${cart[i].qty * cart[i].price } </li>`
}

itemList.innerHTML = itemStr

cartTotal.innerHTML =   `Total in cart:  $${getTotal()}`

let total = 0
for (let i = 0; i < cart.length; i += 1) {
  total += cart[i].price * cart[i].qty
}

// console.log('

}
//  --------------------
// get qty
function getQty() {
  let qty = 0

  for (let i = 0; i< cart.length; i += 1) {
    qty += cart[i].qty
  }
  return qty
}
//  ----------------------
//  get total 

function getTotal() {
  let total = 0 
  for (let i = 0; i< cart.length; i +=1){
    total += cart[i].price * cart[i].qty
  }
   return total.toFixed(2)

}

function removeItem(name, qty = 0) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i],name === name) {
      if (qty > 0) {
        cart[i].qty -=qty

      }
      cart[i].qty -= 1
      if (cart[i].qty < 1 || qty === 0) {
        cart.splice(i, 1)

      }
      cart.splice(i, 1)
      return 
    }

  }

}

//  -----------------------
// test zone

// addItem('app', 0.99)
// addItem('ale, 0.99)
// addItem('apple', 0.99)
// removeItem('ale')
// showItems()











    // // put new div inside items container
    // itemsContainer.appendChild(newDiv)
