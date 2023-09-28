import React, { useState } from "react";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/firebase.init";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggInUser = result.user;
                console.log(loggInUser);
                setUser(loggInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggInUser = result.user;
                console.log(loggInUser);
                setUser(loggInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })

    }

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error=>{
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth).then(result => {
                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {/* user ? logout : sign in */}

            {
                user ?
                    <button onClick={handleSignOut}>Sign out</button> :
                    <>
                        <button onClick={handleGoogleSignIn}>Google login</button>
                        <button onClick={handleGithubSignIn}>Github login</button>
                        <button onClick={handleFacebookSignIn}>Facebook login</button>
                    </>
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