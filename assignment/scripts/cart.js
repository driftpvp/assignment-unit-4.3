console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []
const maxItems = 5;
/**
 * 
 * @param {string} item item to add to array
 */
function addItem(item){
basket.push(item)
return true
function isFull(){
    if (addItem < maxItems){
    return true
    }
    if (addItem === maxItems){
    return false
    }
}
}
addItem("pears");
addItem("apples");
addItem("bananas");
console.log(`'Basket is ${basket}"`);

function listItems(){
    for (element of basket){
        console.log(element);
    }
    return basket
}
console.log(listItems(basket));

function empty(){
basket = []
return basket
}
console.log(empty(basket));
console.log(`Basket is now ${basket}"`);

function full(){
    while (basket.length < maxItems){
    return false}
    if (basket.length === maxItems){
    return true
    }  
}















// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
