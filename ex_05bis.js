function getBasketContent(x) {
    const fruits = ["strawberry", "strawberry", "strawberry", "apple", "apple", "lime", "lime", "peach", "pear", "pear"]
    console.log(x + ' fruit(s)selected');
    if (x > fruits.length) {
        console.log('Too many fruit(s)selected.')
    } fruits.splice(fruits.length-x)
    return fruits;
}
let x = 7

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
		const fruits = getBasketContent(x)
		showMyBasket(fruits)}
