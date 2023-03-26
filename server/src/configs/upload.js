const path = require("path");
const multer = require("multer");
const crypto = require("crypto");

const TMP_DIR = path.resolve(__dirname, "..", "..", "tmp");
const UPLOADS_DIR = path.resolve(TMP_DIR, "uploads");

const MULTER = {
  storage: multer.diskStorage({
    destination: TMP_DIR,
    filename: (req, file, cb) => {
      const fileHash = crypto.randomBytes(10).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`;

      return cb(null, fileName);
    },
  }),
};

module.exports = {
  TMP_DIR,
  UPLOADS_DIR,
  MULTER,
};
