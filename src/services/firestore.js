
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBxe-JYZHL-oUDUxBLc6Z0atYmpwiFmRE",
  authDomain: "reactpokemon-880b3.firebaseapp.com",
  projectId: "reactpokemon-880b3",
  storageBucket: "reactpokemon-880b3.appspot.com",
  messagingSenderId: "1003442317022",
  appId: "1:1003442317022:web:a5e1352d6c6f0954fdc44f",
  measurementId: "G-P84DRP98FZ"
};

export async function getItems() {
    const productsRef = collection(db, "pokets");
    const productsSnap = await getDocs(productsRef);
    const documents = productsSnap.docs;
  
    const docsData = documents.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  
    return docsData;
  }

  export async function getSingleItem(idURL) {

    const docRef = doc(db, "pokets", idURL);
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data() };
  }

  export async function getItemsByCategory(categoryid) {
    const productsRef = collection(db, "pokets");
  
    /* Crear una consutlta A: productosREf  CUANDO se cumpla where( if( )) */
    const q = query(productsRef, where("category", "==", categoryid));
  
    const productsSnap = await getDocs(q);
    const documents = productsSnap.docs;
  
    const docsData = documents.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  
    return docsData;
  }


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);