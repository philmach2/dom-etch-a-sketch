# The DOM Etch-a-Sketch
Inspired by my curiosity to play with the beautiful feature, unique to JavaScript, of manipulating the DOM.

**Link to project:** https://dom-etch-a-sketch.netlify.app/

<img width="1440" alt="Screenshot 2024-01-18 at 6 25 04 PM" src="https://github.com/philmach2/dom-etch-a-sketch/assets/110493891/b514fbdd-86b6-48bb-9a9e-7f6b33620650">

## How It's Made:

**Tech used:** JavaScript, CSS, HTML

How the heck did I build this thing? Well, vanilla can be a wonderful thing. I had a bunch of fun tinkering with the CSS to mesh a cartoonish and realistic aesthetic and wanted to keep it lean, clean, and... that's it. All of the functionality is happening in the client-side JavaScript, therefore no creations are saved in a database. It's there, and then it's gone.

I added event listeners to the white knobs to increase or decrease the size of the drawing screen. Plus, a nice little message appears if the user tries to go beyond the drawing screen limits. I added classes to the divs generated to form the grid to listen for mouse events. And there's more I want to add...
- A 'Shake' button that adds a shaky animation and imitates the movement of sand - like the real thing - deleting the drawing.

## Lessons Learned:

I ran into a few headaches, and some small failures, but then I nipped those in the bud. 

Initially, I was hoisting all of my variables at the top of my JavaScript document - an example being 'const drawScreen = document.querySelectorAll('div.hover');'. However, when I would call the decrease or increase functions to change the grid size, the newly called grid-creating function wasn't adding the appropriate 'hover' class that I needed to draw. Since the program is creating so many divs to fill the grid, and I want to target them all, I converted them from a NodeList into an Array.

<img width="1083" alt="Screenshot 2024-01-18 at 5 59 41 PM" src="https://github.com/philmach2/dom-etch-a-sketch/assets/110493891/33764276-a905-4f69-bf93-7c74017e5768">

I had to fiddle with what I was applying the 'hover' class to as well. Initially, I was applying the class to both the 'columns' and the 'rows' being generated. Then when I was running my draw function, it was drawing entire columns rather than singular divs, so I applied the class list at grid creation to 'rows' only. On a similar note, I was attempting to apply styling via JavaScript with the 'draw' function and had to use the 'target' property to properly color each div when the mouse entered into it.

<img width="1085" alt="Screenshot 2024-01-18 at 6 01 38 PM" src="https://github.com/philmach2/dom-etch-a-sketch/assets/110493891/d2947889-225d-4602-8507-6c469cc75948">
