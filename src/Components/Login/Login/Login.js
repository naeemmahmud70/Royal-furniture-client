import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    })
    console.log(user)

    const handleBlur = (e) => {
        let isFieldValid;
        if (e.target.name === 'name') {
            isFieldValid = e.target.value.length > 4;
        }
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value)
            isFieldValid = isPasswordValid && passwordHasNumber
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const userInfo = userCredential.user;
                    console.log(userInfo)
                    const newUserInfo = { ...user }
                    newUserInfo.success = true;
                    newUserInfo.error = "";
                    setUser(newUserInfo)
                    updateUserName(user.name)

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    console.log(error.message);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user }
                    newUserInfo.success = true;
                    newUserInfo.error = "";
                    setUser(newUserInfo)

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    console.log(error.message);
                });
        }

        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(() => {
            console.log('update successfully')
        }).catch((error) => {
            console.log(error)
        });
    }


    const handleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const SignInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(SignInUser)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <div>
            <div className="form-style shadow p-3">
                <h2>Create An Account</h2>
                <form onSubmit={handleSubmit} style={{ textAlign: 'center' }} >
                    {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="enter your name" />}
                    <br />
                    <input type="text" name="email" onBlur={handleBlur} placeholder="enter your email" required />
                    <br />
                    <input type="password" name="password" onBlur={handleBlur} placeholder="enter your password" required />
                    <br />
                    <input className="mt-2 btn-style" type="submit" value={newUser ? "Sign Up" : "Sign In"} />
                </form>
                <input type="checkbox" onChange={() => setNewUser(!newUser)} name="" id="" />
                <label htmlFor="newUser">New User?</label>
            </div>
            <div>
                <button onClick={handleSignIn}>Google SignIn</button>
            </div>
            <div>
                <p>{user.error}</p>
                {user.success && <p>User {newUser ? 'created' : 'Logged In'} successfully</p>}
            </div>
        </div>
    );
};

export default Login;