"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class User extends sequelize_1.Model {
    static find(arg0) {
        throw new Error('Method not implemented.');
    }
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    authorName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING
        // allowNull defaults to true
    },
    phoneNumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: database_config_1.default,
    modelName: 'User'
});
exports.default = User;
