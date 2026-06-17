# 🎨 Etch-A-Sketch Game

A fun, interactive drawing game built with HTML, CSS, and JavaScript! Move your mouse over the grid to create colorful sketches. The more you hover over a square, the darker it becomes.

## What Does It Do?

This is a digital version of the classic Etch-A-Sketch toy. You get a grid of squares and when you move your mouse over them:
- Each square gets a **random color** and starts to fade in
- If you hover over the same square again, it gets **darker and darker**
- Once a square reaches full darkness, it turns **solid black**
- You can **change the grid size** to make it bigger or smaller

## How to Play

1. **Open** `index.html` in your web browser
2. **Move your mouse** over any square in the grid to start drawing
3. **Change the grid size** by:
   - Typing a number between 1 and 40 in the text box at the top
   - Clicking the "Size?" button
4. **Keep drawing** to create your masterpiece!

## Features

- 🎨 **Random colors** for each square you hover over
- 🎯 **Grid size control** (1 to 40)
- ⏱️ **Hover limit** - stops responding after 500 hovers to prevent accidental fills
- 📱 **Responsive design** - looks good on different screen sizes
- 🎪 **Colorful and fun** - inspired by the classic toy!

## Project Structure

```
etch-a-sketch/
├── index.html          # The main page structure
├── assets/
│   ├── script.js       # All the game logic
│   ├── styles.css      # Styling and colors
│   └── files/
│       └── logo.png    # Etch-A-Sketch logo
└── README.md           # This file
```

## How It Works (Beginner Explanation)

### HTML (`index.html`)
- Creates the page structure
- Has a header with title and size input
- Has a main container where the grid appears

### CSS (`styles.css`)
- Makes things look pretty with colors and layout
- Creates a nice blue header and cream background
- Styles the grid squares and buttons

### JavaScript (`script.js`)
- Creates the grid of squares dynamically
- Listens for mouse hovering
- Changes square colors and opacity (brightness)
- Handles the grid size change button

## Customization Ideas (For Learning!)

### Try These Changes:

**Make the grid squares bigger:**
- Open `styles.css`
- Find `min-width: 10px;` and change it to `min-width: 20px;`

**Change the default grid size:**
- Open `script.js`
- Find `const DEFAULT_GD_SIZE = 16;` and change 16 to another number

**Change the colors:**
- Open `styles.css`
- Find the `:root` section and change the color codes (like `#3E6990`)

**Make squares turn solid faster:**
- Open `script.js`
- Find `event.target.style.opacity = String(Number.parseFloat(opacity) + 0.1);`
- Change `0.1` to `0.2` to make it darker faster

## Technologies Used

- **HTML** - Page structure
- **CSS** - Styling and layout
- **JavaScript** - Game logic and interactivity

## Tips for Learning

1. **Try making small changes** to colors and sizes to see what happens
2. **Open the browser console** (F12 → Console) to see debug messages
3. **Experiment with the code** - it's the best way to learn!
4. **Read the comments** in `script.js` to understand what each function does

## Have Fun! 🎉

This is a great project to learn JavaScript basics like:
- DOM manipulation (creating and modifying elements)
- Event listeners (responding to user actions)
- Loops and conditionals
- Functions and variables

