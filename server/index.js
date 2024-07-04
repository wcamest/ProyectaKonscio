import app from "./src/app.js";
import { sequelize } from "./src/database.js";
import "./src/models/staticPage.js";
import "./src/models/blogPostPage.js";
import dotenv from "dotenv";

dotenv.config();

const {SERVER_PORT} = process.env;

const main = async () => {
  try {
    await sequelize.sync({force: false});
    app.listen(SERVER_PORT);
    console.log("Connection has been established successfully.");
    console.log(`Server is listening in port ${SERVER_PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();