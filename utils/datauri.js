import DataUriParser from "datauri/parser.js";
import path from "path";

const getDataUri = (file) => {
  if (!file || !file.originalname || !file.buffer) {
    throw new Error("Invalid file object passed to getDataUri. Check multer configuration and input.");
  }

  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).slice(1); // get 'pdf' not '.pdf'
  return parser.format(extName, file.buffer);
};

export default getDataUri;
