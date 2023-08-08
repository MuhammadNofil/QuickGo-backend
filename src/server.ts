import app from "./app";
import sequelize from "./config/db.config";
import dotenv from "dotenv"

dotenv.config()

const init = async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Server is listening on port ${process.env.PORT}`)
  );
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.log(error)
    console.error("Unable to connect to the database:");
  }

  try {
    //Uncomment for resetting the DB in dev environment
    // await sequelize.sync({ force: true });
    await sequelize.sync({ alter : true });
  } catch (error) {
    console.log(error)
    console.error("Error with syncing database:");
  }
};

init();
