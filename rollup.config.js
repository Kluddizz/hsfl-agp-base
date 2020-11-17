import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: false,
    },
  ],
  plugins: [
    external(),
    url(),
    svgr(),
    babel({
      exclude: "node_modules/**",
      plugins: [
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
      ],
    }),
    resolve(),
    commonjs(),
    serve({
      contentBase: "public",
      port: 3000,
    }),
  ],
};
