const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 500;
const MARGINS = { left: 50, right: 50, top: 50, bottom: 50 };

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

const data = [55000, 48000, 27000, 66000, 90000];

// adding a frame
let frame = d3
  .select("#frame")
  .append("svg")
  .attr("height", FRAME_HEIGHT)
  .attr("width", FRAME_WIDTH)
  .attr("class", "frame");

// // setting up scaling functions
// const MAX_Y = d3.max(data, (d) => {
//   return d;
// });

// const Y_SCALE = d3
//   .scaleLinear()
//   .domain([0, VIS_WIDTH])
//   .range([0, MAX_Y + 10000]);

// // adding points
// frame
//   .selectAll("points")
//   .data(data)
//   .enter()
//   .append("circle")
//   .attr("cx", MARGINS.left)
//   .attr("cy", (d) => {
//     return Y_SCALE(d) - MARGINS.top;
//   })
//   .attr("r", 20)
//   .attr("class", "points");
