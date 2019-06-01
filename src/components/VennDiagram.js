// import React from 'react'
// import Venn from 'venn.js'
// import { select } from 'd3-selection'

// class VennDiagram extends Component {
//   constructor(props) {
//     super(props)
//     this.createVennDiagram = this.createVennDiagram.bind(this)
//   }
//   componentDidMount() {
//     this.createVennDiagram()
//   }
//   componentDidUpdate() {
//     this.createVennDiagram()
//   }

// createVennDiagram(){
//     const sets = [ 
//               {['A'], 12},
//              {['B'],  12},
//              {['A','B'], 2}];

// const chart = venn.VennDiagram()
// d3.select("#venn").datum(sets).call(chart);
// d3.selectAll("#rings .venn-circle")
//     .on("mouseover", function(d, i) {
//         const node = d3.select(this).transition();
//     node.select("path").style("fill-opacity", .2);
//     node.select("text").style("font-weight", "100")
//                        .style("font-size", "36px");
// })
//     .on("mouseout", function(d, i) {
//         var node = d3.select(this).transition();
//     node.select("path").style("fill-opacity", 0);
//     node.select("text").style("font-weight", "100")
//                        .style("font-size", "24px");
// });
// }

// }

// export default VennDiagram