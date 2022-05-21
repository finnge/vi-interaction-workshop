const WIDTH = 600;
const HEIGHT = 250;


var DATASET = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 15, 20];

//DEFINE xScale
var xScale = d3
  .scaleBand()
  .domain(d3.range(DATASET.length))
  .rangeRound([0, WIDTH])
  .paddingInner(0.05);

//DEFINE yScale
var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(DATASET)])
  .range([0, HEIGHT]);

//Create SVG element
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", WIDTH)
  .attr("height", HEIGHT);

//Create bars
svg
  .selectAll("rect")
  .data(DATASET) 
  .enter()
  .append("rect")
  .attr("x", (d,i) =>  xScale(i))
  .attr("y", (d) => HEIGHT - yScale(d))
  .attr("width", xScale.bandwidth())
  .attr("height", (d) => yScale(d))
  .attr("fill", (d) => "rgb(0, 0, " + d* 10 + ")");

//Create labels
svg
  .selectAll("text")
  .data(DATASET)
  .enter()
  .append("text")
  .text( (d) => d)
  .attr("text-anchor", "middle")
  .attr("x", (d, i) => xScale(i) + xScale.bandwidth() / 2)
  .attr("y", (d) => HEIGHT - yScale(d) + 14)
  .attr("font-family", "sans-serif")
  .attr("font-size", "11px")
  .attr("fill", "white");


//On click, add new data value
d3.select("#add").on("click", function () {
  var minValue = 2;
  var maxValue = 25 - minValue;
  var newNumber = Math.floor(Math.random() * maxValue) + minValue;

  DATASET.push(newNumber); //add a data value
  updateChart();
});

//On click, remove first value from dataset
d3.select("#remove").on("click", function () {
  DATASET.shift(); //remove first value from dataset
  updateChart();
});


function updateChart() {
  
  //Update scale domains
  xScale.domain(d3.range(DATASET.length));
  yScale.domain([0, d3.max(DATASET)]);


  //select bars
  var bars = svg.selectAll("rect").data(DATASET);

  //add bar
  bars
    .enter()
    .append("rect")
	.attr("x", (d,i) =>  xScale(i))
    .attr("y", (d) => HEIGHT - yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => yScale(d))
    .attr("fill", (d) => "rgb(0, 0, " + d * 10 + ")")
    .merge(bars)
    .attr("x", (d, i) => xScale(i))
    .attr("y", (d) => HEIGHT - yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", (d) => yScale(d));

  //remove bar
  bars
    .exit()
    .remove();


  //select labels
  var labels = svg.selectAll("text").data(DATASET);

  //add label
  labels
    .enter()
    .append("text")
    .text((d) => d)
    .attr("text-anchor", "middle")
    .attr("y", (d) => HEIGHT - yScale(d) + 14)
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white")
    .merge(labels)
    .attr("x", (d, i) => xScale(i) + xScale.bandwidth() / 2);

  //remove label
  labels
    .exit()
    .remove();
}
