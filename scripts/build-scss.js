#!/usr/bin/env node

import { writeFileSync } from "node:fs";
import theme from "../dist/main.js";

(() => {
  let scss = "";
  function traverse(obj, curr) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object") {
        traverse(value, curr + (curr === "$" ? "" : "-") + key);
      } else {
        scss =
          scss + curr + (curr === "$" ? "" : "-") + key + ": " + value + ";\n";
      }
    }
  }
  traverse(theme, "$");
  writeFileSync("./dist/styles.scss", scss);
})();
