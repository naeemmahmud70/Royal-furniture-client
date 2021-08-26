import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import loginImage from '../../../image/Mobile-login.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

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
    });

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
        };
    };

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
                    swal({
                        title: "Sign Up Successfully!",
                        icon: "success",
                    });
                })

                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    toast.error(error.message);
                });
        };

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
                    swal({
                        title: "Sign In Successfully!",
                        icon: "success",
                    });
                })

                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.success = false;
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    toast.error(error.message);
                });
        }
        e.preventDefault();;
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(() => {
            swal({
                title: "Updated name successfully!",
                icon: "success",
            });
        }).catch((error) => {
            toast.error(error.message);
        });
    };

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
                swal({
                    title: "Log In Successfully!",
                    icon: "success",
                });

            }).catch((error) => {
                toast.error(error.message);
            });
    };

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
                swal({
                    title: "Log In Successfully!",
                    icon: "success",
                });
            })

            .catch((error) => {
                toast.error(error.message);
            });
    };

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                toast.error(error.message);
            });
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div data-aos="flip-down" className="row d-flex justify-content-center">
            <div className="row col-md-8 d-flex justify-content-center m-5 shadow rounded">
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={loginImage} alt="" />
                </div>
                <div className="col-md-6 col-12 p-5 bg-light text-center">
                    <div>
                        <h2 className="fw-bold">Create An Account</h2>
                        <hr className="mb-5" />
                        <form onSubmit={handleSubmit} >
                            <div className="form-group">
                                {newUser && <input className="form-control" name="name" type="text" onBlur={handleBlur} placeholder="enter your name" />}
                            </div>
                            <div className="form-group d-flex">
                                <input className="form-control" type="text" name="email" onBlur={handleBlur} placeholder="enter your email" required />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" name="password" onBlur={handleBlur} placeholder="enter your password" required />
                                <small className="text-secondary">Use default77@admin.com and #dev2021 as default admin </small>
                            </div>
                            <input className="sign-in-out-btn fw-bold" type="submit" value={newUser ? "Sign Up" : "Sign In"} />
                        </form>
                        <input type="checkbox" onChange={() => setNewUser(!newUser)} name="" id="" />
                        <label htmlFor="newUser">Create new user</label>
                    </div>
                    <h5 className="fw-bold mt-5">Continue Login With Social Media</h5>
                    <hr />
                    <div className="d-flex justify-content-center">
                        <button className="sign-in-out-btn fw-bold" onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} />  Google</button><br />
                        <button className="sign-in-out-btn fw-bold" onClick={handleFacebookSignIn}><FontAwesomeIcon icon={faFacebook} />  Facebook</button>
                    </div>
                    <div>
                        <p>{user.error}</p>
                        {user.success && <p>User {newUser ? 'created' : 'Logged In'} successfully</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;