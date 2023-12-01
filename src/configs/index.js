const dotenv = require("dotenv");

dotenv.config();

const requiredEnv = [
  "SESSION_SECRET",
  "DB_URL",
  "DB_MAX_POOL_SIZE",
  "DB_MIN_POOL_SIZE",
  "DB_SELECTION_TIMEOUT",
  "CLOUDINARY_ENV",
  "CLOUDINARY_API_KEY",
  "CLOUDINARY_API_SECRET",
];

const undefinedEnv = requiredEnv.filter(
  (env) => process.env[env] === undefined
);

if (undefinedEnv.length > 0) {
  throw new Error(`Required env vars are not set: ${undefinedEnv.join(", ")}`);
}

const nodeEnv = process.env.NODE_ENV || "development";
const port = parseInt(process.env.PORT, 10) || 8080;
const secret = process.env.SESSION_SECRET;

module.exports = {
  nodeEnv,
  port,
  secret,
};
