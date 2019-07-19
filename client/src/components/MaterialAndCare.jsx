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
        <Collapsible  className='MandC' trigger={<div className='titles prodfeat'>MATERIALS & CARE<span className="plus">+</span></div>} >
        <div className='row'>
          <div className='col'>
            <div>Materials</div>
            <ul className='prodfeat'>
            {this.props.product.materials ? this.props.product.materials.map((x, index) => {
              return <li key={index}>{x}</li>
            }) : null}
            </ul>
          </div>
          <div className='col'>
            <div>Care</div>
            <ul className='prodfeat'>
            {this.props.product.care ? this.props.product.care.map((x, index) => {
              return <li key={index}>{x}</li>
            }) : null}
            </ul>
          </div>
        </div>
        </Collapsible>
      </div>
    )
  }
}

export default MaterialAndCare;