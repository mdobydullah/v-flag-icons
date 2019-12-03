import vue from "rollup-plugin-vue";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify-es";
import minimist from "minimist";
import babel from 'rollup-plugin-babel';
import image from 'rollup-plugin-image';
import postcss from 'rollup-plugin-postcss';
import postcssSVG from 'postcss-svg';

const argv = minimist(process.argv.slice(2));

const config = {
  input: "src/entry.js",
  output: {
    name: "vFlagIcons",
    exports: "named"
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    postcss({
      plugins: [
        postcssSVG()
      ]
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    commonjs(),
    image(),
    vue({
      css: true,
      compileTemplate: true,
      template: {
        isProduction: true
      }
    }),
    buble()
  ]
};

// Only minify browser (iife) version
if (argv.format === "iife") {
  config.plugins.push(uglify());
}

export default config;