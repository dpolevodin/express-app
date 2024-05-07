import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const currentDirectory = dirname(dirname(fileURLToPath(import.meta.url)));

export { currentDirectory };
