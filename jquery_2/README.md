jQuery and hiding, showing, fading
==========================

Manipulating images and other elements in the DOM is a common use of jQuery. In these exercises, we'll use some photos and see what can be done with them.

Open the following files in your text editor:

* start.html
* start.css
* start.js

## hide()

Open **start.html** in the browser and compare it to the HTML in the file. Notice in particular the stack of five photos that comes in between two paragraphs.

Add this anonymous function to the file **start.js** -- between the dotted lines:

```
$("img").click(function() {
	$(this).hide();
});
```

The general idea should be familiar from the first jQuery exercises: When we _click_ something -- in this case, any `img` -- something will happen. In this case, something will _hide_. But what? The thing that will hide is _\$(this)_ -- a special keyword in JavaScript that refers to the thing that was acted upon earlier. In this case, _\$(this)_ refers to whichever image was clicked. So, click an image, hide an image.

Save your file and reload the page in the browser. Test your jQuery code by clicking every image on the page.

One small problem: We don't have any way to show the photos again after hiding them.

## show()

Create a new button anywhere in the HTML:

```
<button>Show</button>
```

See if you can write an anonymous function in the JS file that will show images when that button is clicked. The function will have the same pattern as the function you wrote a moment ago.

However, you can't use _\$(this)_ -- and why not? In this case, you want to click the _button_ but hide the _image_.

#fadeOut()

This method adds an effect to the basic `hide()` method. To see it work, edit your JS file. In the one place where you wrote `hide()`, change that to `fadeOut()` -- and do be careful to type an uppercase letter O!

Save, reload, test. 

## Using CSS to format a viewing "window"

We'll use the same HTML page to create a simple slideshow. First, you'll need to style the DIV that has the ID "pics" (this is already in the HTML; it contains the five images).

In the CSS, write:

```
#pics {
	width: 600px;
	height: 450px;
	overflow: hidden;  /* this hides anything that does not fit */
	margin: auto;
	border: 1px solid #666;
}
```

It just so happens that each one of the photos is exactly 600 x 450 pixels, so that keeps this all very simple. The real magic here is because of `overflow: hidden;`, which allows us to hide things inside a DIV.

Save, reload, test the page in the browser.

You can also add a black background color to the DIV.

If you'd like the fadeOut to be a bit more graceful, add `"slow"` in the parentheses:

```
$(this).fadeOut("slow");
```

Save, reload, and test.

## Looping our photos

We should do something to allow us to get rid of that "Show" button. Can we make the first photo reappear after the last photo has faded away?

Yes, we can.

First, set up a counter and a total. Both of these are _variables._ Write them above the functions in your JS file, but stay below the dotted line.

```
var n = 0;
var total = 5
```

If you wanted to add more photos, you could easily change 5 to match your own total number.

Next, we'll add what's referred to as a _callback_ in our first function:

```
$("img").click(function() {
	$(this).fadeOut("slow", function() {

		// more stuff to come ...

	});
});
```

This is somehow horrifying to see, but it works really well. The callback _waits_ until the first action is complete, and only _then_ will the callback happen.

Think about what we want. We must check to see whether we have run out of photos yet. That will require an _if statement._ And we can use our variable named _total_ to check: have we viewed all the photos? That will require counting. Each time a photo is clicked, it must be counted. And we will add 1 to our variable named _n._

That will be next: Write in `n++;` as shown below. This is a handy shorthand that means "change the value of n to the sum of n + 1." Can you see that it will be done _once_ per click? So after you click 5 photos, the value of _n_ will be 5. Think about this until you understand it. The whole function happens once per click!

```
$("img").click(function() {
	$(this).fadeOut("slow", function() {

		// more stuff to come ...

	});
	n++;
});
```

Now add the _if statement_ (in place of the line "// more stuff to come ..."):

```
if (n == total) {
	$("img").show();
	n = 0;
}
```

It tests the value of _n_ -- and _if_ that is 5, then all the images will be shown again, immediately (although four of them are hidden by the DIV), _and_ the value of _n_ will be reset back to 0 so we can click through all the photos forever.

There is no `} else {` in our _if statement_ -- none is needed.

Save, reload, and test.

Now you can delete the "Show" button from the HTML file, and in the JS file, you can delete the function that reacted to a click on the button.
