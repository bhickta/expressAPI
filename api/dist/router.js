"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = (0, express_1.Router)();
// product
router.get('/product', function (req, res) {
    res.json({ message: 'hello' });
});
router.get('product/:id', function () { });
router.put('product/:id', function () { });
router.post('product/', function () { });
router["delete"]('product/:id', function () { });
// update
router.get('/update', function () { });
router.get('update/:id', function () { });
router.put('update/:id', function () { });
router.post('update/', function () { });
router["delete"]('update/:id', function () { });
// updatepoint
router.get('/updatepoint', function () { });
router.get('updatepoint/:id', function () { });
router.put('updatepoint/:id', function () { });
router.post('updatepoint/', function () { });
router["delete"]('updatepoint/:id', function () { });
exports["default"] = router;
//# sourceMappingURL=router.js.map