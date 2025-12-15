# README: SVG Flag Implementation using HTML5 Canvas

## Overview
This HTML file creates a stylized flag design using HTML5 Canvas with JavaScript. The design features three horizontal stripes (green, yellow, and red) with a blue circle in the center containing a yellow pentagram and five straight rays.

## File Structure
- `index.html` - Contains both HTML structure and embedded JavaScript

## Code Explanation

### HTML Structure
```html
<!DOCTYPE html>
<!-- Declares the document as HTML5 -->
<html lang="en">
<!-- Root element with language set to English -->

<head>
    <!-- Document metadata section -->
    <meta charset="UTF-8">
    <!-- Sets character encoding to UTF-8 for proper text rendering -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Makes the page responsive on mobile devices -->
    
    <title>SVG</title>
    <!-- Page title shown in browser tab -->
</head>

<body>
<!-- Main content of the webpage -->

<canvas width="300" height="300" id="whiteboard" style="border:5px solid blue;"></canvas>
<!-- 
  Canvas element where graphics are drawn:
  - width/height: Sets drawing area to 300x300 pixels
  - id="whiteboard": Unique identifier for JavaScript access
  - style: Adds a 5px solid blue border around the canvas
-->

<script>
// JavaScript code for drawing on the canvas
```

### JavaScript Canvas Drawing Code

#### 1. Canvas Setup
```javascript
var area = document.getElementById("whiteboard");
// Gets reference to the canvas element by its ID "whiteboard"

var graphics = area.getContext("2d");
// Gets 2D drawing context from the canvas, enabling drawing operations
```

#### 2. Background Stripes
```javascript
// Green stripe (top third)
graphics.fillStyle = "#078930";
// Sets fill color to green (hex color code)
graphics.fillRect(0, 0, 300, 100);
// Draws rectangle: x=0, y=0, width=300, height=100

// Yellow stripe (middle third)
graphics.fillStyle = "#FCDD09";
// Sets fill color to yellow
graphics.fillRect(0, 100, 300, 100);
// Draws rectangle starting at y=100, covering middle section

// Red stripe (bottom third)
graphics.fillStyle = "#DA121A";
// Sets fill color to red
graphics.fillRect(0, 200, 300, 100);
// Draws rectangle starting at y=200, covering bottom section
```

#### 3. Blue Circle
```javascript
graphics.beginPath();
// Starts a new path for drawing shapes

graphics.fillStyle = "blue";
// Sets fill color to blue for the circle

graphics.arc(150, 150, 55, 0, 2 * Math.PI);
// Draws a circle:
// - Center at (150, 150) - middle of canvas
// - Radius of 55 pixels
// - Start angle: 0 radians
// - End angle: 2π radians (full circle)

graphics.fill();
// Fills the circle with the current fillStyle (blue)
```

#### 4. Yellow Pentagram (Star)
```javascript
graphics.lineWidth = 3;
// Sets line width to 3 pixels for the star outline

graphics.strokeStyle = "yellow";
// Sets line color to yellow

graphics.beginPath();
// Starts a new path for the star

graphics.moveTo(150, 120);
// Moves drawing cursor to starting point (top point of star)

// Draws star by connecting points:
graphics.lineTo(170, 175);  // To lower right
graphics.lineTo(115, 140);  // To left middle
graphics.lineTo(185, 140);  // To right middle
graphics.lineTo(130, 175);  // To lower left

graphics.closePath();
// Closes the path by connecting last point back to first point

graphics.stroke();
// Draws the outline of the star with yellow color
```

#### 5. Five Straight Rays
```javascript
graphics.strokeStyle = "yellow";
// Sets line color to yellow for rays

graphics.lineWidth = 3;
// Sets line width to 3 pixels

graphics.lineCap = "round";
// Makes the ends of lines rounded instead of square

graphics.beginPath();
// Starts a new path for the rays

// Draws five rays extending from the star:
// Bottom ray (vertical)
graphics.moveTo(150, 170);
graphics.lineTo(150, 190);

// Upper right ray (diagonal)
graphics.moveTo(172, 134);
graphics.lineTo(186, 124);

// Lower right ray (diagonal)
graphics.moveTo(172, 166);
graphics.lineTo(186, 176);

// Lower left ray (diagonal)
graphics.moveTo(128, 166);
graphics.lineTo(114, 176);

// Upper left ray (diagonal)
graphics.moveTo(128, 134);
graphics.lineTo(114, 124);

graphics.stroke();
// Draws all five rays
```

## Design Features
- **Color Scheme**: Uses the Pan-African colors (green, yellow, red) with blue and yellow accents
- **Symmetry**: The design is centered and symmetrical around the canvas midpoint (150, 150)
- **Layering**: Elements are drawn in order from background to foreground
- **Precision**: All coordinates are manually calculated for exact positioning

## Visual Elements
1. Three equal horizontal stripes (green, yellow, red)
2. Blue circle centered in the middle
3. Yellow five-pointed star (pentagram) inside the circle
4. Five yellow rays extending from the star outward

## Technical Notes
- The canvas coordinates start at (0,0) in the top-left corner
- Positive Y values go downward (unlike traditional Cartesian coordinates)
- All drawing operations are immediate and not retained as separate objects
- The border is purely decorative and not part of the drawn design

## Browser Compatibility
Works in all modern browsers that support HTML5 Canvas API.

## Usage
Simply open the HTML file in any modern web browser to view the flag design.
