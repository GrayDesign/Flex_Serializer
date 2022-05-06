import React from "react";
import SignIn from "./signIn";
import LoggedIn from "./loggedIn";

import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";

const App = () => {

    const [user] = useAuthState(auth);

    return (
            <div className='App'>
                {user ? <LoggedIn /> : <SignIn />}
            </div>
    )
}

export default App;
