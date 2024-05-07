import { join } from "node:path";
import { readFileSync } from "node:fs";
import { currentDirectory } from "../utility.js";

const dataFileName = join(currentDirectory, "data", "todos.json");
const dataFile = readFileSync(dataFileName, "utf8");
const database = JSON.parse(dataFile);

export { database };
