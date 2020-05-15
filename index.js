d3.select("h1")
  .text("Learning D3");

const dataset = [15, 22, 53];

d3.select('ul').selectAll('li')
  .data(dataset)
  .enter()
  .append('li')
  .text((d) => d + ' USD')
  .attr('class', 'bar')
  .style('color', (d) => {
    if (d < 20) return 'red'
    else return 'green'
  });