import sass from "sass";
import { promisify } from "util";
import { writeFile } from "fs";
const sassRenderPromise = promisify(sass.render);
const writeFilePromise = promisify(writeFile);

async function main() {
  const styleResult = await sassRenderPromise({
    file: `${process.cwd()}/sass/styles.scss`,
    outFile: `${process.cwd()}/css/styles.css`,
    sourceMap: true,
    sourceMapContents: true,
    outputStyle: "compressed",
  });

  // console.log(styleResult.css.toString());

  await writeFilePromise("css/styles.css", styleResult.css, "utf8");

  await writeFilePromise("css/styles.css.map", styleResult.map, "utf8");
}
main();


