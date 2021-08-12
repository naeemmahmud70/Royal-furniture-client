import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [LoggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

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
                    const newUserInfo = { ...user }
                    newUserInfo.success = true;
                    newUserInfo.error = "";
                    setUser(newUserInfo)
                    updateUserName(user.name)
                    const { displayName, email } = userCredential.user;
                    const signInUser = { name: displayName, email: email };
                    setLoggedInUser(signInUser);
                    storeAuthToken();

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const newUserInfo = { ...user }
                    newUserInfo.success = true;
                    newUserInfo.error = "";
                    setUser(newUserInfo)
                    const { displayName, email } = userCredential.user;
                    const signInUser = { name: displayName, email: email };
                    setLoggedInUser(signInUser);
                    storeAuthToken();

                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
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


    const handleGoogleSignIn = () => {
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
                setLoggedInUser(SignInUser)
                storeAuthToken();

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    const handleFacebookSignIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const SignInUser = {
                    isSignIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(SignInUser)
                setLoggedInUser(SignInUser)
                storeAuthToken();

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                console.log(error)
            });
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="login-form-div m-5 p-4 shadow bg-light  text-center">
                <div>
                    <h2 className="fw-bold">Create An Account</h2>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            {newUser && <input className="form-control" name="name" type="text" onBlur={handleBlur} placeholder="enter your name" />}
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" name="email" onBlur={handleBlur} placeholder="enter your email" required />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="password" name="password" onBlur={handleBlur} placeholder="enter your password" required />
                        </div>
                        <input className="sign-in-out-btn fw-bold" type="submit" value={newUser ? "Sign Up" : "Sign In"} />
                    </form>
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="" id="" />
                    <label htmlFor="newUser">Create new user</label>
                </div>
                <hr />
                <div>
                    <button className="sign-in-out-btn fw-bold" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Login With Google</button><br />
                    <button className="sign-in-out-btn fw-bold" onClick={handleFacebookSignIn}><FontAwesomeIcon icon={faFacebook} />Login With Facebook</button>
                </div>
                <div>
                    <p>{user.error}</p>
                    {user.success && <p>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;