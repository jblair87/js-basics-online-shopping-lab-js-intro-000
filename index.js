var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = createCartItem(item)
  getCart().push(item)
  return '${item.itemName} has been added to your cart'
}

function viewCart() {
 return getCart().length === 0 ? "Your shopping cart is empty." : createCartDescription
}

function total() {
  var sum = sumUpPrices()
  return sum
}

function removeFromCart(item) {
  var itemToRemove = searchCartForItem(item);
  return itemToRemove ? removeItemFromCart(itemToRemove) : noItemToRemove() }

function placeOrder(cardNumber) {
  if (arguments[0] === undefined)
  {return "Sorry we do not have a credit card on file for you."}
  else {
    var sumToCharge = total() 
    set cart ([])
    return 'Your total cost is $${sumToCharge}, which will be charged to the card ${cardNumber}';
  }
}

function createCartItem(itemName){
  return { itemName : itemName,
  itemPrice:randomInt(1,100)}}
  
  function randomInt(min,max){
  return Math.floor(Math.random() * (max-min + 1)) + min;
  }