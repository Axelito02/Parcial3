import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import { Recipe } from "../types/recipes";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveRecipesDB= async (recipe: Recipe) => {
    try {
        const docRef = await addDoc(collection(db, "recipes"), recipe);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export default { saveRecipesDB }
