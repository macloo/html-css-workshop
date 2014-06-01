Introduction to JavaScript
==========================

The point of this collection is to introduce you to these common elements of scripts:

* functions
* variables
* if-else statements

You'll also see how the user's actions on a Web page can be recorded and then used by the script.

You can view the file and try the four scripts > [here](http://macloo.github.io/html-css-workshop/javascript_start/)

## First

1. Open **start.html** and (in the **scripts** folder) **first.js**
2. In the HTML, recognize the similarities of the code within the three A tags
3. The differences in the three A tags are the names of _functions_:
     1. `alertThem();`
     1. `confirmIt();`
     1. `promptThem();`
4. In the JS file, notice that the same three terms can be found: In the JS file, the functions are written out in full 
5. Open the HTML file in a Web browser and click the word _Alert_; notice what happens and what the text in the dialog box says; compare that text to what is written in the function _alertThem()_ in the JS file **first.js** 
6. Do the same with the word _Confirm_ on the page in the browser; notice how the dialog box is different; compare that text to what is written in the function _ConfirmIt()_ in the JS file **first.js** 
7. Each of these is a _method_ in JavaScript -- a built-in command:
    1. `alert()`
    1. `confirm()`
    1. `prompt()`
8. Notice that the built-in commands are used _inside_ the functions, but the function has its own name, which _cannot_ be the same as the name of the built-in command
9. On the page in the browser, click the word _Prompt_; notice how the dialog box is different from the other two; compare that text to what is written in the function _PromptThem()_ in the JS file **first.js** 
10. Looking at the JS file, can you see a similarity between each function and something you are familiar with from writing CSS? 

## Second

1. From the **scripts** folder, open the file **second.js** (keep everything else open too)
2. Compare **first.js** and **second.js** until you figure out what is different 
3. Now edit the HTML in **start.html** so that it will _load_ the JavaScript in **second.js**  instead of  **first.js** (Hint: there's a tag in the HEAD)
4. Save, reload, and click each of the three links in the HTML page -- take time to _read_ the contents of each dialog box 
5. Look at each _function_ in **second.js** and figure out the role of `msg` (discuss)
6. A _variable_ is a container; it has a _name_ and a _value_
    1. In **second.js** we have a variable with the _name_ `msg` and the value "Winter is coming!"
    1. The variable is set up on line 6 with an = sign
    1. The variable is used three times, once in each function
7. Test your understanding: In line 6, _change_ the text in quotation marks; save and reload the page; click each of the three links in the HTML page and read the contents of each dialog box 

## Third

1. From the **scripts** folder, open the file **third.js** (keep everything else open too)
2. Look at the changes in **third.js** (they affect only the first function) -- five lines have been added
3. This is called an _if statement_: It is used to test for conditions and then respond in different ways, depending on which condition is found 
4. In the browser, click the word _Confirm_ to remind yourself of what we can do in that dialog box
5. In **third.js**, in the function `confirmIt();`, the 1 represents "OK" -- when you click "OK," the number 1 is _returned_
6. (Look at the HTML: the word _return_ is inside the A tag -- this is an instruction that JavaScript follows)
7.  Read the five lines of the _if statement_ and figure out what they do 
8.  Now edit the HTML in **start.html** so that it will _load_ the JavaScript in **third.js**  instead of  **second.js** (Hint: there's a tag in the HEAD)
9.  Save, reload, and test your assumptions by clicking _Confirm_ and answering with "OK" and then with "Cancel"
10.  Look at **third.js** again: What is this line doing? `var userInput = confirm(msg);` 
11.  What is `userInput`? How does it get its _value_?
12.  In **third.js**, change the text inside quotes in lines 7, 13, and 15 to text that amuses you
13.  Save, reload, and test by clicking _Confirm_ and answering with "OK" and then with "Cancel"

## Fourth

1. From the **scripts** folder, open the file **fourth.js** (keep everything else open too)
2. Look at the changes in **fourth.js** (they affect only the function `promptThem()`) -- eight lines have been added there
3. This is another _if statement_: But this one lets us test _more than two_ conditions because of `else if`
    1. An _if statement_ always starts with `if ()`
    1. When an _if statement_ includes `else ()` it will always be the final part
    1. In between `if ()` and `else ()`, an _if statement_ may have as many `else if ()` conditions as needed -- there's no limit
4. Now we will go through the _if statement_ line by line:
    1. `if (userResponse == null)` tests to see if the user has clicked "Cancel"
    1. `alert(msg);` -- this happens if the previous line is true
    1. `else if (userResponse == 0)` tests to see whether the user has clicked "OK" without typing anything in the box 
    1. `alert("Huh?");` -- this happens if the previous line is true
    1. `} else {` -- if the program reaches this line, then none of the above were true
    1. `msg = userResponse;` -- the _value_ of `msg` becomes whatever the user has typed (and stays that way until the page is reloaded!)
    1. `alert("You wrote: " + msg);` -- a new alert dialog opens with the text "You wrote: " followed by the text the user has typed
5. Edit the HTML in **start.html** so that it will _load_ the JavaScript in **fourth.js**  instead of  **third.js** (Hint: there's a tag in the HEAD)
6. Save, reload, and test the _Prompt_ link several times until you understand everything about the new  _if statement_
7. **Add your own** `else if ()` -- insert a new condition that tests for something specific that was typed -- save, reload, and test 

**Example:** 
```
} else if (userResponse == "figs") { 
    alert("I don't see any figs here!")
```

**If you are brand-new to writing JavaScript code,** you should play around with the script and the three kinds of dialog boxes until you understand all of it. "Playing" means you try new things and write new functions, or modify existing functions, and try them out in the browser. 
