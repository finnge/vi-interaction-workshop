const WIDTH = 600;
const HEIGHT = 300;
const PADDING = 30;

//Dataset with 50 random datapoints with 
//x and y values between 0-1000
var DATASET = [];
var numDataPoints = 50;
var maxRange = Math.random() * 1000;
for (var i = 0; i < numDataPoints; i++) {
  var newNumber1 = Math.floor(Math.random() * maxRange);
  var newNumber2 = Math.floor(Math.random() * maxRange);
  DATASET.push([newNumber1, newNumber2]);
}

//Create xScale and yScale
var xScale = d3
  .scaleLinear()
  .domain([0, d3.max(DATASET, (d) => d[0])])
  .range([PADDING, WIDTH - PADDING * 2]);

var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(DATASET, (d) => d[1])])
  .range([HEIGHT - PADDING, PADDING]);

//Define xAxis and yAxis
var xAxis = d3.axisBottom().scale(xScale).ticks(7);
var yAxis = d3.axisLeft().scale(yScale).ticks(5);

//Create SVG element
var svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", WIDTH)
  .attr("height", HEIGHT);

//Define clipping path
svg
  .append("clipPath")
  .attr("id", "chart-area")
  .append("rect")
  .attr("x", PADDING)
  .attr("y", PADDING)
  .attr("width", WIDTH - PADDING * 3)
  .attr("height", HEIGHT - PADDING * 2);

//Create circles
svg
  .append("g")
  .attr("id", "circles")
  .attr("clip-path", "url(#chart-area)")
  .selectAll("circle")
  .data(DATASET)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => xScale(d[0]))
  .attr("cy", (d) => yScale(d[1]))
  .attr("r", 2);

//Create X axis
svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + (HEIGHT - PADDING) + ")")
  .call(xAxis);

//Create Y axis
svg
  .append("g")
  .attr("class", "y axis")
  .attr("transform", "translate(" + PADDING + ",0)")
  .call(yAxis);

//On click, add new data values
d3.select("#randomize").on("click", function () {
  var numValues = DATASET.length;
  var maxRange = Math.random() * 1000;
  DATASET = [];

  for (var i = 0; i < numValues; i++) {
    var newNumber1 = Math.floor(Math.random() * maxRange);
    var newNumber2 = Math.floor(Math.random() * maxRange);
    DATASET.push([newNumber1, newNumber2]);
  }

  updateChart();
});


/* TODO: Write the updateChart()-function with following features:

    - x and y values that are higher than in the current DATASET should be displayed within the chart
    - the new values for circles should be updated with a transition (you can play around with duration and delay)
    - during the update transition the size and color of the circles should be changed
    - the xAxis and yAxis should be updated with a transition as well
*/
function updateChart() {
    console.log("Updating the chart!");
  //1. Update scale domains

  //2. Update all circles

  //3. Update xAxis

  //4. Update yAxis
}
