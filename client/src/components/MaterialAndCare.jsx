import React from 'react';
import Collapsible from 'react-collapsible';


class MaterialAndCare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    return (
      <div className='collapsibles'>
        <Collapsible  className='MandC' trigger={<div className="prodfeat"><div>MATERIALS & CARE</div><div className="plus">+</div></div>} >
        <div className='row'>
          <div className='col'>
            <h3>Materials</h3>
          </div>
          <div className='col'>
            <h3>Care</h3>
          </div>
        </div>
        </Collapsible>
      </div>
    )
  }
}

export default MaterialAndCare;