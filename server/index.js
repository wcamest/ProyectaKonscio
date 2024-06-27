import app from "./src/app.js";
import { sequelize } from "./src/database.js";
import "./src/models/staticPage.js";
import "./src/models/blogPostPage.js";
const port = 3001;

const main = async () => {
  try {
    await sequelize.sync({force: true});
    app.listen(3001);
    console.log("Connection has been established successfully.");
    console.log(`Server is listening in port ${3001}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();