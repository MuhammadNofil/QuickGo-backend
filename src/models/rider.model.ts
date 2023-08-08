import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../config/db.config";
import {RiderAttributes} from "./attributes";

const Rider = sequelize.define<RiderAttributes>(
  "rider",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    password: {
        type: DataTypes.CHAR(60),
        allowNull: true,
      },
  },
  {
    underscored: true,
  }
);

export default Rider;
