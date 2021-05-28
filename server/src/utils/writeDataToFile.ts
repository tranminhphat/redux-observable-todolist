import * as fs from "fs";

const dataFolder =
  "D:/Dev/tutorials/redux-observable-todolist/server/src/data/";

const writeDataToFile = (fileName: string, content: any) => {
  fs.writeFileSync(dataFolder + fileName, JSON.stringify(content), {
    encoding: "utf-8",
  });
};

export default writeDataToFile;
