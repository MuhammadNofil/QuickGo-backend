import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.config";
import {UserAttributes} from "./attributes";
import {hashPassword} from '../utils/Authhelper/index'
const CompanyAuth = sequelize.define<UserAttributes>(
  "company",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    companyname: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      // unique: true,
    },
    password: {
        type: DataTypes.CHAR(60),
        allowNull: false,
        required: true,
      },
  },
  {
    underscored: true,
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
    },
  }
);

export default CompanyAuth;
