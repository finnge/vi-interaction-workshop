# Input: Update

- [Update Dataset](#update-dataset)
- [Update Domain](#update-domain)
- [Add Data to Dataset](#add-data-to-dataset)
- [Remove Data from Dataset](#remove-data-from-dataset)

## Update Dataset

When you have a new or updated dataset, you simply ```selectAll()``` elements that use this data (in this case all rectangles of a bar chart), bind the dataset-array to these elements with ```.data()``` and then update all the changed attributes. In this case, only the values of the dataset changed, but not the quantity of values. So we only have to update the ```y``` and ```height``` values.
```js
svg.selectAll('rect')
        .data(dataset)
        .attr('y', (d) => 200 - yScale(d))
        .attr('height', (d) => yScale(d));
```

## Update Domain

When the new dataset has more or higher values than in the last dataset you need to update the domain of the diagram.
This is done exactly how you set up the domain itself - just with the updated dataset.

```js
xScale.domain([0, d3.max(dataset)]);
yScale.domain([0, d3.max(dataset)]);
```

## Add Data to Dataset

When you want to add more values to a diagram you first have to select all currently drawn bars of the chart and bind the new data to it. After that you create a new rect for the new data calculate its y- and height-values. Then you merge the newly appended rect to the existing bars and recalculate the x- and width-values of all bars, so they fit within the chart.

```js

// select current bars and bind the data to it 
// (bars contains all currently drawn rects + the new data
const bars = svg.selectAll('rect').data(dataset); 

bars.enter()                            // references the newly added data
    .append('rect')
    .attr('height', (d) => yScale(d))   // calculate y- and height-values of the new rect
    .attr('y', (d) => 200 - yScale(d))
    .merge(bars)                        // merge the new appended rect to the existing bars
    .attr('x', (d, i) => xScale(i))     // recalculate x and width of all bars
    .attr('width', xScale.bandwidth());
```

## Remove Data from Dataset

Removing data works almost the same way as with adding new data. You select all current bars and bind the new (smaller) dataset to it. Now additionally you need to remove the now unwanted bar from the DOM. This is done with  ```.exit()```, wich references the bar we want to remove, and then remove the element from the DOM with ```.remove()```

```js
bars.exit()
    .remove();
```
