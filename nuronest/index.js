const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const enquiryRoutes = require('./routes/enquiryRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://ssh root@69.62.79.18:27017/nuronest',)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.use('/api/enquiries', enquiryRoutes);
app.use('/api/schedule', scheduleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
