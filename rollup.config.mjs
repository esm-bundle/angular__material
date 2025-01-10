import fs from "fs";
import path from "path";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { createEs2015LinkerPlugin } from "@angular/compiler-cli/linker/babel";
import {
  ConsoleLogger,
  NodeJSFileSystem,
  LogLevel,
} from "@angular/compiler-cli";

const __dirname = import.meta.dirname;

const materialPackages = fs
  .readdirSync(
    path.resolve(__dirname, "node_modules/@angular/material/fesm2022"),
  )
  .filter((filename) => filename.endsWith(".mjs"))
  .map((filename) => filename.replace(".mjs", ""))
  .map((filename) => {
    // `material` is a main entry-point.
    const materialPackage =
      filename === "material"
        ? "@angular/material"
        : `@angular/material/${filename}`;
    return { filename, materialPackage };
  });

const packageJson = JSON.parse(
  fs
    .readFileSync(
      path.resolve(__dirname, "node_modules/@angular/material/package.json"),
    )
    .toString(),
);

/** File system used by the Angular linker plugin. */
const fileSystem = new NodeJSFileSystem();
/** Logger used by the Angular linker plugin. */
const logger = new ConsoleLogger(LogLevel.info);
/**
 * The linker plugin is used to make output files AOT compatible, so they don't
 * require the `@angular/compiler` at runtime.
 */
const linkerPlugin = createEs2015LinkerPlugin({
  fileSystem,
  logger,
  linkerJitMode: false,
});

// Construct a list of compilation targets, the list will be the following:
// [
//  { ecma: '2022', filename: 'toolbar', angularPackage: '@angular/material/toolbar' },
//  ...
// ]
const packages = ["2022"]
  .map((ecma) =>
    materialPackages.map(({ filename, materialPackage }) => ({
      ecma,
      filename,
      angularPackage: materialPackage,
    })),
  )
  .flat();

export default packages
  .map(({ ecma, angularPackage, filename }) => [
    createConfig({
      ecma,
      prod: false,
      format: "system",
      angularPackage,
      filename,
    }),
    createConfig({
      ecma,
      prod: true,
      format: "system",
      angularPackage,
      filename,
    }),
    createConfig({ ecma, prod: false, format: "es", angularPackage, filename }),
    createConfig({ ecma, prod: true, format: "es", angularPackage, filename }),
  ])
  .flat();

function createConfig({ ecma, prod, format, angularPackage, filename }) {
  const dir = (format === "es" ? "." : format) + `/es${ecma}`;

  return {
    input: path.join(
      __dirname,
      `node_modules/@angular/material/fesm${ecma}/${filename}.mjs`,
    ),
    output: {
      file: `${dir}/angular-${filename}.${prod ? "min." : ""}js`,
      format,
      sourcemap: true,
      banner: `/* esm-bundle - ${angularPackage}@${packageJson.version} - ${format} format - Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license */`,
    },
    plugins: [
      babel({ plugins: [linkerPlugin] }),
      prod &&
        terser({
          format: {
            ecma,
            comments: /esm-bundle/,
          },
          compress: {
            global_defs: {
              ngJitMode: false,
              ngDevMode: false,
              ngI18nClosureMode: false,
            },
          },
        }),
    ],
    external: ["rxjs", "rxjs/operators", /@angular\/.*/],
  };
}
