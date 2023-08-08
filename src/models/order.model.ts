import { DataTypes } from "sequelize";
import sequelize from "../config/db.config";
import {OrderAttributes} from "./attributes";

const Order = sequelize.define<OrderAttributes>(
  "order",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      // unique: true,
    },
    postalcode: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
      },
  },
  {
    underscored: true,
  }
);

export default Order;
