const express = require('express');
const { getAllServices, createService } = require('../controllers/servicesController');
const router = express.Router();

router.get('/allServices', getAllServices);
router.post('/create', createService);

module.exports = router;