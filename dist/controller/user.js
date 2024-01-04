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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signUp = void 0;
const user_1 = require("../model/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const authenticate_1 = require("../middlewares/authenticate");
// For signup
function signUp(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { authorName, email, phoneNumber, id, password } = req.body;
            if (!authorName || !email || !phoneNumber || !password) {
                return res.status(400).json({
                    status: 'Error',
                    data: 'Please provide all required fields'
                });
            }
            const hash = bcrypt_1.default.hashSync(password, 10);
            const user = yield user_1.User.create({
                authorName,
                email,
                id,
                phoneNumber,
                password: hash,
            });
            res.redirect('/login');
        }
        catch (error) {
            res.status(400).json({ error });
        }
    });
}
exports.signUp = signUp;
// For login
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
            return res.status(400).json('Please provide email and password');
        }
        const user = yield user_1.User.findOne({
            where: { email: email }
        });
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
        const validPassword = bcrypt_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                error: 'Invalid password'
            });
        }
        const accessToken = (0, authenticate_1.generateToken)(user);
        const userId = user.id;
        req.session.accessToken = accessToken;
        req.session.userId = userId;
        //console.log(req.session);
        //res.redirect('/createbooks');
        next();
    });
}
exports.login = login;
// To find all users
// export async function findAll(req: Request, res: Response, next: NextFunction) {
//    try {
//      const allUsers = await User.findAll();
//      res.status(200).json(allUsers);
//    } catch (error) {
//      console.error('Error retrieving all users:', error);
//      res.status(500).json({ error: 'Internal Server Error' });
//    }
//  }
// To find one user
// export async function findOne(req: Request, res: Response, next: NextFunction) {
//    try {
//      const userId = req.params.id;
//      const user = await User.findByPk(userId);
//      if (!user) {
//        res.status(404).json({ error: 'User not found' });
//      } else {
//        res.status(200).json(user);
//      }
//    } catch (error) {
//      console.error('Error retrieving user details:', error);
//      res.status(500).json({ error: 'Internal Server Error' });
//    }
//  }
exports.default = {
    signUp,
    login,
    //findAll,
    //findOne,
};
