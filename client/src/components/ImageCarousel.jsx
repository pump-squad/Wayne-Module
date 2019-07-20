import React from 'react';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalImage: '',

    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClickClose = this.handleClickClose.bind(this);

  }

  handleClickOpen(e) {
    let modal = document.getElementById("image-modal");
    // Get the <span> element that closes the modal
    // When the user clicks on the button, open the modal 
    modal.style.display = "block";
    this.setState({
      modalImage: e.target.id
    }, () => { console.log(this.state.modalImage) })
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
            <img src={this.state.modalImage} />
          </div>
        </div>

        <div className='carousel'>
          {this.props.product.imgUrl ? this.props.product.imgUrl.map((image, index) => (
            <img key={index} id={image} onClick={this.handleClickOpen} className='carouselPic' src={image} />
          )) : null}
        </div>
      </div>
    )
  }
}

export default ImageCarousel;