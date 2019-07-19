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
        <Collapsible trigger={<div className='titles'>FULL PRODUCT FEATURES<span className="plus">+</span></div>} >
          <div className="row">
            <div className="col">
              <div>Technical Features</div>
              {this.props.product.technicalFeatures ? this.props.product.technicalFeatures.map((x, index) => {
                return <li className="prodfeat" key={index}>{x}</li>
              }) : null}
            </div>
            <div className="col">
              <div>Construction</div>
              {this.props.product.construction ? this.props.product.construction.map((x, index) => {
                return <li className="prodfeat" key={index}>{x}</li>
              }) : null}
            </div>
          </div>
          <div className='row'>
            <div className="col">
            <div>Design & Fit</div>
            <li className="prodfeat">{this.props.product.designAndFit}</li>
              </div>
            <div className="col">
              <div>Collar Configuration</div>
              {this.props.product.collarConfig ? this.props.product.collarConfig.map((x, index) => {
                return <li className="prodfeat" key={index}>{x}</li>
              }) : null}
            </div>
          </div>
          <div className='row'>
            <div className="col">
              <div>Zipper & Fly Configuration</div>
              <div className="prodfeat"><li>{this.props.product.zippersAndFly}</li></div>
            </div>
            <div className="col">
              <div>Hem Configuration</div>
              <div className="prodfeat"><li>{this.props.product.hemConfig}</li></div>
            </div>
          </div>
          <div className='row'>
            <div className="col">
              <div>Pocket Configuration</div>
              <div className="prodfeat"><li>{this.props.product.pocketConfig}</li></div>

            </div>
            <div className="col">
              <div>Fabric Treatment</div>
              <div className="prodfeat"><li>{this.props.product.fabricTreatment}</li></div>
            </div>
          </div>
        </Collapsible>
      </div>
    )
  }
}

export default FullProductFeatures;