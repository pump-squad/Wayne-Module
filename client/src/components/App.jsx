import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import FullProductFeatures from './FullProductFeature.jsx';
import LayeringSystem from './LayeringSystem.jsx';
import MaterialAndCare from './MaterialAndCare.jsx';
import QandA from './QandA.jsx';
import Collapsible from 'react-collapsible';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''


    };
    this.fetchProduct = this.fetchProduct.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    let randomProductId = Math.floor(Math.random() * 100);
    axios.get(`/api/product/${randomProductId}`)
    .then((data) => {
      let product = data.data[0];
      this.setState({product}, () => {console.log(`product`, this.state.product)})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // fetchText() {
  //   let id = 0;
  //   axios.get(`/api/text/${id}`)
  //     .then(({ data }) => {
  //       this.setState({
  //         text: data[0]
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(`fetchText failed: ${error}`);
  //     })
  // }

  // fetchQandA() {
  //   let id = 0;
  //   axios.get(`/api/qanda/${id}`)
  //     .then((data) => {
  //       console.log(data[0]);
  //     }, () => {
  //       this.setState({
  //         questionObject: data
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(`fetchQandA failed: ${error}`);
  //     })
  // }

  // fetchGallery() {
  //   let id = 0;
  //   axios.get(`/api/gallery/${id}`)
  //     .then(({ data }) => {
  //       console.log(`gallery successful ${data}`);
  //     }, () => {
  //       this.setState({
  //         galleryUrl: data
  //       })
  //     })
  //     .catch((error) => {
  //       console.log(`gallery failed: ${error}`);
  //     })
  // }

  render() {
    return (
      <div id="main">

        <ImageCarousel product={this.state.product} />
        <div className="wordDescription">
          <span className='showBird'>@ARCTERYX – </span>
          <span className='showBird3'>show us your bird by uploading a photo of your gear in action!</span>
          <span className='showBird2'>ADD A PHOTO</span>
        </div>
        <div>
          <FullProductFeatures product={this.state.product} />
        </div>
        <div>
          <LayeringSystem />
        </div>
        <div>
          <MaterialAndCare product={this.state.product} />
        </div>
        <div>
          <QandA product={this.state.product}/>
        </div>
      </div>
    )
  }
}
export default App;
