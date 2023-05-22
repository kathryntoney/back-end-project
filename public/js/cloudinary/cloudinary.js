require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

const img = 'IMG_6596.jpg'

async function run() {
  try {
    const result = await cloudinary.uploader.upload(img);
    console.log(result);
  } catch (error) {
    console.log('error');
  }
 
}