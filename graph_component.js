'use strict';

const e = React.createElement;

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    

    return React.createElement("div", null,
    
    React.createElement("h2", null, "It is ", new Date().toLocaleTimeString(), "."),
    
    
    React.createElement("div", {
      id: "OMG_psig_data"
      
    }), React.createElement("div", {
      id: "OMG_V_data"
     
    }), React.createElement("div", {
      id: "BPT_psi_data"
      
    }),React.createElement("div", {
      id: "BPT_V_data"
      
    }), React.createElement("div", {
      id: "IX1_data"
      
    }), React.createElement("div", {
      id: "state_data"
    }));
  }
}

function tick(){
  const element = React.createElement(Graph, null);
  const domContainer = document.querySelector('#graph');
  ReactDOM.render(element, domContainer);
}

setInterval(tick, 5000);