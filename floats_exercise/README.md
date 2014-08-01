Floats Exercise
=================

**The goal:** Learn more about the usefulness of CSS floats, and learn a few more CSS properties and how to use them.

##Structure

1. Open animals.html in both browser and text editor. No styles have been applied; the stylesheet is not attached yet. 
2. Examine the HTML and compare it to the page in the browser. Don't change anything.

##Design
1. Attach the stylesheet provided (in the folder **styles**) by adding a LINK tag in the HEAD of the HTML document.
2. Save the HTML file and reload in the browser.
3. Examine the CSS file and look up anything you don't know.

##Floats
1. In the CSS file, delete the single line that says: 	`float: left;` (line 25)
2. Reload page in browser and see the difference.
3. Restore that one line in the CSS.
4. Reload in browser. Now change width of browser by grabbing the right-hand edge and moving it toward the left, making the browser window narrower. Do this until it will not go any farther to the left. Observe the characteristic of the CSS **float** property.

##The Box Model
In some browsers, including Chrome, the "card" box will be wider than we really want it to be.

The photos are 250 pixels wide. The box is 300 pixels wide. The padding on left and right is 25 pixels. This should create a box (the card) that is exactly 25 pixels wider than the photo on the left and the right.

Because different browsers implement the box model (look it up) differently, the card might be wider than you intended.

This can be fixed reliably by adding the following code:

```
* {
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
}
```

This code is already in the stylesheet, but it is commented out. Remove the two comment lines (lines 2 and 8), save and reload. 

If your browser implemented the box model such that padding is *not* added to the total width of the element (in this case, a DIV), you will not see any difference. But the added CSS ensures that all users with all browsers will see what you see.

If your browser previously added the extra width to the "card" DIV, that extra will now be gone, and the space inside the card will be equal on the left and right sides of the photos, in every card.
