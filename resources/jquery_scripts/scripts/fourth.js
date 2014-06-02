$(document).ready(function (){  // do not delete 
// ----------------------------------------------------------------------------



// add a new function to post comment if you press Enter/Return

$("button").click(function() {
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
});


$("textarea").on("keypress", function(e) { 
	if (e.keyCode === 13) {
		e.preventDefault(); // prevent linespace
		e.returnValue = false; // for IE 
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
	}
});


// ----------------------------------------------------------------------------
}); // do not delete; this closes (document).ready function 
