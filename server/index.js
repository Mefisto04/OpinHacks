const express = require('express');
const mongoose = require('mongoose');
require('dotenv');
const bodyParser = require('body-parser');
const Patient = require('./model/patientModel');

const app = express();

const MONGO_URL = "mongodb+srv://tusharpamnani55:DQwQnt0dt6eaZnpy@cluster0.kgz3wyl.mongodb.net/"

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (if needed)
app.use(express.static('public'));


// Handle patient creation
app.post('/create-patient', async (req, res) => {
  const { patientName, patientAge, patientGender, patientNumber } = req.body;

  try {
    // Check if the patient already exists
    const existingPatient = await Patient.findOne({ patientName: patientName });
    
    if (existingPatient) {
      return res.status(400).send('Patient already exists.');
    }

    // Create a new patient
    const newPatient = new Patient({
      patientName: patientName,
      patientAge: patientAge,
      patientGender: patientGender,
      patientNumber: patientNumber,
    });

    // Save the patient record to the database
    await newPatient.save();

    res.status(201).send('Patient created successfully.');
  } catch (error) {
    console.error('Error creating patient: ', error);
    res.status(500).send('Error creating patient.');
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const Image = require('./model/imageModel');
const multer = require('multer');           // multi form of file input
const upload = multer({ dest: 'uploads/' }); // destination

app.post('/upload', upload.array('images', 5), async (req, res, next) => {  // "name" in the input field , maximum of 5 images
  const images = [];

  // Iterate over uploaded files and create image objects
  req.files.forEach((file) => {
    const image = {
      data: fs.readFileSync(file.path),
      contentType: file.mimetype,
    };
    images.push(image);
  });

  try {
    // Create an image document with multiple images
    const newImage = new Image({
      title: req.body.title,
      description: req.body.description,
      images: images,
    });

    await newImage.save();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});


app.get('/images/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
      const image = await Image.findById(id);
  
      if (!image) {
        return res.status(404).send('Image not found.');
      }
  
      // Send each image separately
      image.images.forEach((img) => {
        res.contentType(img.contentType);
        res.write(img.data, 'binary');
      });
  
      res.end();
    } catch (err) {
      next(err);
    }
});
  
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Handle appointment booking
app.post('/book-appointment', async (req, res) => {
  const { patientName, previousMedications } = req.body;

  try {
    // Find the patient record in the database
    const patient = await Patient.findOne({ patientName: patientName });

    if (!patient) {
      return res.status(404).send('Patient not found.');
    }

    // Update patient's medical history with the provided medications
    if (!patient.hasMedicalHistory) {
      // If it's the first time, set hasMedicalHistory to true
      patient.hasMedicalHistory = true;
    }

    patient.previousMedications.push(previousMedications);

    // Save the updated patient record
    await patient.save();

    res.status(200).send('Appointment booked successfully.');
  } catch (error) {
    console.error('Error booking appointment: ', error);
    res.status(500).send('Error booking appointment.');
  }
});

// Retrieve patient information
app.get('/patient/:patientId', async (req, res) => {
  const patientId = req.params.patientId;

  try {
    const patient = await Patient.findById(patientId);

    if (!patient) {
      return res.status(404).send('Patient not found.');
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error('Error retrieving patient information: ', error);
    res.status(500).send('Error retrieving patient information.');
  }
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port`);
});
