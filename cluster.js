// create an array with nodes
var nodes = [{
    id: 1,
    label: "John",
    color: "orange"
  },
  {
    id: 2,
    label: "Thomas",
    color: "DarkViolet",
    font: {
      color: "white"
    },
  },
  {
    id: 3,
    label: "Anna",
    color: "orange"
  },
  {
    id: 4,
    label: "James",
    color: "DarkViolet",
    font: {
      color: "white"
    },
  },
  {
    id: 5,
    label: "Peter",
    color: "lime"
  },
  {
    id: 6,
    label: "Mary",
    cid: 1,
    color: "lime"
  },
  {
    id: 7,
    label: "Michael",
    cid: 1,
    color: "DarkViolet",
    font: {
      color: "white"
    },
  },
  {
    id: 8,
    label: "David",
    cid: 1,
    color: "DarkViolet"
  },
  {
    id: 9,
    label: "Anthony",
    cid: 1,
    color: "DarkViolet"
  },
  {
    id: 10,
    label: "Bobby",
    cid: 1,
    color: "lime"
  },
  {
    id: 11,
    label: "Robert",
    cid: 1,
    color: "orange"
  },
  {
    id: 12,
    label: "Susan",
    cid: 1,
    color: "DarkViolet"
  },
  {
    id: 13,
    label: "Steven",
    cid: 1,
    color: "orange"
  },
  {
    id: 14,
    label: "Charles",
    cid: 1,
    color: "DarkViolet"
  },
  {
    id: 15,
    label: "Ashley",
    cid: 1,
    color: "orange"
  },
  {
    id: 16,
    label: "Richard",
    cid: 1,
    color: "orange"
  },
  {
    id: 17,
    label: "Jessica",
    cid: 1,
    color: "orange"
  },
  {
    id: 18,
    label: "Elizabeth",
    cid: 1,
    color: "DarkViolet"
  },
  {
    id: 19,
    label: "Laura",
    cid: 1,
    color: "lime"
  },
  {
    id: 20,
    label: "Jennifer",
    cid: 1,
    color: "lime"
  },
  {
    id: 21,
    label: "Jackson",
    cid: 1,
    color: "lime"
  },
  {
    id: 22,
    label: "Julia",
    cid: 1,
    color: "lime"
  },

             
];

