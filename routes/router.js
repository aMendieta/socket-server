"use strict";
exports.__esModule = true;
var express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: 'Todo está bien!!!'
    });
});
