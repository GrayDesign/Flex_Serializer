import React, {useState, useEffect} from "react";
import Item from "./item";
import AddBtn from "./addBtn";
import AddBtnSquare from "./addBtnSquare";
import ItemAddModal from "./itemAddModal";
import {db} from '../../firebase';
import {collection, getDocs, addDoc, deleteDoc, doc} from "firebase/firestore";
import {FaInfoCircle, FaTrashAlt} from "react-icons/fa";
import {FiEdit} from "react-icons/fi";


//<------wersja z data base  !! Pokazać formularz !! ------->
const ListContainer = () => {

    const [newTitle, setNewTitle] = useState("");
    const [newSeason, setNewSeason,] = useState("");
    const [newChapter, setNewChapter] = useState(0);
    const [newInfo, setNewInfo] = useState("");


    const [items, setItems] = useState([]);
    const itemsCollectionRef = collection(db, 'items');


    const createItem = async () =>  {
        await addDoc(itemsCollectionRef,{ title: newTitle, season: newSeason, chapter: Number(newChapter), info: newInfo });
    }


    useEffect(() => {
        const getItems = async () => {
            const data = await getDocs(itemsCollectionRef);
            console.log(data);
            setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));//pozwalama bardziej przejrzysty wgląd w dane
            console.log(data.docs);
        }
        getItems();
    }, []);

    return (
        <div className='listContainer'>

            <div className='item' style={{height: '100px'}}>
                {items.map((item) => {
                    return (
                        <div className='block'>
                            <span className='title'>{item.title}</span>
                            <div className='part'>
                                <span className='chapter'>{item.season}</span>
                                <span>Chapter: {item.chapter} </span>
                            </div>
                        </div>
                    )
                })}
                <div className='icons'>
                    <FaInfoCircle className='icon'/>
                    <FiEdit className='icon'/>
                    <FaTrashAlt className='icon'/>
                </div>
            </div>
            <div>
                <input placeholder="Title..." onChange={(event) => {setNewTitle(event.target.value);}}/>
                <input placeholder="Season..." onChange={(event) => {setNewSeason(event.target.value);}}/>
                <input placeholder="Chapter..." onChange={(event) => {setNewChapter(event.target.value);}}/>
                <input placeholder="Info..." onChange={(event) => {setNewInfo(event.target.value);}}/>

                <button onClick={createItem}>Add title</button>
            </div>
        </div>
    )
}

export default ListContainer;


//<-----Wersjią z modalem ---->
// const ListContainer = () => {
// const [show, setShow] = useState(false);
// const handleShow = () => {
//     setShow(true); //normalnie ma być na true, ale ponieważ mi chowanie modala nie dziala,to zrobię na false
// }
//
// const [items, setItems] = useState([]);
// const itemsCollectionRef = collection(db, 'items');
//
// useEffect(() => {
//     const getItems = async () => {
//         const data = await getDocs(itemsCollectionRef);
//         console.log(data);
//         setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));//pozwalama bardziej przejrzysty wgląd w dane
//         console.log(data.docs);
//     }
//     getItems();
// }, []);
//
// return (
//     <div className='listContainer'>
//         { show && <ItemAddModal /> }
//         <AddBtn onPress={handleShow }/>
//         <AddBtnSquare onPress={handleShow }/>
//
//     </div>
// )
// }
//
// export default ListContainer;


// // <------wersjia startowa do pokazania jak ma wyglądać----->
// const ListContainer = () => {
//
//     const [items, setItems] = useState([]);
//
//     const addItem = () => {
//         setItems(prev => [...prev, {Item}])
//
//     }
//
//     return (
//         <div className='listContainer'>
//             <div>
//                 {items.map((element, i) => (<Item/>))}
//             </div>
//             <AddBtn onPress={addItem}/>
//             <AddBtnSquare onPress={addItem}/>
//         </div>
//     )
// }
//
// export default ListContainer;


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


//przyklad 1.
// const [components, setComponents] = useState(["Sample Component"]);
// function addComponent() {
//     setComponents([...components, "Sample Component"])

//przyklad 2.
// const handleRandom =() => {
//     const randomColor = "#"+Math.floor(Math.random()*16000000).toString(16);
//     setColors(prev=> [...prev, randomColor]);
//     console.log(randomColor)


//<-----wersjia tylko poglądowa----->
// return (
//     <div className='listContainer'>
//         {items.map((item)=> {
//             return <div className='item'>
//                 <div className='block'>
//                     <span className='title'>{item.title}</span>
//                     <div className='part'>
//                         <span className='chapter'>{item.season}</span>
//                         <span className='chapter'>{item.chapter}</span>
//                     </div>
//                 </div>
//
//                 {/*<span>{item.title}</span>*/}
//                 {/*<span>{item.season}</span>*/}
//                 {/*<span>{item.chapter}</span>*/}
//                 <div className='icons'>
//                     <FaInfoCircle className='icon'/>
//                     <FiEdit className='icon'/>
//                     <FaTrashAlt className='icon'/>
//                 </div>
//             </div>
//         })}
//     </div>