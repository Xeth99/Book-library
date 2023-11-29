"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const user_1 = require("../model/user");
function signUp(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { authorName, email, id, phoneNumber } = req.body;
        try {
            yield (0, utils_1.validatePostData)({ authorName, email, id, phoneNumber });
            next();
        }
        catch (error) {
            res.status(400).json({ error });
        }
        const user = user_1.User.create({
            authorName: req.body.authorName,
            email: req.body.email,
            id: req.body.id,
            phoneNumber: req.body.phoneNumber
        });
        if (yield user) {
            res.status(200).json({
                status: 'User created successfully',
                data: user
            });
        }
        else {
            res.status(400).json({ message: 'User not created' });
        }
        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // const user = User.create({
        //     authorName: req.body.authorName,
        //     email: req.body.email,
        //     id: req.body.id,
        //     phoneNumber: req.body.phoneNumber,
        //     password: hashedPassword
        // })
    });
}
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, phoneNumber } = req.body;
        try {
            yield (0, utils_1.validatePostData)({ email, phoneNumber });
            next();
        }
        catch (error) {
            res.status(400).json({ error });
        }
        const user = user_1.User.create({
            authorName: req.body.authorName,
            email: req.body.email,
            id: req.body.id,
            phoneNumber: req.body.phoneNumber
        });
        if (yield user) {
            res.status(200).json({
                status: 'User created successfully',
                data: user
            });
        }
        else {
            res.status(400).json({ message: 'User not created' });
        }
    });
}
exports.default = {
    signUp,
    login
};
