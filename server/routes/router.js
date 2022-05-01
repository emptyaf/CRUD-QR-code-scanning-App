const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require(`../controllers/controller`);

route.get('/',services.homeRoutes);

route.get('/add_laptop',services.add_laptop);

route.get('/update_laptop',services.update_laptop);

route.get('/get_laptop',services.get_laptop);

route.get('/qr_code_image',services.get_qrcode);

route.get('/scan_qr_code',services.scan_qrcode);

//API
route.post('/api/laptop', controller.create);
route.get('/api/laptop', controller.find);
route.put('/api/laptop/:id', controller.update);
route.delete('/api/laptop/:id', controller.delete);

module.exports = route;