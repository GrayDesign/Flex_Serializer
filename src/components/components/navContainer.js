import React from "react";
//import Categories from "./categories";
//import select from 'react-select';
import {useState} from "react";
import AddBtnSquare from "./addBtnSquare";



const NavContainer = () => {

   // const Categories = () => {
        const [category, setCategory] = useState();

        const handleCategoryChange = (e) => {
            setCategory(e.target.value)
        }

    return (
        <div className='navContainer'>
            <form>
                <select value={category} onChange={handleCategoryChange} className='categories'>
                    <option value="TVSeries">TV Series</option>
                    <option value="Movies">Movies</option>
                    <option value="Books">Books</option>
                    <option value="ComicBooks">Comic Books</option>
                    <option value="Audiobooks">Audiobooks</option>
                </select>
            </form>
        </div>
    )
}

export default NavContainer;