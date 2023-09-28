import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.init";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggInUser = result.user;
                console.log(loggInUser);
                setUser(loggInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    return (
        <div>
            {/* user ? logout : sign in */}

            {   user ?
                <button onClick={handleSignOut}>Sign out</button> :
                <button onClick={handleGoogleSignIn}>Google login</button>
            }
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;