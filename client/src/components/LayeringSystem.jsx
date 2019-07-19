import React from 'react';
import Collapsible from 'react-collapsible';

class LayeringSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false

    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      expanded: !this.state.expanded
    }, () => {
      console.log(this.state.expanded);
    })
  }

  render() {
    return (
      <div className='collapsibles'>
        <Collapsible className='layering' trigger={<div className="titles prodfeat">ARC'TERYX LAYERING SYSTEM<span className="plus">+</span></div>} >
          <div>
            <p>Layers are the instruments of keeping you dry, warm and using your energy efficiently. Put into the right systems, a good sequence of layers provides you with weather protection, moves moisture away from your skin, conserves or dissipates heat, and does this in the least amount of time.</p><br />
            <p>The graph shows where this product sits within a layering system. Use the layering guide to select additional pieces for your system and understand how they fit together. Find out more about how to layer on our Layering Page.</p>
            <button className="learn">LEARN MORE</button>
            <img src="https://images-dynamic-arcteryx.imgix.net/widget-images/LayerWidget_EN-3.jpg?auto=format" />
          </div>
        </Collapsible>
      </div>
    )
  }
}

export default LayeringSystem;