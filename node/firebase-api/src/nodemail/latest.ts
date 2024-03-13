/* eslint-disable  @typescript-eslint/no-var-requires */
import {FirebaseItem} from "../types";
import * as functions from "firebase-functions";
import * as firebase from "firebase/app";
import {
  getFirestore,
  getDocs,
  query,
  collection,
  orderBy,
} from "firebase/firestore";

const latest = async (
  req: functions.https.Request,
  firebaseApp: firebase.FirebaseApp,
) => {
  const collectionName = "nodemail";
  const db = getFirestore(firebaseApp);
  const list: Array<FirebaseItem> = [];
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, orderBy("created", "desc"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    list.push({
      fbId: doc.id,
      data: {
        ...doc.data(),
      },
    });
  });
  return {
    code: "200",
    severity: "success",
    message: "Latest emails",
    data: {
      total: list.length,
      list,
    },
  };
};

export default latest;
