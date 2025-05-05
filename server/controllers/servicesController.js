const Services = require("../models/servicesModel");

async function createService(req, res) {
  try {
    const service = new Services({
      type: req.body.type,
      code: req.body.code,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      loans: req.body.loans,
    });
    await service.save();
    return res
      .status(201)
      .send({ message: "Service Created Successfully", service });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ message: "Error occured while creating a service", err });
  }
}

async function getAllServices(req, res) {
  try {
    const services = await Services.find();
    if (services.length >= 1) {
      return res
        .status(200)
        .send({ message: "Services fetched successfully", services });
    } else {
      return res
        .status(404)
        .send({ message: "There are no services currently available" });
    }
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error occured while fetching services", error: err });
  }
}

module.exports = {
  createService,
  getAllServices,
};
