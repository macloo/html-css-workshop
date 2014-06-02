html-css-workshop
=================

**The goal:** Get a group of students starting from zero to a point where they can use HTML, CSS, and even some JavaScript and jQuery to begin making simple Web apps.

**Time frame:** Six days, average 2.5 hours per day.

## Day 1: HTML

### Introduction

In the GitHub repo, find a starter file in the folder **html_start**

1. Type along with me: http://bit.ly/mmscreencap2 
2. Use of a text editor and a Web browser: Alternate between the two; save and reload
3. Tags and content: Which is which?
4. What tags do (tags in pairs)
5. Heading vs. paragraph (make a paragraph)
6. Levels of headings (6 levels): Try a few
7. Comments (make a comment)
8. Anchors, links (add several links)
9. Lists: UL and OL (add one list of each type)
10. Try this: http://validator.w3.org/ 
11. **Review:** Structure of documents (HTML for structure, not design)

Compare your result to [this page](http://macloo.github.io/html-css-workshop/resources/html/first.html).

### Code the structure

1. Examine an image of a simple home page for a Web app: http://bit.ly/mmscreencap1 
2. Determine what the structure of that page is: On a printout of that image, mark headings (with appropriate levels), paragraphs, and lists
3. Apply HTML: Now code that page! (Use HTML only) 
4. Add an image with `<img>` (you can use any image)
5. Create a new folder for all image files 
6. Hierarchy of folders on your drive (relationship of image file to HTML file determines how you write the IMG SRC attribute value)
7. Use of the `<br>` tag: For addresses and poetry; NOT used to add linespaces

Compare your result to [this page](http://macloo.github.io/html-css-workshop/page_layout/start.html).

## Day 2: CSS

### Introduction

In the GitHub repo, find a starter file in the folder **css_start**

1. Add a LINK tag in the HEAD (to associate a CSS file with this HTML file) 
2. Create a new folder for all CSS files (review hierarchy of folders on your drive)
3. Create a new plain-text .css file with a filename that matches your LINK tag
4. Styling the BODY: background, width, `margin: auto;` 
5. Colors (hexadecimal) -- http://www.colorpicker.com/ 
6. Fonts: font-family, font-size (discuss limitations of available fonts)
7. Comments in CSS
8. Colors: background vs. color properties 
    1. In the CSS, add a color to the h1
    1. In the CSS, add a background to the p 
9. Font size, weight, style, line-height
10. Add padding to p

Compare your result to [this page](http://macloo.github.io/html-css-workshop/resources/applied_css/simple.html).

### Next steps: margin, padding, classes

Save the HTML file and the CSS file with new filenames; edit the LINK tag accordingly.

Copy and paste the paragraph, so you have two identical paragraphs in the HTML.

1. Add `<div>` above the H1 and `</div>` below the second `</p>` -- but before `</body>`
2. Remove all width and margin statements from all elements in the CSS; then save, reload, and view
3. In the CSS, add to DIV: `width: 800px;` and `margin: auto;` -- then save, reload, view
4. In the CSS, add to DIV: `border: 1px solid #000;` and save, reload, view | **Note:** This border is ugly. Its purpose is to allow you to see the effects of margins and padding.
5. What is a DIV? How are DIVs used? 
6. In the CSS, add `margin: 20px;` to the p, then save, reload, view
7. Increase padding on the p, then save, reload, view | **Caution:** Overuse of margin and/or padding on too many elements has multiple effects, make design hard to control. Restraint (minimal use of margin and padding) is the best practice.
8. **Selectors and classes:** When and why do we create a class in CSS?
9. Add a new `.highlight` class in the CSS
10. In the HTML, apply the `highlight` class to one p but not both -- save, reload, view | **Note:** In the CSS, a class begins with a period. In the HTML, no period is used.
11. Add a `<span>` tag to one sentence in the middle of the _other_ paragraph and apply the `highlight` class to it. Save, reload, view
12. Reusability of classes in CSS: We just saw the same class used in both a P and a SPAN

Compare your result to [this page](http://macloo.github.io/html-css-workshop/resources/applied_css/more.html).

### Adding Google Fonts

In the GitHub repo, find and open the folder **font_exercise**

You'll find a README document there for this section.


## Day 3: CSS layouts

### Page areas and layout

[Final product](http://macloo.github.io/html-css-workshop/resources/page_layout/second.html)

In the GitHub repo, find a starter file in the folder **page_layout**

1. Create a **styles** folder and a new CSS file inside it
2. In the HTML, LINK your CSS file
3. Using a printout of this page -- http://bit.ly/mmscreencap1 -- decide what area of the page you would call the footer. Draw a rectangle around that area. Make sure it goes all the way from left to right
4. Do the same with the area of the page you would call the header
5. Finally, the main section of the page (all the headings, text, and image in the middle): Draw a third rectangle around that | **Example:** http://bit.ly/mscreencap2
6. Discuss some HTML5 tags: `<header>` `<footer>` `<nav>` `<article>` `<section>`
7. Apply `<header>` and `<footer>` tags to your HTML now. Follow the rectangles you drew | **Note:** Do not confuse `<head>` (which is on every HTML page since the beginning of time) and `<header>` (which is new and optional) — they have different functions!
8. The middle section: Wrap it in a DIV. Give it an ID: `<div id="main"> </div>` 
9. **Review:** How are DIVs used?
10. How are CSS IDs different from CSS classes?
11. In your CSS, add styles to the three main areas of the page: A different background color for each block (DO NOT use white) -- save both files, reload in browser
12. Style the BODY
13. Add these three style rules to each of the three sections (header, footer, main DIV): `max-width: 800px; margin: auto; padding: 20px;`

Save and reload. We will use the three color blocks to help us see what happens next as we apply some tricky styles to this page.

Compare your result to [this page](http://macloo.github.io/html-css-workshop/resources/page_layout/prelim.html). Your three background colors may differ, but the result should be similar at this stage in the exercise.

### CSS floats

Because we have created the three sections (a header, a main section, and a footer) with HTML tags, we can now _float_ blocks of content to the left and right sides.

There's a difference between [block elements vs. inline elements](http://webdesignfromscratch.com/html-css/css-block-and-inline/) in HTML.

Floats require two things:
* The floated element must be a block or an image.
* Floated elements must have a width of less than 100%.

(If the floated element is not a block, add `display: block;` in CSS.)

1. Your first floats: Write two new classes in the CSS: `.leftside` and `.rightside` 
2. Apply `leftside` to the H1 and `rightside` to the p in the `<header>` -- reload, view in browser
3. How to fix the mess: In the CSS, write a new `.clearfloats` class; then add a new DIV only for that -- above the `</header>` tag: `<div class="clearfloats"> </div>`
4. Use the same two classes to float the two footer sections, **Contact** and **About** -- but first, wrap each of those sections in a DIV
5. Apply the `clearfloats` class in a new DIV above `</footer>`
6. Wrap the main section text (including the headings) in a new DIV, then apply `leftside` to that DIV, and apply `rightside` inside the `<img>` tag
7. Apply the `clearfloats` class in a new DIV just _below_ the `<img>` tag 

Save and reload. At this point, your page layout should [look like this](http://macloo.github.io/html-css-workshop/resources/page_layout/first.html).

**Note:** We have kept the unattractive background colors on the three sections throughout to make it obvious when the floats get messed up. _Floats often get messed up._ It's good to use this background color trick to help yourself fix them.

### Finishing up the CSS layout

Please refer to [this Google doc](http://bit.ly/mmhtmlworkshop) for the details. See the section under "F. More page layout with CSS (sixth HTML page)."

## Day 4: JavaScript

In the GitHub repo, find and open the folder **javascript_start**

You'll find a README document there for this section.

See the [final product](http://macloo.github.io/html-css-workshop/javascript_start/) of the exercise (four parts).

## Day 5: jQuery

In the GitHub repo, find and open the folder **jquery_start**

You'll find a README document there for this section.

See the [final product](http://macloo.github.io/html-css-workshop/jquery_start/final.html) of the exercise (third part).

## Day 6: jQuery
