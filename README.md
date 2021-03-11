# React-D3-Charts-Practice

Created with CodeSandbox

### In D3, there 4 elements to draw different shapes:

1. `<rect></rect>`
2. `<line></line>`
3. `<circle></circle>`
4. `<path></path>`

### The commonly used properties for these elements are:

1. `fill="color"`
2. `stroke="border-color"`
3. `strokeWidth="border-size in number"`

### `<path></path>` is an element which can be used to draw different kinds of shapes like basic shapes like line,rect,cicle as well as hexagon,etc. It is also used to draw curved lines(charts).

1. Property used to draw different shapes is d="commands and co-ordinates"

2. This table summarizes how d3.path translates Canvas commands to SVG path commands.
   | Canvas | SVG | Description |
   | ---------------- | ---------- | ------------------------------------------------ |
   | moveTo | M | move to the given coordinates |
   | closePath | Z | draw a line to the start of the current sub-path |
   | lineTo | L | draw a line |
   | quadraticCurveTo | Q | draw a quadratic Bézier curve |
   | bezierCurveTo | C | draw a cubic Bézier curve |
   | arcTo | M, L, A | draw a circular arc (and possibly line) |
   | arc | M, L, A | draw a circular arc |
   | rect | M, h, v, Z | draw a axis-aligned rectangle |

3. For example, following code snippet draws a line.
   ```
   <path
   fill="none"
   stroke="black"
   strokeWidth="5"
   d="M100,100 150,300"
   > </path>
   ```

Here's helpful document: https://observablehq.com/@d3/d3-path
