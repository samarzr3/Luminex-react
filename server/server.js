const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');


const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true}))




app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
 console.log('Loaded MONGO_URI:', process.env.MONGO_URI);

if (!MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in .env');
  
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB:', err.message);
   
    process.exit(1);
  });