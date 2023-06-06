import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const google = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, photo, email) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        }).then(() => {
            const saveUser = { name: name, email: email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Updated Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

        }).catch((error) => {
            console.log(error);
        })
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, google)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            //  get and set token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem('access-token', data.data.token);
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })
        return unsubscribe;
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        googleSignIn,
        signIn,
        updateUserProfile,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;