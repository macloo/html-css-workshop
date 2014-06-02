$(document).ready(function (){  // do not delete 
// ----------------------------------------------------------------------------

 
var n = 0;
var total = 5 // the total number of photos on the page

$("img").click(function() {
	$(this).fadeOut("slow", function() {
		if (n == total) {
			$("img").show(); // this shows ALL of them
			n = 0;
		}
	});
	n++; // adds 1 to n
});



// ----------------------------------------------------------------------------
}); // do not delete; this closes (document).ready function 
