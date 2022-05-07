import React, {useState, useEffect} from "react";
import {db} from '../../firebase'
import {doc, setDoc} from "firebase/firestore";

const ItemAddModal = () => {

    const [title, setTitle] = useState("");
    const [season, setSeason] = useState("");
    const [chapter, setChapter] = useState("");
    const [info, setInfo] = useState("");

    //const [loader, setLoader] = useState(false);


        const alertBtn = {
            color: '#F05107',
            backgroundColor: 'white'

        }
        const textAreaStyle = {
            width: '100%'
        }
        return (
            <div className='modalBackground'>
                <div className='aModalContainer'>
                    <form className="form" >

                        <label>Add Title</label>
                        <input
                            placeholder="Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label>Add part or season </label>
                        <input
                            placeholder="e.g.  Part 2 or season 2"
                            value={season}
                            onChange={(e) => setSeason(e.target.value)}
                        />

                        <label>Add chapter or episode </label>
                        <input
                            placeholder="e.g.  Ep. 2 or Ch. 7"
                            value={chapter}
                            onChange={(e) => setChapter(e.target.value)}
                        />

                        <label>Info</label>
                        <textarea style={{textAreaStyle}}
                                  placeholder="Write some info or comments "
                                  value={info}
                                  onChange={(e) => setInfo(e.target.value)}
                        > </textarea>
                        <div>
                            <button type="submit" className='btnModal'>Save</button>
                            <button className='btnModal' style={alertBtn}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    export default ItemAddModal;

// const [title, setTitle] = useState("");
// const [season, setSeason] = useState("");
// const [chapter, setChapter] = useState("");
// const [info, setInfo] = useState("");
//
// const [loader, setLoader] = useState(false);
//
// const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoader(true);
//
//     db.collection("items")
//         .add({
//             title: title,
//             season: season,
//             chapter: chapter,
//             info: info,
//         })
//         .then(() => {
//             setLoader(false);
//             alert("New Title has been submitted👍");
//         })
//         .catch((error) => {
//             alert(error.info);
//             setLoader(false);
//         });
//
//
//
//     setTitle("");
//     setSeason("");
//     setChapter("");
//     setInfo("");
// };
