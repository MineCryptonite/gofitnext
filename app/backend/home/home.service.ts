import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { app } from "../config";

const db = getFirestore(app);

export async function getClassesForHome() {
  try {
    const homeCollection = collection(db, "home");
    const homeDocs = await getDocs(homeCollection);
    const home = homeDocs.docs.map((home) => ({
      ...home.data(),
      id: home.id,
    }));
    return home;
  } catch (error) {
    console.error("Error retrieving classes:", error);
    return [];
  }
}
