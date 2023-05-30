import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebaseConfig from "../firebaseConfig";
import { Recipe } from "../types/recipes";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveRecipes = async (recipe: Recipe) => {
    try {
        const docRef = await addDoc(collection(db, "recipes"), recipe);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}