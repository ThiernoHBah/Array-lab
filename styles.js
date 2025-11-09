// this is my array assignmentcon
const shoppingList =[];  //created empty array
function addItem(items){
    shoppingList.push(items)
}
function removeLastItem(items){
    shoppingList.pop(items)
}
function displayList(items){
    console.log("shoppingList:");
    for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
  }
}
/// task 2
function filterItems(searchTerm) {
  return shoppingList.filter(item =>
    item.includes(searchTerm)
  );
}