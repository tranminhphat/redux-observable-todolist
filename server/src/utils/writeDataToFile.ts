import * as fs from "fs";
import path from "path";

const dataFolder = `${path.resolve("src")}/data/`;

const writeDataToFile = (fileName: string, content: any) => {
  fs.writeFileSync(dataFolder + fileName, JSON.stringify(content), {
    encoding: "utf-8",
  });
};

export default writeDataToFile;
