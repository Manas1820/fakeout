import { writeFileSync } from "node:fs";

writeFileSync("dist/cjs/package.json", JSON.stringify({
  type: "commonjs",
}, null, 2));
