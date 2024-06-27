const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.post('/contacts', contactController.createContact);
router.get('/contacts', contactController.getContacts);
router.get('/contacts/:id', contactController.getContactById);
router.put('/contacts/:id', contactController.updateContact);
router.delete('/contacts/:id', contactController.deleteContact);

module.exports = router;
