import React from "react";
import {FaInfoCircle, FaTrashAlt} from "react-icons/fa";
import {FiEdit} from "react-icons/fi";

const Item = (props) => {

    return (
        <div className='item'>
            <div className='block'>
                <span className='title'>Harry Potter i Komnata Tajemnic</span>
                <div className='part'>
                    <span className='chapter'>Part 2</span>
                    <span className='chapter'>Ch. 27</span>
                </div>
            </div>

            <div className='icons'>
                <FaInfoCircle className='icon'/>
                <FiEdit className='icon'/>
                <FaTrashAlt className='icon'/>
            </div>

        </div>
)
}

export default Item;

