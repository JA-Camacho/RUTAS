const express = require('express');

const router = express.Router();
const admins = require('../controllers/admin.controller');
router.get('/', admins.getAdmins);
router.post('/', admins.createAdmins);
router.get('/:id', admins.getAdmin);
router.put('/:id', admins.editAdmin);
router.delete('/:id', admins.deleteAdmin);

module.exports = router;