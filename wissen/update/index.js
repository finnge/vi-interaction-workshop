  /**
   * Ex1. Update dataset
   */
  (() => {
      // SETUP

      const svg = d3.select('#ex1')
          .append('svg')
          .style('border', '1px solid #161616')
          .attr('width', 400)
          .attr('height', 200);

      var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13];

      var xScale = d3.scaleBand()
          .domain(d3.range(dataset.length))
          .rangeRound([0, 400])
          .paddingInner(0.05);

      var yScale = d3.scaleLinear()
          .domain([0, d3.max(dataset)])
          .range([0, 200]);

      //Create bars
      svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("x", (d, i) => xScale(i))
          .attr("y", (d) => 200 - yScale(d))
          .attr("width", xScale.bandwidth())
          .attr("height", (d) => yScale(d));

      // Update chart
      d3.select("#ex1 button[data-js='execute']")
          .on('click', () => {

              //new dataset higher values
              dataset = [15, 13, 25, 22, 35, 11, 18, 28, 41, 29];

              //just update y and height for all bars
              svg.selectAll("rect")
                  .data(dataset)
                  .attr("y", (d) => 200 - yScale(d))
                  .attr("height", (d) => yScale(d));

              d3.select("#ex1")
                  .append("p")
                  .text("Durch inspizieren der Elemente kann festgestellt werden, dass die Balken über die Grenzen des Balkendiagramms hinausgehen.");
          });


  })();

  /**
   * Ex2. Update domain
   */
  (() => {
      // SETUP

      const svg = d3.select('#ex2')
          .append('svg')
          .style('border', '1px solid #161616')
          .attr('width', 400)
          .attr('height', 200);

      var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13];

      var xScale = d3.scaleBand()
          .domain(d3.range(dataset.length))
          .rangeRound([0, 400])
          .paddingInner(0.05);

      var yScale = d3.scaleLinear()
          .domain([0, d3.max(dataset)])
          .range([0, 200]);

      //Create bars
      svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("x", (d, i) => xScale(i))
          .attr("y", (d) => 200 - yScale(d))
          .attr("width", xScale.bandwidth())
          .attr("height", (d) => yScale(d));

      // Update chart
      d3.select("#ex2 button[data-js='execute']")
          .on('click', () => {

              dataset = [15, 13, 25, 22, 35, 11, 18, 28, 41, 29];

              //now we also update the yScale.domain()
              //so the new values fit within the bounds of the chart
              yScale.domain([0, d3.max(dataset)]);

              svg.selectAll("rect")
                  .data(dataset)
                  .attr("y", (d) => 200 - yScale(d))
                  .attr("height", (d) => yScale(d));
          });
  })();

  /**
   * Ex3. Add Data to Dataset
   */
  (() => {
      // SETUP
      const svg = d3.select('#ex3')
          .append('svg')
          .style('border', '1px solid #161616')
          .attr('width', 400)
          .attr('height', 200);

      var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13];

      var xScale = d3.scaleBand()
          .domain(d3.range(dataset.length))
          .rangeRound([0, 400])
          .paddingInner(0.05);

      var yScale = d3.scaleLinear()
          .domain([0, d3.max(dataset)])
          .range([0, 200]);

      //Create bars
      svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("x", (d, i) => xScale(i))
          .attr("y", (d) => 200 - yScale(d))
          .attr("width", xScale.bandwidth())
          .attr("height", (d) => yScale(d));

      // Update chart
      d3.select("#ex3 button[data-js='execute']")
          .on('click', () => {

              //now we have a bigger dataset
              var newValue = Math.floor(Math.random() * 30 + 1);
              dataset.push(newValue);

              //update x domain as well, as the dataset got larger
              xScale.domain(d3.range(dataset.length));
              yScale.domain([0, d3.max(dataset)]);

              var bars = svg.selectAll("rect").data(dataset);

              bars.enter()
                  .append("rect")
                  .attr("height", (d) => yScale(d)) //calculate y and height of the new bar
                  .attr("y", (d) => 200 - yScale(d))
                  .merge(bars)                      //merge our new appended rect to the existing bars
                  .attr("x", (d, i) => xScale(i))   //recalculate x and width of all bars
                  .attr("width", xScale.bandwidth());
          });

  })();

  /**
   * Ex4. Remove Data from Dataset
   */
  (() => {

      // SETUP
      const svg = d3.select('#ex4')
          .append('svg')
          .style('border', '1px solid #161616')
          .attr('width', 400)
          .attr('height', 200);

      var dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13];

      var xScale = d3.scaleBand()
          .domain(d3.range(dataset.length))
          .rangeRound([0, 400])
          .paddingInner(0.05);

      var yScale = d3.scaleLinear()
          .domain([0, d3.max(dataset)])
          .range([0, 200]);

      //Create bars
      svg.selectAll("rect")
          .data(dataset)
          .enter()
          .append("rect")
          .attr("x", (d, i) => xScale(i))
          .attr("y", (d) => 200 - yScale(d))
          .attr("width", xScale.bandwidth())
          .attr("height", (d) => yScale(d));

      // Update chart
      d3.select("#ex4 button[data-js='execute']")
          .on('click', () => {

              dataset.shift(); //remove first value from dataset

              xScale.domain(d3.range(dataset.length));
              yScale.domain([0, d3.max(dataset)]);

              var bars = svg.selectAll("rect").data(dataset);

              bars.enter()
                  .append("rect")
                  .merge(bars)
                  .attr("x", (d, i) => xScale(i))
                  .attr("y", (d) => 200 - yScale(d))
                  .attr("width", xScale.bandwidth())
                  .attr("height", (d) => yScale(d));

              bars
                  .exit()
                  .remove();
          });

  })();