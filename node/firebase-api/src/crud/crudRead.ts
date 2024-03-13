import {
  CRUD_R_OPTIONS,
  FirebaseItem,
} from "../types";
import * as firebase from "firebase/app";
import {
  getFirestore,
  getDocs,
  query,
  collection,
  orderBy,
} from "firebase/firestore";

const crudRead = async (
  options: CRUD_R_OPTIONS,
  firebaseApp: firebase.FirebaseApp,
) => {
  const {
    collectionName,
  } = options;
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
    message: "crudRead",
    data: {
      total: list.length,
      list,
    },
  };
};

export default crudRead;
