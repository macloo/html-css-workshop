// capture text input from the user and use it later 


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
	if (userResponse == null) {
		alert(msg);
	} else if (userResponse == 0) {
		alert("Huh?");
	} else if (userResponse == "fig") {
		alert("Figs are so delicious!");
	} else {
		msg = userResponse;
		alert("You wrote: " + msg); 
	}
}
