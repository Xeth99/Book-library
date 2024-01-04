import { DataTypes, Model, UUID } from 'sequelize';
import sequelize from '../config/database.config';



// interface UserAttributes {
//     title: string;
//     datePublished: string;
//     description: string;
//     pageCount: number;
//     genre: string;
//     publisher: string;
//     userId: typeof UUID;
// }

class Books extends Model {
    id: any;
    title: any;
    datePublished: any;
    description: any;
    pageCount: any;
    genre: any;
    publisher: any;
    userId: any;
  
}

Books.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    datePublished: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pageCount: {
        type: DataTypes.INTEGER
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      }
  }
  }, 
  {
    sequelize, 
    modelName: 'Books' 
  });

export default Books;
