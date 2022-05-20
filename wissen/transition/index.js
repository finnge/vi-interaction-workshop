/**
 * Ex1. Event Listener
 */
(() => {
  d3.select("#ex1 button[data-js='execute']")
    .on('click', () => {
      console.log('test');
    });
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
      svg.selectAll('rect')
        .transition()
        .on('start', function start() {
          d3.select(this)
            .attr('fill', '#0f62fe');
        })
        .attr('y', 50)
        .attr('x', 350)
        .attr('width', 80)
        .on('end', function end() {
          d3.select(this)
            .attr('fill', '#161616');
        });
    });
})();

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
        .transition()
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');

      // Rect 1
      rects[1]
        .transition()
        .duration(2000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');

      // Rect 2
      rects[2]
        .transition()
        .duration(3000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');
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
        .transition()
        .delay(500)
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');

      // Rect 1
      rects[1]
        .transition()
        .delay(0)
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');

      // Rect 2
      rects[2]
        .transition()
        .delay(1500)
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');
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
        .ease(d3.easeLinear)
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');

      // Rect 1
      rects[1]
        .transition()
        .delay(1000)
        .ease(d3.easeExp)
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');

      // Rect 2
      rects[2]
        .transition()
        .delay(2000)
        .ease(d3.easeBounce)
        .duration(1000)
        .attr('x', 350)
        .attr('fill', '#0f62fe');
    });
})();
