"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
// interface UserAttributes {
//     title: string;
//     datePublished: string;
//     description: string;
//     pageCount: number;
//     genre: string;
//     publisher: string;
//     userId: typeof UUID;
// }
class Books extends sequelize_1.Model {
}
Books.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    datePublished: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    pageCount: {
        type: sequelize_1.DataTypes.INTEGER
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    publisher: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        }
    }
}, {
    sequelize: database_config_1.default,
    modelName: 'Books'
});
exports.default = Books;
