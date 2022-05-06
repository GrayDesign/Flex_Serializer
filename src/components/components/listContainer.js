import React, {useState} from "react";
import Item from "./item";
import AddBtn from "./addBtn";

const ListContainer = () => {

    const [items, setItems] = useState([]); //tu chyba nie powinien być Item (a cos w rodju prev.state

    const addItem = () => {
        setItems(prev => [...prev, {Item}])

        //przyklad 1.
        // const [components, setComponents] = useState(["Sample Component"]);
        // function addComponent() {
        //     setComponents([...components, "Sample Component"])

        //przyklad 2.
        // const handleRandom =() => {
        //     const randomColor = "#"+Math.floor(Math.random()*16000000).toString(16);
        //     setColors(prev=> [...prev, randomColor]);
        //     console.log(randomColor);
    }


    //tak też zadziała
//     return (
//         <div className='listContainer'>
//             <div>
//                 {items.map((element, i) => (<Item/>))}
//             </div>
//             <button onClick={addItem} className='addBtn'>+</button>
//         </div>
//     )
// }

    return (
        <div className='listContainer'>
            <div>
                {items.map((element, i) => (<Item/>))}
            </div>
            <AddBtn onPress={addItem}/>
        </div>
    )
}

export default ListContainer;