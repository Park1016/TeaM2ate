import dotenv from "dotenv";
dotenv.config();

function required(key, defaultValue = undefined) {
  const value = process.env[key] || defaultValue;
  if (value == null) {
    throw new Error(`Key ${key} is undefined`);
  }
  return value;
}

export const config = {
  jwt: {
    secretKey: required("JWT_SECRET"),
    expiresInSecAccess: parseInt(required("JWT_EXPIRES_SEC_ACCESS")),
    expiresInSecRefresh: parseInt(required("JWT_EXPIRES_SEC_REFRESH")),
  },
  bcrypt: {
    saltRounds: parseInt(required("BCRYPT_SALT_ROUND")),
  },
  host: {
    port: parseInt(required("PORT")),
  },
  cors: {
    allowedOrigin: required("CORS_ALLOW_ORIGIN"),
  },
  db: {
    host: required("DB_HOST"),
    user: required("DB_USER"),
    database: required("DB_DATABASE"),
    password: required("DB_PASSWORD"),
  },
  csrf: {
    plainToken: required("CSRF_SECRET_KEY"),
  },
  email: {
    validTime: parseInt(required("VALID_TIME")),
  },
};
