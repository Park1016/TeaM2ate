﻿import { config } from "../config.js";
import bcrypt from "bcrypt";

export const csrfCheck = (req, res, next) => {
  console.log("--------csrf-------", req.method);
  if (
    req.method === "GET" ||
    req.method === "OPTIONS" ||
    req.method === "HEAD" ||
    req.url === "/user/email"
  ) {
    return next();
  }

  const csrfHeader = req.get("_csrf-token");

  if (!csrfHeader) {
    console.warn('Missing required "_csrf-token" header.', req.headers.origin);
    return res.status(403).json({ message: "Failed CSRF check" });
  }

  validateCsrfToken(csrfHeader)
    .then((valid) => {
      if (!valid) {
        console.warn(
          'Value provided in "_csrf-token" header does not validate.',
          req.headers.origin,
          csrfHeader
        );
        return res.status(403).json({ message: "Failed CSRF check" });
      }
      next();
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: "Something went wrong" });
    });
};

async function validateCsrfToken(csrfHeader) {
  return bcrypt.compare(config.csrf.plainToken, csrfHeader);
}
