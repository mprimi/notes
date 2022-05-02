"use strict"

async function force_graph() {

    const width = window.innerWidth
    const height = window.innerHeight
    const alphaStart = 0.05
    const alphaReset = 0.04
    const alphaMin = 0.03
    const linkStrengthMultiplier = 1
    const linkSizeMultiplier = 10
    const linkStrengthenMultiplier = 2
    const linkWeakenMultiplier = 0.5
    const maxNodeAnimationDelay = 3000
    const maxEdgeAnimationDelay = 3000

    const $ = {
      mouse_x: null,
      mouse_y: null,
      center_x: width/2,
      center_y: height/2,
      nodesDict: {},
      nodes: [],
      links: [],
      rng_0_1_uniform: d3.randomUniform(),

      addNode: function(node) {
        $.nodesDict[node.id] = node
        $.nodes.push(node)
      },
      addLink: function(link) {
        $.links.push(link)
        link.source.addNeighbor(link, link.target)
        link.target.addNeighbor(link, link.source)
      },
      setMouse: function(mouse) {
        $.mouse_x = mouse[0]
        $.mouse_y = mouse[1]
      },
    }

    var simulation
    var linkForce
    var svg
    var linkElements
    var nodeElements
    var textElements

    function Node(node) {
      this.id = node.id
      this.label = node.label
      this.level = node.level
      this.size = 5
      this.neighbors = new Set()
      this.links = new Set()
      this.nodeCssClass = ""
      this.nodeLabelCssClass = ""

      this.x = null
      this.y = null
      this.fx = null
      this.fy = null
      this.vx = 0
      this.vy = 0

      this.highlighted = false
      this.neighbor_highlighted = false

      this.animationDelay = Math.round($.rng_0_1_uniform() * maxNodeAnimationDelay)

      this.updateStyleClasses = function() {


        this.nodeCssClass = "node node-l" + this.level
        this.nodeLabelCssClass = "node-label node-label-l" + node.level
        if (this.highlighted) {
          this.nodeCssClass += " highlight"
          this.nodeLabelCssClass += " highlight"
        }
        if (this.neighbor_highlighted) {
          this.nodeCssClass += " neighbor_highlight"
          this.nodeLabelCssClass += " neighbor_highlight"
        }
      }

      this.addNeighbor = function(link, node) {
        this.links.add(link)
        this.neighbors.add(node)
        this.size = Math.max(5, 20 + (5 * this.neighbors.size) - (this.level * 3))
      }

      this.lockPosition = function() {
        // Lock in place
        this.fx = this.x
        this.fy = this.y
        this.vx = 0
        this.vy = 0
      },

      this.unlockPosition = function() {
        this.fx = null
        this.fy = null
      }

      this.highlight = function() {
        this.highlighted = true
        this.updateStyleClasses()
        this.neighbors.forEach(neighbor => {
          neighbor.neighbor_highlighted = true
          neighbor.updateStyleClasses()
        })
        this.links.forEach(link => {
          link.highlight()
        })
      }

      this.unhighlight = function() {
        this.highlighted = false
        this.updateStyleClasses()
        this.neighbors.forEach(neighbor => {
          neighbor.neighbor_highlighted = false
          neighbor.updateStyleClasses()
        });
        this.links.forEach(link => {
          link.unhighlight()
        })
      }

      this.strenghtenLinks = function() {
        // Weaken all links
        $.links.forEach(link => {link.weaken()})
        // Strengthen my links
        this.links.forEach(link => {
          link.strengthen()
        })
        // Refresh link force
        linkForce.strength(link => link.strength)
      }

      this.unstrenghtenLinks = function() {
        // Reset all links
        $.links.forEach(link => {link.resetStrength()})
        // Refresh link force
        linkForce.strength(link => link.strength)
      }

      this.updateStyleClasses()
    }

    function Link(link) {
      let source = $.nodesDict[link.source]
      if (!source) {
        throw("No such source node: " + link.source)
      }
      let target = $.nodesDict[link.target]
      if (!target) {
        throw("No such target node: " + link.target)
      }
      this.source = source
      this.target = target
      this.highlighted = false
      this.strength = link.strength * linkStrengthMultiplier
      this.baseStrength = this.strength
      this.cssClass = ""
      this.animationDelay = Math.round($.rng_0_1_uniform() * maxEdgeAnimationDelay)

      this.updateStyleClasses = function() {
        this.cssClass = "edge"
        if (this.highlighted) {
          this.cssClass += " highlight"
        }
      }

      this.highlight = function() {
        this.highlighted = true
        this.updateStyleClasses()
      }

      this.unhighlight = function() {
        this.highlighted = false
        this.updateStyleClasses()
      }

      this.strengthen = function() {
        this.strength = linkStrengthenMultiplier * this.baseStrength
      }

      this.weaken = function() {
        this.strength = this.baseStrength * linkWeakenMultiplier
      }

      this.resetStrength = function() {
        this.strength = this.baseStrength
      }


      this.updateStyleClasses()
    }

    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alpha(alphaReset).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(alphaMin);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    function mousemove(event) {
      $.setMouse(d3.pointer(event))
    }

    function mouseover(event, node) {
      node.lockPosition()
      node.highlight()
      node.strenghtenLinks()
    }

    function mouseout(event, node) {
      node.unlockPosition()
      node.unhighlight()
      node.unstrenghtenLinks()
    }


    function tick() {
      nodeElements
        .attr("cx", node => node.x)
        .attr("cy", node => node.y)
        .attr("r", node => node.size)
        .attr("class", node => node.nodeCssClass)
      textElements
        .attr("x", node => node.x)
        .attr("y", node => node.y)
        .attr('class', node => node.nodeLabelCssClass)
      linkElements
        .attr('x1', link => link.source.x)
        .attr('y1', link => link.source.y)
        .attr('x2', link => link.target.x)
        .attr('y2', link => link.target.y)
        .attr('class', link => link.cssClass)
    }

    nodes.forEach((node) => {
      $.addNode(new Node(node))
    })
    links.forEach((link) => {
      $.addLink(new Link(link))
    })

    console.log("Loaded " + $.nodes.length + " nodes, " + $.links.length + " links")

    linkForce = d3
      .forceLink()
      .id(link => link.id)
      .strength(link => link.strength)
      .links($.links)

    simulation = d3.forceSimulation()
      .force('repulsion', d3.forceCollide().radius(n => n.size * 4))
      .force('center', d3.forceCenter(width / 2, height / 2).strength(0.7))
      .force('link', linkForce)
      .alpha(alphaStart)
      .alphaTarget(alphaMin)
      .nodes($.nodes).on('tick', tick)

    simulation.stop()

    svg = d3.select("#canvas")

    svg
      .style("width", width + 'px')
      .style("height", height + 'px')
      .on('mousemove', mousemove);

    linkElements = svg.append('g')
      .selectAll('line')
      .data($.links)
      .enter().append('line')
        .attr('stroke-width', link => link.baseStrength * linkSizeMultiplier)
        .attr('class', "edge")
        .attr('style', link => "animation-delay: -" + link.animationDelay + "ms;")

    nodeElements = svg.append('g')
      .selectAll('circle')
      .data($.nodes)
      .enter().append('circle')
        .attr('r', node => node.size)
        .attr('style', node => "animation-delay: -" + node.animationDelay + "ms;")
        .call(drag(simulation))
        .on('mouseover', mouseover)
        .on('mouseout', mouseout)

    textElements = svg.append('g')
      .selectAll('text')
      .data($.nodes)
      .enter().append('text')
        .text(node => node.label)
        .call(drag(simulation))
        .on('mouseover', mouseover)
        .on('mouseout', mouseout)

    // debugger;
    simulation.restart()
}
