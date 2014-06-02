$(document).ready(function (){  // do not delete 
// ----------------------------------------------------------------------------



// a new function, which is then used by two subsequent functions

var addComment = function() {
	if ($("textarea").val() == "") {
		alert("No comment was written.");
	} else {
		var new_comment = "<p>";
		var comment_text = $("textarea").val();
		new_comment += comment_text;
		new_comment += "</p>";
		$(".comments").append(new_comment);
		$("textarea").val("");
	}
};

$("button").click(function() {
	addComment();
});

$("textarea").on("keypress", function(e) { 
	if (e.keyCode === 13) {
		e.preventDefault();
		e.returnValue = false; // for IE 
		addComment();
	}
});


// ----------------------------------------------------------------------------
}); // do not delete; this closes (document).ready function 
