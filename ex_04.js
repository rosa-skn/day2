let a=3
let b=5
let action = "sub"

function calculator(){
if (action === "add"){
return addiction()
} else if (action==="sub"){
return substraction()
}

}
function addiction(){
return a+b
}
function substraction(){
return a-b
}



// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
} else {
	console.error("Missing/bad variables or calculator function");
}
