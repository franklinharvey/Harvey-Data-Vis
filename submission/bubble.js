
// for tool tip, referenced: http://bl.ocks.org/d3noob/a22c42db65eb00d4e369

// for multi-force chart referenced:  http://www.fabiobiondi.com/blog/2014/08/snippet-d3-js-force-multi-foci-with-text-autosize/

// read in data
d3.csv("data/bubble/bubble.csv")
    .row(function(d){ return { skill: d.skill, id: d.id, name: d.name, r: +d.r, }; })
    .get(function(error,data){
        
    
var margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;    
    
var fill = d3.scale.category10();

//foci for the four node clusters
var nodes = [], labels = [],
    foci = [{x: 150, y: 150}, {x: 350, y: 150}, {x: 550, y: 150}, {x: 750, y: 150}];

var svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", height)


// div for the tooltip
var div = d3.select("body").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);    

// setting up the force graph (technically it is a graph, with no links)    
var force = d3.layout.force()
    .nodes(nodes)
    .size([width,height])
    .links([])
    .charge(-200)
    .linkDistance(100)
    .chargeDistance(220)
    .gravity(0.001)
    .friction(0.9)
    .on("tick", tick);

var node = svg.selectAll("circle");
//var node = svg.selectAll("g");

var counter = 0;

function tick(e) {
  var k = .1 * e.alpha;

   //Push nodes toward their designated focus.
  nodes.forEach(function(o, i) {
    o.y += (foci[o.id].y - o.y) * k;
    o.x += (foci[o.id].x - o.x) * k;
  });

  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

}

var timer = setInterval(function(){

  if (nodes.length > data.length-1) { clearInterval(timer); return;}

  var item = data[counter];
  nodes.push({id: item.id, r: item.r, name: item.name});
  force.start();

  node = node.data(nodes);

  var n = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .style('cursor', 'pointer')
      .on('mousedown', function() {
         var sel = d3.select(this);
         sel.moveToFront();
      })
      .call(force.drag)
      .on("mouseover", function(d) {
          div.transition()		
            .duration(200)		
            .style("opacity", .9);		
          div.html("<b/>"+"skill level:\n" + d.skill + "</b>" + "<br/><small>"  + d.r + "%</small>")	
            .style("left", (d3.event.pageX) + "px")		
            .style("top", (d3.event.pageY - 28) + "px");	
        })	
    
       .on("mouseout", function(d) {		
        div.transition()		
        .duration(500)		
        .style("opacity", 0);	
        });

  n.append("circle")
      .attr("r",  function(d) { return (d.r*1.5); })
      .style("fill", function(d) { return fill(d.id); })

  n.append("text")
      .text(function(d){
          return d.name;
      })
      .style("font-size", function(d) {
          return Math.min(2 * d.r, (4 * d.r) / this.getComputedTextLength() * 16) + "px"; 
       })
      .attr("dy", ".35em")

  counter++;
}, 100);

    
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

function resize() {
  width = window.innerWidth;
  force.size([width, height]);
  force.start();
}

d3.select(window).on('resize', resize);
})