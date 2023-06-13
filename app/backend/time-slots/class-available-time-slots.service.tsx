import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore/lite";
import { app } from "../config";

const db = getFirestore(app);

export async function getTimeSlots(weekday: number, classRef: string) {
  try {
    const classesDocs = await getDocs(
      query(
        collection(db, "classAvailableTimeSlots"),
        where("weekdays", "in", weekday),
        where("classRef", "in", classRef)
      )
    );
    const classes = classesDocs.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return classes;
  } catch (error) {
    console.error("Error retrieving classes:", error);
    return [];
  }
}
