import { collection, getDocs } from 'firebase/firestore';
import db from '@/config/firebaseConfig';

export async function getWorkoutCategories() {
  try {
    const querySnapshot = await getDocs(collection(db, 'workoutCategories'));
    const workoutCategories = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return workoutCategories;
  } catch (error) {
    console.error('Error retrieving workout categories:', error);
    return [];
  }
}
