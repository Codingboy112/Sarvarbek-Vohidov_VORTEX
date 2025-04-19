import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyABuc7zU69at_UhlimSH-iS8XMjwScO3yE",
    authDomain: "portfolio-8921b.firebaseapp.com",
    projectId: "portfolio-8921b",
    storageBucket: "portfolio-8921b.appspot.com", 
    messagingSenderId: "411266933781",
    appId: "1:411266933781:web:a60f3aa860888091cc9a1c",
    measurementId: "G-L35KVJD616"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// In indexTranslations.js
let translations = {}; // Updated name to reflect the change

async function fetchTextArray() {
  const docRef = doc(db, "translations", "translations"); // Change to "translations"
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data().index;

    // Check if 'text' exists and is not undefined
    if (data) {
      try {
        translations = JSON.parse(data); // Try parsing the text field
        console.log('✅ Translations loaded:', translations);
      } catch (error) {
        console.log("❌ Error parsing JSON:", error);
      }
    } else {
      console.log("❌ 'text' field is empty or undefined.");
    }
  } else {
    console.log("❌ No such document!");
    translations = {}; 
  }
}

export { translations, fetchTextArray }; // Export translations here
