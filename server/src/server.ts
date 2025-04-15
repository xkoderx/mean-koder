import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { employeeRouter } from "./routes/employee.routes";
import { connectToDatabase } from "./database";

// Load environment variables from the .env file, where the ATLAS_URI is configured
dotenv.config();

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  console.error(
    "No MONGO_URI environment variable has been defined in config.env"
  );
  process.exit(1);
}

connectToDatabase(MONGO_URI)
  .then(() => {
    const app = express();
    app.use(cors());

    app.use("/employees", employeeRouter);

    // start the Express server
    app.listen(5200, () => {
      console.log(`Server running at http://localhost:5200...`);
    });
  })
  .catch((error) => console.error(error));
