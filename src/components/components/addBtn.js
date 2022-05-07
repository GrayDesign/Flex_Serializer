import React from "react";

const AddBtn = ({onPress}) => {

    return (
        <button type='button' onClick={onPress} className='addBtn'>+</button>
    );
}

export default AddBtn;
