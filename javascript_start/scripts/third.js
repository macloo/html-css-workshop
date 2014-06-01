// capture input from the users with the confirm dialog:
// was OK clicked? If so, userInput = 1
// was Cancel clicked? If so, userInput = 0
// The alert text reflects which one was clicked 


var msg = "Winter is coming!";

// this will open a confirm dialog box
function confirmIt() {
	var userInput = confirm(msg);
	if (userInput == 1) {
		alert("OK? You're not worried about the winter?");
	} else {
		alert("I wish we could cancel winter.");
	}
}

// this will open an alert dialog box
function alertThem() {
	alert(msg);
}

// this will open a prompt dialog box
function promptThem() {
	var userResponse = prompt(msg);
}
