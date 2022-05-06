import React from "react";

const AddBtn = ({onPress}) => {

    return (
        <button type='button' onClick={onPress} className='addBtn'>+</button>
    );
}

export default AddBtn;

// const NewCustomButton = ({ onPress }) => {
//
//     return (
//
//         <button type="button" onClick={onPress}>
//
//             Click on me
//
//         </button>
//
//     );
//
// };