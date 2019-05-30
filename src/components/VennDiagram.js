import React from 'react'

const VennDiagram = () => (
<div>
  <h1>Venn Diagram</h1>

    var sets = [ {sets: ['A'], size: 12},
             {sets: ['B'], size: 12},
             {sets: ['A','B'], size: 2}];

var chart = venn.VennDiagram()
d3.select("#venn").datum(sets).call(chart);
d3.selectAll("#rings .venn-circle")
    .on("mouseover", function(d, i) {
        var node = d3.select(this).transition();
    node.select("path").style("fill-opacity", .2);
    node.select("text").style("font-weight", "100")
                       .style("font-size", "36px");
})
    .on("mouseout", function(d, i) {
        var node = d3.select(this).transition();
    node.select("path").style("fill-opacity", 0);
    node.select("text").style("font-weight", "100")
                       .style("font-size", "24px");
});
  </div>
)

export default VennDiagram