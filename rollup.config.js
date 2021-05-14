import { name, version, license, dependencies } from "./package.json";

const output = [
  {
    format: "es",
    file: "lib/index.esm.js",
  },
  {
    format: "cjs",
    file: "lib/index.js",
  },
].map((out) => {
  out.banner =
    "/**\n" +
    ` * @module ${name}\n` +
    ` * @verion ${version}\n` +
    ` * @license ${license}\n` +
    " */\n";

  return out;
});

export default {
  input: "src/index.js",
  external: Object.keys(dependencies),
  output,
};
