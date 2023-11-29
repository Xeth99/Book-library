"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
class Books extends sequelize_1.Model {
}
Books.init({
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    datePublished: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    pageCount: {
        type: sequelize_1.DataTypes.NUMBER
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    bookId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false
    },
    publisher: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize: database_config_1.default,
    modelName: 'Books'
});