// create an array with edges
var edges = [{
    from: 1,
    to: 8
  },
  {
    from: 1,
    to: 9
  },
  {
    from: 1,
    to: 13
  },
  {
    from: 1,
    to: 17
  },
  {
    from: 1,
    to: 18
  },
  {
    from: 2,
    to: 8
  },
  {
    from: 2,
    to: 9
  },
  {
    from: 2,
    to: 12
  },
  {
    from: 2,
    to: 18
  },
  {
    from: 3,
    to: 1
  },
  {
    from: 3,
    to: 9
  },
  {
    from: 3,
    to: 15
  },
  {
    from: 3,
    to: 21
  },
  {
    from: 4,
    to: 1
  },
  {
    from: 4,
    to: 7
  },
  {
    from: 4,
    to: 12
  },
  {
    from: 4,
    to: 18
  },
  {
    from: 5,
    to: 10
  },
  {
    from: 5,
    to: 21
  },
  {
    from: 5,
    to: 22
  },
  {
    from: 6,
    to: 19
  },
  {
    from: 6,
    to: 20
  },
  {
    from: 6,
    to: 21
  },
  {
    from: 6,
    to: 22
  },
  {
    from: 7,
    to: 1
  },
  {
    from: 7,
    to: 9
  },
  {
    from: 7,
    to: 18
  },
  {
    from: 8,
    to: 1
  },
  {
    from: 8,
    to: 2
  },
  {
    from: 8,
    to: 12
  },
  {
    from: 8,
    to: 15
  },
  {
    from: 9,
    to: 1
  },
  {
    from: 9,
    to: 7
  },
  {
    from: 9,
    to: 8
  },
  {
    from: 9,
    to: 12
  },
  {
    from: 9,
    to: 18
  },
  {
    from: 10,
    to: 5
  },
  {
    from: 10,
    to: 6
  },
  {
    from: 10,
    to: 19
  },
  {
    from: 10,
    to: 21
  },
  {
    from: 10,
    to: 22
  },
  {
    from: 11,
    to: 1
  },
  {
    from: 11,
    to: 8
  },
  {
    from: 11,
    to: 9
  },
  {
    from: 11,
    to: 12
  },
  {
    from: 11,
    to: 15
  },
  {
    from: 12,
    to: 1
  },
  {
    from: 12,
    to: 8
  },
  {
    from: 12,
    to: 9
  },
  {
    from: 13,
    to: 1
  },
  {
    from: 13,
    to: 11
  },
  {
    from: 13,
    to: 17
  },
  {
    from: 14,
    to: 7
  },
  {
    from: 14,
    to: 8
  },
  {
    from: 14,
    to: 9
  },
  {
    from: 14,
    to: 12
  },
  {
    from: 14,
    to: 18
  },
  {
    from: 15,
    to: 1
  },
  {
    from: 15,
    to: 2
  },
  {
    from: 15,
    to: 3
  },
  {
    from: 15,
    to: 8
  },
  {
    from: 15,
    to: 11
  },
  {
    from: 16,
    to: 1
  },
  {
    from: 16,
    to: 2
  },
  {
    from: 16,
    to: 8
  },
  {
    from: 16,
    to: 12
  },
  {
    from: 16,
    to: 15
  },
  {
    from: 17,
    to: 11
  },
  {
    from: 17,
    to: 22
  },
  {
    from: 18,
    to: 2
  },
  {
    from: 18,
    to: 7
  },
  {
    from: 18,
    to: 8
  },
  {
    from: 18,
    to: 9
  },
  {
    from: 19,
    to: 6
  },
  {
    from: 19,
    to: 21
  },
  {
    from: 20,
    to: 6
  },
  {
    from: 20,
    to: 17
  },
  {
    from: 20,
    to: 19
  },
  {
    from: 20,
    to: 21
  },
  {
    from: 20,
    to: 22
  },
  {
    from: 21,
    to: 5
  },
  {
    from: 21,
    to: 6
  },
  {
    from: 21,
    to: 10
  },
  {
    from: 21,
    to: 19
  },
  {
    from: 21,
    to: 22
  },
  {
    from: 22,
    to: 6
  },
  {
    from: 22,
    to: 17
  },
  {
    from: 22,
    to: 20
  },
  {
    from: 22,
    to: 21
  },

];

// create a network
var container = document.getElementById("mynetwork");
var data = {
  nodes: nodes,
  edges: edges,
};
var options = {
  layout: {
    randomSeed: 8
  }
};
var network = new vis.Network(container, data, options);
network.on("selectNode", function(params) {
  if (params.nodes.length == 1) {
    if (network.isCluster(params.nodes[0]) == true) {
      network.openCluster(params.nodes[0]);
    }
  }
});

function clusterByCid() {
  network.setData(data);
  var clusterOptionsByData = {
    joinCondition: function(childOptions) {
      return childOptions.cid == 1;
    },
    clusterNodeProperties: {
      id: "cidCluster",
      borderWidth: 3,
      shape: "database",
    },
  };
  network.cluster(clusterOptionsByData);
}

function clusterByColor() {
  network.setData(data);
  var colors = ["orange", "lime", "DarkViolet"];
  var clusterOptionsByData;
  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    clusterOptionsByData = {
      joinCondition: function(childOptions) {
        return childOptions.color.background == color; // the color is fully defined in the node.
      },
      processProperties: function(clusterOptions, childNodes, childEdges) {
        var totalMass = 0;
        for (var i = 0; i < childNodes.length; i++) {
          totalMass += childNodes[i].mass;
        }
        clusterOptions.mass = totalMass;
        return clusterOptions;
      },
      clusterNodeProperties: {
        id: "cluster:" + color,
        borderWidth: 3,
        shape: "database",
        color: color,
        label: "color:" + color,
      },
    };
    network.cluster(clusterOptionsByData);
  }
}

function clusterByConnection() {
  network.setData(data);
  network.clusterByConnection(1);
}

function clusterOutliers() {
  network.setData(data);
  network.clusterOutliers();
}

function clusterByHubsize() {
  network.setData(data);
  var clusterOptionsByData = {
    processProperties: function(clusterOptions, childNodes) {
      clusterOptions.label = "[" + childNodes.length + "]";
      return clusterOptions;
    },
    clusterNodeProperties: {
      borderWidth: 3,
      shape: "box",
      font: {
        size: 30
      },
    },
  };
  network.clusterByHubsize(undefined, clusterOptionsByData);
}
