
let rng_0_1_uniform = d3.randomUniform()

var nodes = [
  { id: "conn",           level: 1, label: "Connections"},
  { id: "comm",           level: 1, label: "Community" },
  { id: "net",            level: 1, label: "Networks"},
  { id: "dsys",           level: 1, label: "Distributed Systems"},

  { id: "graphs",         level: 2, label: "Graphs"},
  { id: "patterns",       level: 2, label: "Patterns"},
  { id: "sys",            level: 2, label: "Systems"},

  { id: "oss",            level: 3, label: "Open-source"},
  { id: "os",             level: 3, label: "Operating Systems" },
  { id: "consensus",      level: 3, label: "Consensus"},
  { id: "collab",         level: 3, label: "Collaboration"},
  { id: "snd",            level: 3, label: "Search & Discovery"},
  { id: "recc",           level: 3, label: "Recommendations"},
  { id: "social-sw",      level: 3, label: "Social Software"},
  { id: "organic-social", level: 3, label: "Organic Social Networks"},
  { id: "p2p",            level: 3, label: "P2P"},
  { id: "federation",     level: 3, label: "Federation"},

  // Infra
  // Routing
]

var links = [

  { target: "conn", source: "comm" , strength: 0.8 },
  { target: "conn", source: "net" ,  strength: 0.8 },

  { target: "net",  source: "dsys" ,  strength: 0.8 },

  { target: "conn", source: "patterns" , strength: 0.5 },
  { target: "conn", source: "graphs" ,  strength: 0.5 },

  { target: "dsys", source: "sys" , strength: 0.5 },
  { target: "dsys", source: "consensus" , strength: 0.5 },
  { target: "dsys", source: "federation" , strength: 0.5 },
  { target: "dsys", source: "p2p" , strength: 0.5 },

  { target: "sys", source: "os" , strength: 0.5 },
  { target: "sys", source: "snd" , strength: 0.5 },


  { target: "graphs", source: "snd" , strength: 0.3 },
  { target: "snd", source: "recc" , strength: 0.5 },

  { target: "comm", source: "collab" , strength: 0.5 },
  { target: "comm", source: "oss" , strength: 0.5 },
  { target: "comm", source: "social-sw" , strength: 0.5 },
  { target: "comm", source: "organic-social" , strength: 0.5 },

  { target: "collab", source: "oss" , strength: 0.5 },
]
