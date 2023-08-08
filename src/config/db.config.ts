import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "quickgo" ,
  "root",
  "123456",
  {
    host: process.env.DB_HOST ,
    dialect:"mysql",
    port: parseInt(process.env.DB_PORT), 
    logging: true, // Set to true to enable console logging
    pool: {
      max: 100,
      min: 0,
      acquire: 100 * 1000,
    },
  }
);

export default sequelize;
