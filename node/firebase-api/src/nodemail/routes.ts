import * as functions from "firebase-functions";
import {
  // latest,
  send,
} from "./";

const routes = (
  app: any,
  respond: any,
  firebaseApp: any,
) => {
  app.post("/email/send", async (req: functions.https.Request, res: any) => {
    const result = await send(req, firebaseApp);
    respond(req, res, {output: {
      ...result,
    }});
  });
  // app.get("/email", async (req: functions.https.Request, res: any) => {
  //   const result = await latest(req, firebaseApp);
  //   respond(req, res, {output: {
  //     ...result,
  //   }});
  // });
};
export default routes;
