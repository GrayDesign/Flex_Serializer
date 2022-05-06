import React from "react";
import Header from "./components/components/header";
import NavContainer from "./components/components/navContainer";
import ListContainer from "./components/components/listContainer";


const LoggedIn = () => {

    return (
        <div className='App'>
            <Header/>
            <NavContainer/>
            <ListContainer/>
            {/*<CreateNote />*/}
        </div>
    )
}

export default LoggedIn;