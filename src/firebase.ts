// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
 GoogleAuthProvider,
  getAuth,
  signInWithPopup,
 signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBchVVldTYZ3BRUwHwHfH1GoSMWnawCX1k",
	authDomain: "fir-auth-charlie.firebaseapp.com",
	projectId: "fir-auth-charlie",
	storageBucket: "fir-auth-charlie.appspot.com",
	messagingSenderId: "287083020446",
	appId: "1:287083020446:web:c1f8dc0ccee97e65923b8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(collection(db, "users"), where("uid", "==", user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
			});
		}
	} catch (err: any) {
		console.error(err);
		alert(err.message);
	}
};


const logInWithEmailAndPassword = async (email :string, password:string) => {
	try {
		await signInWithEmailAndPassword(auth, email, password);
	} catch (err: any) {
		console.error(err);
		alert(err.message);
	}
};

 const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, "users"), {
			uid: user.uid,
			name,
			authProvider: "local",
			email,
		});
	} catch (err: any) {
		console.error(err);
		alert(err.message);
	}
};


const sendPasswordReset = async (email: string) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert("Password reset link sent!");
	} catch (err: any) {
		console.error(err);
		alert(err.message);
	}
};

const logout = () => {
	signOut(auth);
};

 const coucou = () =>{
	return "coucou"
}


export {
	auth,
	db,
	coucou,
	signInWithGoogle,
	logInWithEmailAndPassword,
	sendPasswordResetEmail,
	registerWithEmailAndPassword,
	logout,
};
