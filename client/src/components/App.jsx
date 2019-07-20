import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import FullProductFeatures from './FullProductFeature.jsx';
import LayeringSystem from './LayeringSystem.jsx';
import MaterialAndCare from './MaterialAndCare.jsx';
import QandA from './QandA.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    };
    this.fetchProduct = this.fetchProduct.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);
  }

  componentDidMount() {
    this.fetchProduct();
  }

  fetchProduct() {
    let randomProductId = Math.floor(Math.random() * 100);
    axios.get(`/api/product/${randomProductId}`)
      .then((data) => {
        let product = data.data[0];
        this.setState({ product })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleClickOpen() {
    let modal = document.getElementById("add-photo-modal");
    // Get the <span> element that closes the modal
    // When the user clicks on the button, open the modal 
    modal.style.display = "block";
  }

  handleClickClose() {
    // When the user clicks on <span> (x), close the modal
    let modal = document.getElementById("add-photo-modal");
    modal.style.display = "none";
  }

  render() {
    return (
      <div id="main">

        <ImageCarousel product={this.state.product} />
        <div className="wordDescription">
          <span className='showBird'>@ARCTERYX – </span>
          <span className='showBird3'>show us your bird by uploading a photo of your gear in action!</span>
          <span className='showBird2 question-modal-content' onClick={this.handleClickOpen}>ADD A PHOTO</span>
        </div>
        <div id="add-photo-modal" className="upload-modal">
          <div className="upload-modal-content">
            <span onClick={this.handleClickClose} className="close">&times;</span>
            <img src='https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/upload_jpg.jpg'/>
          </div>
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
          <QandA product={this.state.product} />
        </div>
      </div>
    )
  }
}
export default App;
