
var data = [
    {"id": "0", "name": "losing_touch", "r": 28 },
    {"id": "0", "name": "nothing", "r": 7 },
    {"id": "0", "name": "other", "r": 8 },
    {"id": "0", "name": "privacy", "r": 41 },
    {"id": "0", "name": "safety", "r": 15 },

    {"id": "1", "name": "losing_touch", "r": 33 },
    {"id": "1", "name": "nothing", "r": 6 },
    {"id": "1", "name": "other", "r": 13 },
    {"id": "1", "name": "privacy", "r": 34 },
    {"id": "1", "name": "safety", "r": 14 },
    
    {"id": "2", "name": "losing_touch", "r": 21 },
    {"id": "2", "name": "nothing", "r": 7 },
    {"id": "2", "name": "other", "r": 8 },
    {"id": "2", "name": "privacy", "r": 48 },
    {"id": "2", "name": "safety", "r": 15 },
    
    {"id": "3", "name": "losing_touchh", "r": 14 },
    {"id": "3", "name": "nothing", "r": 9 },
    {"id": "3", "name": "other", "r": 10 },
    {"id": "3", "name": "privacy", "r": 54 },
    {"id": "3", "name": "safety", "r": 14 },
    
];

var width = window.innerWidth,
    height = 450;

var fill = d3.scale.category10();

var nodes = [], labels = [],
    foci = [{x: 225, y: 150}, {x: 475, y: 150}, {x: 350, y: 150}, {x: 100, y: 150}];

var svg = d3.select("body").append("svg")
    .attr("width", "100%")
    .attr("height", height)
    //.attr("domflag", '');

var force = d3.layout.force()
    .nodes(nodes)
    .size([width,height])
    .links([])
    .charge(-100)
    .chargeDistance(220)
    .gravity(0.001)
    .friction(0.8)
    .on("tick", tick);

//var node = svg.selectAll("circle");
var node = svg.selectAll("g");

var counter = 0;

function tick(e) {
  var k = .1 * e.alpha;

  // Push nodes toward their designated focus.
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
      .call(force.drag);

  n.append("circle")
      .attr("r",  function(d) { return (d.r); })
      .style("fill", function(d) { return fill(d.id); })

  n.append("text")
      .text(function(d){
          return d.name;
      })
      .style("font-size", function(d) {
          return Math.min(2 * d.r, (2 * d.r) / this.getComputedTextLength() * 16) + "px"; 
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
    