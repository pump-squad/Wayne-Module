import React from 'react';
import Collapsible from 'react-collapsible';


class FullProductFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='collapsibles'>
        <Collapsible trigger={<div className="prodfeat"><div>FULL PRODUCT FEATURES</div><div className="plus">+</div></div>} >
          <div className="row">
            <div className="col">
              <h3>Technical Features</h3>
              {this.props.details.technicalFeatures ? this.props.details.technicalFeatures.map((x, index) => {
                return <li key={index}>{x}</li>
              }) : null}

            </div>
            <div className="col">
              <h3>Construction</h3>
              {this.props.details.construction ? this.props.details.construction.map((x, index) => {
                return <li key={index}>{x}</li>
              }) : null}
            </div>
          </div>
          <div className='row'>
            <div className="col">
            <h3>Design & Fit</h3>
            {/* {console.log(this.props.details.designAndFit)} */}
            <li>{this.props.details.designAndFit}</li>
              </div>
            <div className="col">
              <h3>Collar Configuration</h3>
              {this.props.details.collarConfig ? this.props.details.collarConfig.map((x, index) => {
                return <li key={index}>{x}</li>
              }) : null}
            </div>
          </div>
          <div className='row'>
            <div className="col">
              <h3>Zipper & Fly Configuration</h3>
              {this.props.details.zippersAndFly}
            </div>
            <div className="col">
              <h3>Hem Configuration</h3>
              {this.props.details.hemConfig}
            </div>
          </div>
          <div className='row'>
            <div className="col">
              <h3>Pocket Configuration</h3>
              {this.props.details.pocketConfig}

            </div>
            <div className="col">
              <h3>Fabric Treatment</h3>
              {this.props.details.fabricTreatment}
            </div>
          </div>
        </Collapsible>
      </div>
    )
  }
}

export default FullProductFeatures;