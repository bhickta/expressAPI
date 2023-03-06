"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.port = void 0;
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var morgan_1 = __importDefault(require("morgan"));
var auth_1 = require("./modules/auth");
var user_1 = require("./handlers/user");
exports.port = 3001;
var app = (0, express_1["default"])();
// app.use(express.json());
var jsonMiddleware = function (req, res, next) {
    express_1["default"].json()(req, res, next);
};
app.use((0, morgan_1["default"])('dev'));
app.get('/', function (req, res) {
    console.log('hello from express');
    res.status(200);
    res.json({
        message: 'hello'
    });
});
app.use('/api', auth_1.protect, router_1["default"]);
app.post('/user', jsonMiddleware, user_1.createNewUser);
app.post('/signin', user_1.signin);
exports["default"] = app;
//# sourceMappingURL=server.js.map