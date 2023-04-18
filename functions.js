// Create an array containing the names of all items in the inventory maximum of 10.

let groceriesArray=["Carrots","Bananas","Oranges","Pineapples","Zuchini","Tomatoes","Peppers"];

// Create a separate array with the corresponding stock quantities of each item maximum of 10.

let groceriesQuantity=[2,8,5,1,4,3,7];

// Write a function to add a new item to the inventory, updating both arrays.

// const addStock=(grocery,quantity)=>{
// groceriesArray.push(grocery);
// groceriesQuantity.push(quantity);
// }
// console.log(addStock("Kiwi",4));

function addStock(grocery,quantity){
    groceriesArray.push(grocery);
    groceriesQuantity.push(quantity);
}
addStock("kiwi",3);
console.log(groceriesArray);


// Write a function to update the stock quantity of an existing item.

// function updateStock(quantity){
// for(let i=0;i.length)
// }


// Write a function to calculate the total number of items in the inventory

function totalItems(){
    let total = 0;
    for(let i = 0; i<groceriesQuantity.length;i++){
        total += groceriesQuantity[i];
        
    }
    return total;
}
console.log(totalItems());

// Write a function to find the item with the lowest stock quantity.
function lowestQuantity(groceriesQuantity){
    let lowQuantity=0;
    for(let i=0; i<groceriesQuantity;i++){
        if(groceriesQuantity[i]<lowQuantity){
            
        }
        return groceriesQuantity[i];
    }
   
}
console.log(lowestQuantity(groceriesArray));
