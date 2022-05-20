# Input: Transitions

- [Event Listener](#event-listener)
- [Basic Transitions](#basic-transitions)
- [Special Transition events](#special-transition-events)

## Event Listener

D3's syntax for event listeners is a shortened version to the original JavaScript syntax (much like jQuery):

```js
obj.on('click', () => {

});
```

You can use every event that are invoked in the <abbr title="Document Object Model">DOM</abbr> including the standard events[^js-events]

[^js-events]: [List of Standard Browser JavaScript events (MDN)](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing)

## Basic Transitions

You can transition on basically every Attribute or <abbr title="Cascading Style Sheets">CSS</abbr>-Property of <abbr title="Document Object Model">DOM</abbr>-Elements.

To have an transition to a value you have to first define the initial value. D3 interpolates the values for the animation automatically.

```js
// Create svg in DOM
// ...

// Create initial rectangles
svg.append('rect')
  .attr('y', 0)
  .attr('width', 20)
  .attr('height', 20);

// ...

// In an event listener
svg.selectAll('rect')
  .transition()
  .attr('y', 50);
```

For a more fine-grained interpolation use a specific function after the `transition()` function: `transition.tween(name[, value])` [^fn-transition.tween]

[^fn-transition.tween]: [D3 Transition Documentation: `transition.tween(name[, value])`](https://github.com/d3/d3-transition#transition_tween)

## Special Transition events

When using transitions you can use special events to insert special actions when animating:

- `start` - when the transition starts.
- `end` - when the transition ends.
- `interrupt` - when the transition is interrupted.
- `cancel` - when the transition is cancelled.


## Duration

You can time the duration of all transitions with the `duration`[^fn-transition.duration] function. When not specified the default duration is `250ms`. Values are set in milliseconds.

[^fn-transition.duration]: [D3 Transition Documentation: `transition.duration([value])`](https://github.com/d3/d3-transition#transition_duration)

```js
svg.selectAll('rect')
  .transition()
  .duration(500)
  .attr('y', 50);
```


## Delay

To delay the start of a transition you can use the `delay`[^fn-transition.delay] function. Values are set in milliseconds.

[^fn-transition.delay]: [D3 Transition Documentation: `transition.delay([value])`](https://github.com/d3/d3-transition#transition_delay)

```js
svg.selectAll('rect')
  .transition()
  .delay(500)
  .attr('y', 50);
```

## Ease

To simulate real-world behavior of movement you should consider the use of an easing function.

```js
svg.selectAll('rect')
  .transition()
  .ease(d3.easeExp)
  .attr('y', 50);
```

There are several easing functions available[^d3-ease]. Some examples:

`d3.easeBounceIn`

![easeBounceIn](https://raw.githubusercontent.com/d3/d3-ease/master/img/bounceIn.png)

`d3.easeQuadIn`

![easeQuadIn](https://raw.githubusercontent.com/d3/d3-ease/master/img/quadIn.png)

You can even write a custom ease function:

```js
function customEase(t) {
  return t * t; // custom quadratic function
}

svg.selectAll('rect')
  .transition()
  .ease(customEase)
  .attr('y', 50);
```

[^d3-ease]: [D3 Ease Documentation](https://github.com/d3/d3-ease)