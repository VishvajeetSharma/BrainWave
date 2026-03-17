import "dotenv/config"
import app from './app';
import { AppDataSource } from "./dbconfig/dbconfig";

const port = process.env.PORT || 7000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully..");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});