Introduction to jQuery
=================

jQuery is a JavaScript library. To use jQuery, your HTML page must load the library, which is a JavaScript file. It can be downloaded [here](http://jquery.com/).

The only HTML file you'll be using here is **start.html** -- open it in the text editor and in the browser.

The starter script file **start.js** (in the **scripts** folder) contains only the code we use to wrap our jQuery. We need to write our functions, etc., inside this wrapper so that none of the jQuery is executed until _after_ everything in the HTML file has finished loading.

## First

1. Open the file **start.js** (in the **scripts** folder) and SAVE AS **first.js** (we'll be making three different versions)
2. In the HTML file, just above the `</head>` tag, type the first `<script>` tag: `<script src="scripts/jquery.min.js"></script>`  
3. Below that, type the second `<script>` tag: `<script src="scripts/first.js"></script>` (it must come _after_ the jQuery script tag)
3. We need something to click so we can post a comment! In the HTML, below the `textarea` tag and above `</div>`, add a button: `<button>Post</button>`
4. Save and reload, then test the button by clicking it (nothing happens)
5. In the JS file, inside the dotted lines, type: `$("button").click(function(e) {`
6. That's the beginning of an "anonymous function," so called because it is a function that has no name. To close the function, press Enter/Return a few times and then type: `});`
7. Whatever commands we list in between will be executed when the button is clicked. Add this within the function: `alert("Hello, world!");` (that should look familiar to you)
8. Save, reload, and test the button.

**Note:** The `$` is a shorthand for `jQuery` -- it needs the **jquery.min.js** file. If that file is missing, no `$` commands will work.

**Caution:** If there were more than one `<button>` in the HTML, the same thing would happen no matter which one you clicked. With more than one, you would need to differentiate them somehow (e.g. with a CSS class or ID), unless you _wanted_ both to do the same thing.

## Second

Save the JS file with a new filename (I recommend **second.js**) and change the second script tag in the HTML to match. Save both files.

Change the instruction inside the anonymous function to this:

```
$(".comments").append("<p>This is the newest comment.</p>");
```

Save, reload, and test the button. 

Do it again. And again.

Reload the page in the browser again. What happens? Test the button again.

## Some jQuery things you will use a lot

The following jQuery methods are very commonly used:

* `.append()` -- at end, inside the element (in your current HTML file, that element is the DIV with the class `comments`)
* `.prepend()` -- at top, inside the element
* `.before()` -- at top, outside the element
* `.after()` -- at end, outside the element

The pattern for each of these is the same as the pattern you just used, under the heading "Second," above. Where you see the word `append`, you can use `prepend` or one of the others instead.

You could test each one of these in your **second.js** file to learn how they work.

## Third

Save the JS file with a new filename (I recommend **third.js**) and change the second script tag in the HTML to match. 

**Delete all the paragraphs inside the DIV** with the class `comments` -- they were only placeholders, and you don't need them anymore.

Save both files.

In the JS file, change the single-line instruction inside the anonymous function to this (five lines):

```
    var new_comment = "<p>";
    var comment_text = $("textarea").val();
    new_comment += comment_text;
    new_comment += "</p>";
    $(".comments").append(new_comment);
```

Save, reload, and test the button. This time, you should type something new inside the `textarea` field before you click the button. Do it several times.

Reload the page in the browser again. What happens? Test the button again.

What happens if you click the button when the `textarea` field is empty? Let's fix that by adding an _if statement_:

```
if ($("textarea").val() == "") {
	alert("No comment was written.");
} else {
    var new_comment = "<p>";
    var comment_text = $("textarea").val();
    new_comment += comment_text;
    new_comment += "</p>";
    $(".comments").append(new_comment);
}
```

The _if statement_ checks to see whether any text is in the `textarea` field -- if not, it pops up an Alert dialog.

After a comment is posted, we should empty the `textarea` field. Can you figure out how to add that instruction now? And _when_ should it happen? 

It is this (maybe not exactly what you expected):

```
$("textarea").val("");
```

Be sure to add it at the bottom, but stil _inside_ the _if statement_ -- above the closing curly brace.

## Conclusion

You've now used jQuery to find several elements in the DOM:

* `<button>`
* `<textarea>`
* `class="comments"`

You've used jQuery to write new text (and new HTML) into the document without reloading the page.

You've learned how to do several of the things jQuery is most often used for: Receive input from a user and then use the data that were received to change something in the Web page. 
