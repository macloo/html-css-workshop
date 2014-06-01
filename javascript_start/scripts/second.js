// how variables are used to insert information into a function
// (the info can be text or numbers) 


// msg is the name of a new variable (the name could be anything)
var msg = "Winter is coming!";

// this will open a confirm dialog box
function confirmIt() {
	var userInput = confirm(msg);
}

// this will open an alert dialog box
function alertThem() {
	alert(msg);
}

// this will open a prompt dialog box
function promptThem() {
	var userResponse = prompt(msg);
}
