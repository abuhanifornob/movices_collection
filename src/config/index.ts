import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  databseURL: process.env.DB_URL,
};
