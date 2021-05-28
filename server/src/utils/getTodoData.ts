import { IncomingMessage } from "http";
const getTodoData = (req: IncomingMessage) => {
  return new Promise<string>((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", async () => {
        resolve(body);
      });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

export default getTodoData;
