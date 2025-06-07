const prisma = require("../../prisma/client");

module.exports = {
  // GET /patients
  listPatients: async (req, res) => {
    try {
      const patients = await prisma.patients.findMany({
        orderBy: { id: "asc" },
      });
      res.status(200).json({ patients });
    } catch (err) {
      res
        .status(500)
        .json({ error: `[ Error ] Internal error (listPatients): ${err}` });
    }
  },

  getPatientById: async (req, res) => {
    const { id } = req.params;

    try {
      const patient = await prisma.patients.findUnique({
        where: { id: parseInt(id) },
      });
      if (!patient)
        return res.status(404).json({ error: "[ Error ] Patient not found" });
      res.status(200).json({ patient, message: "[ Success ] Patient found." });
    } catch (err) {
      res
        .status(500)
        .json({ error: `[ Error ] Internal error (getPatientById): ${err}` });
    }
  },

  createPatient: async (req, res) => {
    try {
      const newPatient = await prisma.patients.create({
        data: {
          fname: req.body.fname,
          lname: req.body.lname,
          bday: req.body.bday,
          phone: req.body.phone,
          email: req.body.email,
          gender: req.body.gender,
          address: req.body.address,
          notes: req.body.notes,
        },
      });
      res
        .status(200)
        .json({ newPatient, message: "[ Success ] Patient created." });
    } catch (err) {
      res
        .status(500)
        .json({ error: `[ Error ] Internal error (createPatient): ${err}` });
    }
  },

  updatePatient: async (req, res) => {
    const { id } = req.params;
    try {
      const updatedPatient = await prisma.patients.update({
        where: { id: parseInt(id) },
        data: {
          fname: req.body.fname,
          lname: req.body.lname,
          bday: req.body.bday,
          phone: req.body.phone,
          email: req.body.email,
          gender: req.body.gender,
          address: req.body.address,
          notes: req.body.notes,
        },
      });
      res.status(200).json({
        updatedPatient,
        message: "[ Success ] Patient updated successfully.",
      });
    } catch (err) {
      res
        .status(500)
        .json({ error: `[ Error ] Internal error (updatedPatient): ${err}` });
    }
  },

  deletePatient: async (req, res) => {
    const { id } = req.params;
    try {
      await prisma.patients.delete({
        where: { id: parseInt(id) },
      });
      res
        .status(200)
        .json({ message: "[ Success ] Patient deleted successfully." });
    } catch (err) {
      res
        .status(500)
        .json({ error: `[ Error ] Internal error (deletedPatient): ${err}` });
    }
  },
};
