const Patient = require("../model/patientModel");

module.exports.register = async (req, res, next) => {
  try {
    const patient = await Patient.create({
      patientname,
      patientAge,
      patientGender,
      patientNumber,
      hasMedicalHistory,
      previousMedications,
    });
    return res.json({ status: true, patient });
  } catch (ex) {
    next(ex);
  }
};
