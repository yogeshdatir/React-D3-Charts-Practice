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

### d3 object

d3 object is a global object defined by d3 library.

### Selections

Selections are JavaScript objects that represent HTML elements in the document (DOM).

Transform the DOM by selecting elements and joining to data.
d3 Official Doc: https://github.com/d3/d3/blob/master/API.md#selections-d3-selection

Elements may be selected using a variety of predicates, including containment, attribute values, class and ID.

D3 provides numerous methods for mutating nodes: setting attributes or styles; registering event listeners; adding, removing or sorting nodes; and changing HTML or text content. These suffice for the vast majority of needs. Direct access to the underlying DOM is also possible, as each D3 selection is simply an array of nodes.

`d3.selectAll("p").style("color", "blue");`

`d3.select("body").style("background-color", "black");`

Official Doc D3: https://d3js.org/

Selection object:
`Selection {_groups: Array(1), _parents: Array(1), constructor: Object, select: ƒ $csb__default(), selectAll: ƒ $csb__default()…}`

All selection methods:
https://github.com/d3/d3/blob/master/API.md#selections-d3-selection

# Steps for drawing a chart

1. Get Data
2. Draw Chart Dimensions
3. Draw Image
4. Create Scales
5. Draw Axis
6. Add Animations and Events