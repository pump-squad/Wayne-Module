const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pumpSquad', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('db successfully connected')});

//one picture per obj
// const gallerySchema = new mongoose.Schema({
//   id: Number, //auto increment
//   imgUrl: String
// })

// const textSchema = new mongoose.Schema({
//   //fullproduct features
//   id: Number,
//   technicalFeatures: [String], //around 5 keywords/not sentences for bullet points
//   designAndFit: String, //ex: 'Trim fit for base layer or light mid-layer use'
//   zippersAndFly: String,
//   pocketConfig: String,
//   construction: [String], //2 bullet points of full sentences
//   collarConfig: [String], //2 bullet points of keywords
//   hemConfig: String, //hardcode ? : 'Adjustable hem cord seals out drafts'
//   fabricTreatment: String, //hardcode ? : DWR (Durable Water Repellent) finish repels moisture
//   //ARC'TERYX LAYERING SYSTEM should be hardcoded/static
//   //materials and care
//   materials: [String], //3 bulletpoints of full sentences
//   care: [String] /* hardcode? [Machine wash in cold water.
//                               Do not use fabric softener.
//                               Tumble dry on low heat.
//                               Do not iron.]*/
// });

// const qAndASchema = new mongoose.Schema({
//   id: Number,
//   questionHeader: String,
//   questionContent: String,
//   answer: String,
//   date: String, //or 'Date' ex: '2 months, 1 week ago'
//   age: String, //ex "Over 65", "35-44"
//   numberOfThumbsUp: Number,
//   numberOfThumbsDown: Number,
//   username: String, //ex "Gabby"
//   cityAndStateAndCountry: String,
//   activity: String //ex: "Hiking/backpacking/geology fieldwork"
// });

const productSchema = new mongoose.Schema({
  id: Number,
  imgUrl: [String],
  technicalFeatures: [String], //around 5 keywords/not sentences for bullet points
  designAndFit: String, //ex: 'Trim fit for base layer or light mid-layer use'
  zippersAndFly: String,
  pocketConfig: String,
  construction: [String], //2 bullet points of full sentences
  collarConfig: [String], //2 bullet points of keywords
  hemConfig: String, //hardcode ? : 'Adjustable hem cord seals out drafts'
  fabricTreatment: String, //hardcode ? : DWR (Durable Water Repellent) finish repels moisture
  //ARC'TERYX LAYERING SYSTEM should be hardcoded/static
  //materials and care
  materials: [String], //3 bulletpoints of full sentences
  care: [String],
  questionHeader: [String],
  questionContent: [String],
  answer: [String],
  questionCount: Number,
  answerCount: Number,
  date: [String], //or 'Date' ex: '2 months, 1 week ago'
  age: [String], //ex "Over 65", "35-44"
  numberOfThumbsUp: Number,
  numberOfThumbsDown: Number,
  username: String, //ex "Gabby"
  cityAndStateAndCountry: String,
  activity: String
});

// const Text = mongoose.model('Text', textSchema);
// const QandA = mongoose.model('QandA', qAndASchema);
// const Gallery = mongoose.model('Gallery', gallerySchema);
const Product = mongoose.model('Product', productSchema);

// module.exports = { Text, QandA, Gallery, Product };
module.exports = { Product };