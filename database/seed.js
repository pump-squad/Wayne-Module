const db = require('./index.js');
const mongoose = require('mongoose');


// let seedImages = ['https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/0.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/1.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/2.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/3.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/4.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/5.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/6.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/7.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/8.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/9.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/10.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/11.jpg',
// 'https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/12.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/13.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/14.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/15.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/16.jpg'];

const gallery = {
  id: 0,
  url: ['https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/0.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/1.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/2.jpg','https://pumpsquad.s3-us-west-1.amazonaws.com/gallery/3.jpg']
}

const text = {
  //fullproduct features
  id: 0,
  technicalFeatures: ["Moisture-wicking",
    "Breathable",
    "Insulated",
    "Compressible and packable",
    "Ultralight",
    "Wind resistant"],
  designAndFit: "Trim fit for base layer or light mid-layer use",
  zippersAndFly: "No Slip Zip™ front zipper",
  pocketConfig: "Two hand pockets with zippers",
  construction: ["Breathable, stretch side panels for enhanced comfort and mobility", "Composite Mapping Technology strategically places each fabric for most effective protection and climate management"],
  collarConfig: ["Stand up collar", "Mid-height collar layers easily"],
  hemConfig: "Adjustable hem cord seals out drafts",
  fabricTreatment: "DWR (Durable Water Repellent) finish repels moisture",
  materials: ["Coreloft™ Compact 40 insulation (40 g/m²). Highly crimped, multi-denier siliconized polyester yarn that has undergone a special process which reduces the thickness of the material by 50%, without reducing its insulation value by the same amount. Lightweight, breathable, thermally efficient 100% polyester fibre.",
  "Tyono™ 20 denier shell with DWR treatment - 100% nylon",
  "Torrent™ 190 with Polygiene®- 84% polyester, 16% elastane – side panels"],
  care: ["Machine wash in cold water.", "Do not use fabric softener.",
  "Tumble dry on low heat.", "Do not iron."]
};

const qAndA = {

}

const seedText = () => {
  db.Text.create(text)
  .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
  })
  .catch(err => console.error(err));
}


const seedGallery = () => {
  db.Gallery.create(gallery)
  .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
  })
  .catch(err => console.error(err));
}
const seedQandA = () => {
  db.QandA.create(gallery)
  .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
  })
  .catch(err => console.error(err));
}
seedText();
seedGallery();
seedQandA();