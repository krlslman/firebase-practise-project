import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAAXRqezKriyYZQ08vvAvVeNH_6M6X0v-U",
	authDomain: "agu-practise-dmoses.firebaseapp.com",
	projectId: "agu-practise-dmoses",
	storageBucket: "agu-practise-dmoses.appspot.com",
	messagingSenderId: "908823398581",
	appId: "1:908823398581:web:20cde71c12c9d4f473d6fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app); //sadece firebaseile bağlantı için oluşturduk, başka biryerde kullanmayacağız auth'u.

export const createUser = (email, password) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);

			// ..
		});
}

export const loginUser = (email, password) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		});
}

export const logoutUser = () => {
	try {
        signOut(auth);
        console.log("logged out");
    } catch (error) {
        console.error(error.message);
    }
};

export const userObserver = (setCurrentUser)  => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setCurrentUser(user)
		  // User is signed in, see docs for a list of available properties
		  // https://firebase.google.com/docs/reference/js/firebase.User
		//   const uid = user.uid; //şimdilik kullanmadık userId
		  // ...
		} else {
			setCurrentUser(false)
		  // User is signed out
		  // ...
		}
	  });
}