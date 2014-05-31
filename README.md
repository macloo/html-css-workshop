html-css-workshop
=================

The goal: Get a group of students starting from zero to a point where they can use HTML, CSS, and even some JavaScript and jQuery to begin making simple Web apps.

Time frame: Six days, average 2.5 hours per day.

## Day 1: HTML

### Introduction

In the GitHub repo, find a starter file in the folder **html_start**

1. Type along with me: http://bit.ly/mmscreencap2 
2. Use of a text editor and a Web browser: Alternate between the two; save and reload
3. Tags and content: Which is which?
4. What tags do (tags in pairs)
5. Heading vs. paragraph (make a paragraph)
6. Levels of headings (6 levels)
7. Comments (make a comment)
8. Anchors, links (add several links)
9. Lists: UL and OL (add one list of each type)
10. Try this: http://validator.w3.org/ 
11. **Review:** Structure of documents (HTML for structure, not design)

### Code the structure

1. Examine an image of a simple home page for a Web app: http://bit.ly/mmscreencap1 
2. Determine what the structure of that page is: Mark headings (with appropriate levels), paragraphs, lists
3. Apply HTML: Code that page! (Use HTML only) 
4. Adding an image with `<img>`
5. Create a new folder for all image files 
6. Hierarchy of folders on your drive (relationship of image file to HTML file determines how you write the IMG SRC attribute value)
7. Use of the `<br>` tag: For addresses and poetry; NOT used to add linespaces

Compare your result to ...

## Day 2: CSS

### Introduction

In the GitHub repo, find a starter file in the folder **css_start**

1. Add a LINK tag in the HEAD (to associate a CSS file with this HTML file) 
2. Create a new folder for all CSS files (review hierarchy of folders on your drive)
3. Create a new plain-text .css file with a filename that matches your LINK tag
4. Styling the BODY: background, width, margin: auto; 
5. Colors (hexadecimal) - http://www.colorpicker.com/ 
6. Fonts: font-family, font-size (discuss limitations of available fonts)
7. Comments in CSS
8. Colors: background vs. color properties 
    1. In the CSS, add a color to the h1
    1. In the CSS, add a background to the p 
9. Font size, weight, style, line-height
10. Add padding to p

### Next steps

Save the HTML file and the CSS file with new filenames; edit the LINK tag accordingly.

Copy and paste the paragraph, so you have two identical paragraphs in the HTML.

1. Add `<div>` above the H1 and `</div>` below the second `</p>` -- but before `</body>`
2. Remove all width and margin statements from all elements in the CSS; then save, reload, and view
3. In the CSS, add to DIV: `width: 800px;` and `margin: auto;` -- then save, reload, view
4. In the CSS, add to DIV: `border: 1px solid #000;` and save, reload, view
    **Note:** This border is ugly. Its purpose is to allow you to see the effects of margins and padding.
5. What is a DIV? How are DIVs used? 
6. In the CSS, add `margin: 20px;` to the p, then save, reload, view
7. Increase padding on the p, then save, reload, view
    **Caution:** Overuse of margin and/or padding on too many elements has multiple effects, make design hard to control. Restraint (minimal use of margin and padding) is the best practice.
8. **Selectors and classes:** When and why do we create a class in CSS? 
9. Add a new `.highlight` class in the CSS
10. In the HTML, apply the class to one p but not both. Save, reload, view
11. Add a `<span>` tag to one sentence in the middle of the other paragraph and apply the `highlight` class to it. Save, reload, view
12. Reusability of classes in CSS


