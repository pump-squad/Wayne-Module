const download = require('images-downloader')
 
// Download to a directory and save with the original filename
const options = {
  url: 'https://www.westelm.com/weimgs/rk/images/wcm/products/201922/0418/img6j.jpg?isx=0.0',
  dest: '../../../distressed velvet light taupe'                  // Save to /path/to/dest/image.jpg
}
 
download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
  })
  .catch((err) => {
    console.error(err)
  })
 
// Download to a directory and save with an another filename
// options = {
//   url: 'http://someurl.com/image2.jpg',
//   dest: '/path/to/dest/photo.jpg'        // Save to /path/to/dest/photo.jpg
// }
 
// download.image(options)
//   .then(({ filename, image }) => {
//     console.log('File saved to', filename)
//   })
//   .catch((err) => {
//     console.error(err)
//   })