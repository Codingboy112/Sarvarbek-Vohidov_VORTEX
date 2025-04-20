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

let aboutTranslations = {};

async function fetchTextArray() {
  const docRef = doc(db, "translations", "about");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    try {
      aboutTranslations = JSON.parse(docSnap.data().text);
      console.log("✅ About translations loaded.");
    } catch (error) {
      console.error("❌ Error parsing JSON for About page:", error);
    }
  } else {
    console.error("❌ No such document for About page!");
    aboutTranslations = {};
  }
}

export { aboutTranslations, fetchTextArray };
