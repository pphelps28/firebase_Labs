const firebaseConfig = {
	apiKey: "AIzaSyAio6vwdZAJ1GlzX7C0Mg8bR6gLt1EpVBQ",
	authDomain: "fir-practice-87288.firebaseapp.com",
	databaseURL: "https://fir-practice-87288.firebaseio.com",
	projectId: "fir-practice-87288",
	storageBucket: "fir-practice-87288.appspot.com",
	messagingSenderId: "270975170469",
	appId: "1:270975170469:web:cef00b31317d4d81b61a4c",
	measurementId: "G-R28BVC59V8",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Google
const provider = new firebase.auth.GoogleAuthProvider();

document.getElementById("googleSignIn").addEventListener("click", (e) => {
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			console.log(result);
			console.log(result.credential.accessToken);
			console.log(result.user);
		})
		.catch((error) => {
			console.log(error.message);
		});
});

//login
document.getElementById("btnLogin").addEventListener("click", (e) => {
	console.log("clicked");
	const email = document.getElementById("txtEmail").value;
	const pass = document.getElementById("txtPassword").value;
	//authenticate email/password in project
	auth.signInWithEmailAndPassword(email, pass).catch((error) => {
		console.log(error.message);
	});
});

//sign up
document.getElementById("btnSignUp").addEventListener("click", (e) => {
	console.log("clicked");
	const email = document.getElementById("txtEmail").value;
	const pass = document.getElementById("txtPassword").value;
	auth.createUserWithEmailAndPassword(email, pass).catch((error) => {
		console.log(error.message);
	});
});

//logout
document.getElementById("btnLogout").addEventListener("click", (e) => {
	auth.signOut();
	console.log("logged out");
});

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		console.log(user);
		console.log("logged in with email: " + user.email);
		document.getElementById("btnLogout").classList.remove("hide");
	} else {
		document.getElementById("btnLogout").classList.add("hide");
	}
});
