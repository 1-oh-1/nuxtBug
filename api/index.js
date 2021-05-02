// HMR Works
import { testImport } from "./import.js";
// HMR Doesn't work
const { testRequire } = require("./require.js");

export default function(req, res, next) {
  res.json({
    testImport: testImport(),
    testRequire: testRequire()
  });
}
