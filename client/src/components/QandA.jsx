import React from 'react';
import Collapsible from 'react-collapsible';

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className='collapsibles'>
        <Collapsible  className='QandA' trigger={<div className="prodfeat"><div>QUESTIONS AND ANSWERS</div><div className="plus">+</div></div>} >
          <div>
            <p>KAO BEI</p>
          </div>
        </Collapsible>
      </div>
    )
  }
}

export default QandA;