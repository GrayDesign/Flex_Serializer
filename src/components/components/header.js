import React from "react";
import {FaUserAstronaut} from "react-icons/fa";
import '../../sass/index.scss';

const Header = () => {

    return (
            <div className='header'>
                <span className='logo'>Flex Serializer </span>
                <FaUserAstronaut className='user'/>
            </div>
    )
}

export default Header;

