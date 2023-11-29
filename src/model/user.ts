import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.config';

interface UserAttributes {
    authorName: string;
    email: string;
    id: number;
    phoneNumber: string;
}
export class User extends Model <UserAttributes> {
  static find(arg0: (user: { id: string; }) => boolean) {
    throw new Error('Method not implemented.');
  }
}

User.init({
    authorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, 
  {
    sequelize, 
    modelName: 'User' 
  });
  
 