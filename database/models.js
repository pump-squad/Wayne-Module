// const mongoose = require('mongoose');
// const connection = require('./index.js');

// const fullProductFeaturesSchema = new mongoose.Schema({
//   technicalFeatures: 'string',
//   construction: 'string',
//   designAndFit: 'string',
//   collarConfiguration: 'string',
//   hemConfiguration: 'string',
//   fabricTreatment: 'string',
//   zipperAndFlyConfiguration: 'string',
//   pocketConfiguration: 'string'
// });

// const layeringSystemSchema = new mongoose.Schema({
//   description: 'string',
//   sizingImgUrl: 'string'
// });

// const materialsAndCareSchema = new mongoose.Schema({
//   material: 'string',
//   care: 'string'
// });

// const qAndASchema = new mongoose.Schema({
//   questionHeader: 'string',
//   questionDescription: 'string',
//   age: 'number',
//   imgUrl: 'string',
//   thumbsUp: 'boolean',
//   thumbsDown: 'boolean',
//   staffName: 'string',
//   timestamp: 'string',
//   answered: 'boolean',
//   answerHeader: 'string',
//   answerBody: 'string',
//   alsoHaveQuestion: 'number'
// });

// const imageCarouselSchema = new mongoose.Schema({
//   pictureName: 'string'
// })

// const FullProductFeatures = mongoose.model('FullProductFeatures', fullProductFeaturesSchema);
// const LayeringSystem = mongoose.model('LayeringSystem', layeringSystemSchema);
// const MaterialsAndCare = mongoose.model('MaterialsAndCare', materialsAndCareSchema);
// const QuestionsAndAnswers = mongoose.model('Questions&Answers', qAndASchema);
// const imageCarousel = mongoose.model('imageCarousel', imageCarouselSchema);

// module.exports = {
//   FullProductFeatures, 
//   LayeringSystem, 
//   MaterialsAndCare, 
//   QuestionsAndAnswers,
//   imageCarousel
// }

// const text = new mongoose.Schema({
//   //fullproduct features
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

// const qAndA = new mongoose.Schema({
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
// })