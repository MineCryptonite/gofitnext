import { collection, getDocs, query, where, orderBy }from 'firebase/firestore';

  import db from "@/config/firebaseConfig";
    
  export async function getWorkoutCategories() {
    try {
      const classesDocs = await getDocs(
        query(
          collection(db, "workoutCategories"),
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
  