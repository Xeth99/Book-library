import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.config';

interface UserAttributes {
    title: string;
    datePublished: string;
    description: string;
    pageCount: number;
    genre: string;
    bookId: number;
    publisher: string;
}
class Books extends Model <UserAttributes> {}

Books.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    datePublished: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.UUID,
        allowNull: false
    },
    pageCount: {
        type: DataTypes.NUMBER
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bookId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, 
  {
    sequelize, 
    modelName: 'Books' 
  });