"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('index');
});
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});
router.post('/form', (req, res) => {
    res.render('form');
});
router.put('/views/', (req, res) => {
    res.render('form');
});
router.delete('/viws/', (req, res) => {
    res.render('form');
});
exports.default = router;
