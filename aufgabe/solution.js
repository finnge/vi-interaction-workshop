(() => {
  // Config
  const WIDTH = 600;
  const HEIGHT = 300;
  const PADDING = 30;

  // Create randomize dataset
  function createDataset(number) {
    const data = [];

    // x and y values between 0-1000
    const maxRange = Math.random() * 1000;

    for (let i = 0; i < number; i += 1) {
      const newNumber1 = Math.floor(Math.random() * maxRange);
      const newNumber2 = Math.floor(Math.random() * maxRange);
      data.push([newNumber1, newNumber2]);
    }

    return data;
  }

  // Dataset with 50 random data points with
  let DATASET = createDataset(50);

  // Create xScale and yScale
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(DATASET, (d) => d[0])])
    .range([PADDING, WIDTH - PADDING * 2]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(DATASET, (d) => d[1])])
    .range([HEIGHT - PADDING, PADDING]);

  // Define xAxis and yAxis
  const xAxis = d3.axisBottom().scale(xScale).ticks(7);
  const yAxis = d3.axisLeft().scale(yScale).ticks(5);

  // Create SVG element
  const svg = d3
    .select("#chart")
    .append("svg")
    .attr("width", WIDTH)
    .attr("height", HEIGHT);

  // Define clipping path
  svg
    .append("clipPath")
    .attr("id", "chart-area")
    .append("rect")
    .attr("x", PADDING)
    .attr("y", PADDING)
    .attr("width", WIDTH - PADDING * 3)
    .attr("height", HEIGHT - PADDING * 2);

  // Create circles
  svg
    .append("g")
    .attr("id", "circles")
    .attr("clip-path", "url(#chart-area)")
    .selectAll("circle")
    .data(DATASET)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d[0]))
    .attr("cy", (d) => yScale(d[1]))
    .attr("r", 2);

  // Create X axis
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${HEIGHT - PADDING})`)
    .call(xAxis);

  // Create Y axis
  svg
    .append("g")
    .attr("class", "y axis")
    .attr("transform", `translate(${PADDING},0)`)
    .call(yAxis);

  /**
   * AUFGABE:
   * Write the updateChart()-function with following features
   *
   * - x and y values that are higher than in the current DATASET should be displayed
   *   within the chart
   * - the new values for circles should be updated with a transition (you can play
   *   around with duration and delay)
   * - during the update transition the size and color of the circles should be changed
   * - the xAxis and yAxis should be updated with a transition as well
   */

  function updateChart() {
    console.log("Updating the chart!");

    //1. Update scale domains
    xScale.domain([0, d3.max(DATASET, (d) => d[0])]);
    yScale.domain([0, d3.max(DATASET, (d) => d[1])]);

    //2. Update all circles
    svg
      .selectAll("circle")
      .data(DATASET)
      .transition()
      .duration(1000)
      .on("start", function () {
        d3.select(this).attr("fill", "magenta").attr("r", 7);
      })
      .attr("cx", (d) => xScale(d[0]))
      .attr("cy", (d) => yScale(d[1]))
      .on("end", function () {
        d3.select(this)
          .transition()
          .duration(1000)
          .attr("fill", "black")
          .attr("r", 2);
      });

    //3. Update xAxis
    svg.select(".x.axis").transition().duration(1000).call(xAxis);

    //4. Update yAxis
    svg.select(".y.axis").transition().duration(1000).call(yAxis);
  }

  // On click, add new data values
  d3.select("#randomize").on("click", () => {
    DATASET = createDataset(DATASET.length);

    updateChart();
  });
})();
