console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
//function that add items in array and returns true

function addItem(item){
   basket.push(item);
   return true;
}
addItem("mangoes");
addItem("potatoes");
addItem("oranges");
console.log(`Basket is ${basket}`);


// function that loops through the array and returns single item in an array
  function listItems(basket){
    for( let i = 0; i < basket.length; i++){
        console.log(basket[i]) ;
    }
}

//function that checks if the value passed is an array

    function empty() {
      (Array.isArray(basket)) 
       basket.length = 0;
    return basket;
  
}

console.log(empty)

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
