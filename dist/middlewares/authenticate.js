"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(user) {
    const payload = {
        email: user.email,
        id: user.id,
    };
    const secret = "Your-default-secret-key";
    const options = { expiresIn: "1d" };
    return jsonwebtoken_1.default.sign(payload, secret, options);
}
exports.generateToken = generateToken;
function verifyToken(token) {
    const secret = "Your-default-secret-key";
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        return { success: true, data: decoded };
    }
    catch (error) {
        return { success: false, data: error.message };
    }
}
exports.verifyToken = verifyToken;
const authenticate = (req, res, next) => {
    var _a;
    const authHeader = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    //console.log(req.header);
    if (!authHeader) {
        //console.log(authHeader);
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const secret = process.env.JWT_SECRET_KEY || 'Your-default-secret-key';
    console.log(secret);
    try {
        const decoded = jsonwebtoken_1.default.verify(authHeader, secret);
        //console.log(decoded);
        req.headers['user-id'] = decoded.userId;
        //console.log(req.headers);
        next();
    }
    catch (error) {
        console.error('Token Verification Error:', error);
        return res.status(403).send('Invalid token');
    }
};
exports.authenticate = authenticate;
