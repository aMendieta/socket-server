"use strict";
exports.__esModule = true;
var server_1 = require("./classes/server");
var router_1 = require("./routes/router");
var environment_1 = require("./global/environment");
var server = new server_1["default"]();
server.app.use('/', router_1.router);
server.start(function () {
    console.log("Servidor corriendo en el puerto " + environment_1.SERVER_PORT);
});
