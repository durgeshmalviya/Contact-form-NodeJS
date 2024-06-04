
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const profileSchema = require('./dataSc')

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://durgesh:Thehobby@cluster0.cieshmm.mongodb.net/registrations?');


app.post('/requests', async (req, res) => {
    const { name, email, contact, query } = req.body; // Destructure the data directly from req.body
  
    try {
      const formData = new profileSchema({
        name,
        email,
        contact,
        query,
      });
  
      await formData.save();
      res.send("Inserted data.");
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });


  app.get('/requestdata', async (req, res) => {
    try {
      const requestdata = await profileSchema.find();
      res.json(requestdata);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
