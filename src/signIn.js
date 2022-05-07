import React from "react";
import Header from "./components/components/header";

//import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
//import {auth} from "./firebase";
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

//import { useAuthState} from "react-firebase-hooks/auth";


const SignIn = () => {

    const signInWithGoogle = () => {
        //const provider = new firebase.auth.GoogleAuthProvider();
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        //auth.signInWithPopup(provider);
        signInWithPopup(auth, provider)
    }


    return (
        <div className='App'>
            <Header/>
            <div className='navContainer landing' >
                <h1>Flex serializer</h1>
                <h2>An easy way for tracking your progress in reading books, comic books, or watching movies and TV
                    series</h2>
                <button onClick={signInWithGoogle} className='addBtnSquare'>Sing in with Google</button>
            </div>
        </div>
    )
}
export default SignIn;
