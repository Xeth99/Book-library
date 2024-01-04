import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.config';


interface UserAttributes {
    id: string;
    authorName: string;
    email: string;
    phoneNumber: string;
    password: string;
}
export class User extends Model <UserAttributes> {
  [x: string]: any;
  static find(arg0: (user: { id: string; }) => boolean) {
    throw new Error('Method not implemented.');
  }
}

User.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    authorName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
  }, 
  {
    sequelize, 
    modelName: 'User' 
  });
  

 export default User;