fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];
function getIndexFromName(x){
     const index = fruits.indexOf(x)
     	if (index === -1)
      return null
        return index
 }
const x="Banana"
displayResult(getIndexFromName(x));
