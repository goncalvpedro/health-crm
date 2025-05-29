const prisma = require("../../prisma/client");

module.exports = {
  list_procedures: async (req, res) => {
    try {
      const procedures = await prisma.patients.findMany();
      res.status(200).json({
        procedures,
        message: "[ Success ] Patients retrieved successfully.",
      });
    } catch (err) {
      res
        .status(500)
        .json({ error: `[ Error ] Internal error (list_procedures): ${err}` });
    }
  },

  create_procedure: async (req, res) => {
    try {
      const newProcedure = await prisma.patients.create({
        data: {
          procName: req.body.procName,
          category: req.body.category,
          estDuration: req.body.procName,
          price: req.body.price,
        },
      });
      res.status(200).json({
        newProcedure,
        message: `[ Success ] Procedure created successfully.`,
      });
    } catch (err) {
      res
        .status(500)
        .json({ error: `[ Error ] Internal error (create_procedure): ${err}` });
    }
  },

  
};
