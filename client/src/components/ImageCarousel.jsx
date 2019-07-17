import React from 'react';
import axios from 'axios';

let images = ['https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/1.jpg', 'https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/2.jpg', 'https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/3.jpg', "https://i.imgur.com/FkGOpYi.jpg"];

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);

  }

  handleClickOpen(e) {
    let modal = document.getElementById("image-modal");
    // Get the <span> element that closes the modal
    // When the user clicks on the button, open the modal 
    modal.style.display = "block";

  }

  handleClickClose() {
    // When the user clicks on <span> (x), close the modal
    let modal = document.getElementById("image-modal");
    modal.style.display = "none";
    console.log(modal.style);
  }

  render() {
    return (
      <div>
        <div id="image-modal" className="modal">
          <div className="modal-content">
            <span onClick={this.handleClickClose} className="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>

        </div>

        <div className='carousel'>
          {images.map((x, index) => {
            return <img key={index} onClick={this.handleClickOpen} className='carouselPic' src={x} />
          })}
        </div>
      </div>
    )
  }
}

export default ImageCarousel;