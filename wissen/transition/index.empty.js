/**
 * Ex1. Event Listener
 */
(() => {
  d3.select("#ex1 button[data-js='execute']");
  // ...
})();

/**
 * Ex2. Transition
 */
(() => {
  // SETUP

  const svg = d3.select('#ex2')
    .append('svg')
    .style('border', '1px solid #161616')
    .attr('width', 400)
    .attr('height', 200);

  svg.append('rect')
    .attr('fill', '#161616')
    .attr('width', 20)
    .attr('height', 20);

  // ANIMATION

  d3.select("#ex2 button[data-js='execute']")
    .on('click', () => {
      svg.selectAll('rect');
      // ...
    });
})();

// TODO: https://github.com/d3/d3-transition/tree/v3.0.1#control-flow

/**
 * Ex3. Duration
 */
(() => {
  // SETUP

  const svg = d3.select('#ex3')
    .append('svg')
    .style('border', '1px solid #161616')
    .attr('width', 400)
    .attr('height', 200);

  const rects = [
    // Rect 0
    svg.append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#d02670')
      .attr('x', 0)
      .attr('y', 0),

    // Rect 1
    svg.append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#d02670')
      .attr('x', 0)
      .attr('y', 30),

    // Rect 2
    svg.append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#d02670')
      .attr('x', 0)
      .attr('y', 60),
  ];

  // ANIMATION

  d3.select("#ex3 button[data-js='execute']")
    .on('click', () => {
      // Rect 0
      rects[0]
        .transition();
      // ...

      // Rect 1
      rects[1]
        .transition();
      // ...

      // Rect 2
      rects[2]
        .transition();
      // ...
    });
})();

/**
 * Ex6. Delay
 */
(() => {
  // SETUP

  const svg = d3.select('#ex4')
    .append('svg')
    .style('border', '1px solid #161616')
    .attr('width', 400)
    .attr('height', 200);

  const rects = [
    // Rect 0
    svg.append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#d02670')
      .attr('x', 0)
      .attr('y', 0),

    // Rect 1
    svg.append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#d02670')
      .attr('x', 0)
      .attr('y', 30),

    // Rect 2
    svg.append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#d02670')
      .attr('x', 0)
      .attr('y', 60),
  ];

  // ANIMATION

  d3.select("#ex4 button[data-js='execute']")
    .on('click', () => {
      // Rect 0
      rects[0]
        .transition();
      // ...

      // Rect 1
      rects[1]
        .transition();
      // ...

      // Rect 2
      rects[2]
        .transition();
      // ...
    });
})();

/**
 * Ex5. Ease
 */
(() => {
  // SETUP

  const svg = d3.select('#ex5')
    .append('svg')
    .style('border', '1px solid #161616')
    .attr('width', 400)
    .attr('height', 200);

  const rects = [
    // Rect 0
    svg.append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#d02670')
      .attr('x', 0)
      .attr('y', 0),

    // Rect 1
    svg.append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#d02670')
      .attr('x', 0)
      .attr('y', 30),

    // Rect 2
    svg.append('rect')
      .attr('width', 20)
      .attr('height', 20)
      .attr('fill', '#d02670')
      .attr('x', 0)
      .attr('y', 60),
  ];

  // ANIMATION

  d3.select("#ex5 button[data-js='execute']")
    .on('click', () => {
      // Rect 0
      rects[0]
        .transition()
        .delay(0)
        // ...
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');

      // Rect 1
      rects[1]
        .transition()
        .delay(1000)
        // ...
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');

      // Rect 2
      rects[2]
        .transition()
        .delay(2000)
        // ...
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');
    });
})();
