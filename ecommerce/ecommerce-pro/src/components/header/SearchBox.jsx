// import React, { useState } from 'react'
// import { BsSearch } from 'react-icons/bs'
// import { useNavigate } from 'react-router-dom'

// function SearchBox() {
//     const [searchTerm,setsearchTerm]=useState("")
//     const navigate=useNavigate()
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         if(searchTerm.trim()){
//         navigate(`/search?Query=${encodeURIComponent(searchTerm.trim())}`)
//         }

//     }
//     return (
//         <div className='searchBox_container'>

//             <form onSubmit={handleSubmit} className="search_box">
//                 <input type="text" name='search' id='search' placeholder='search for products' onChange={(e)=>setsearchTerm(e.target.value)} />
//                 <button type='submit'> <BsSearch /> </button>
//             </form>
//         </div>
//     )
// }

// export default SearchBox
///////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate,Link, useLocation } from "react-router-dom";

function SearchBox() {
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();
    const [suggestion, setsuggestion] = useState([])
    const location = useLocation()


    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm.trim()) {
            navigate(
                `/search?query=${encodeURIComponent(searchTerm.trim())}`
            );
        }
    };

    // useEffect(()=>{
    //     const fetchSuggestion =async () => {
    //         try{
    //             const res=await fetch(
    //                  `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`
    //             )
    //             const data =await res.json()
    //             setsuggestion(data.products.slice(0,5) || []);
    //         }  catch((error) => {
    //             console.error("Search error:", error);
    //             setsuggestion([])

    //         });
    //     }
    //     const delayed=setTimeout(() => {
    //         fetchSuggestion()

    //     }, 300);
    //     return () => clearTimeout(delayed)
    // },[searchTerm])
    // console.log(suggestion)
    //////////////////////////////
    useEffect(() => {
        const fetchSuggestion = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`
                );

                const data = await res.json();

                setsuggestion(data.products?.slice(0, 5) || []);
            } catch (error) {
                console.error("Search error:", error);
                setsuggestion([]);
            }
        };

        if (!searchTerm.trim()) {
            setsuggestion([]);
            return;
        }

        const delayed = setTimeout(() => {
            fetchSuggestion();
        }, 300);

        return () => clearTimeout(delayed);
    }, [searchTerm]);

    console.log(suggestion);
    useEffect(()=>{
        setsuggestion([]);

    },[location])






    return (
        <div className="searchBox_container">

            <form
                onSubmit={handleSubmit}
                className="search_box"
            >
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for products"
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                    autoComplete="off"
                />

                <button type="submit">
                    <BsSearch />
                </button>
            </form>
            {/* {suggestion.length >0 &&(
                <ul className="suggestions">
                    {suggestion.map((item)=>{
                        <li key={item.id}>
                            {item.title}

                        </li>

                    })}
                </ul>
            )} */}
            {/* Suggestions */}
            {suggestion.length > 0 && (
                <div className="search_suggestions">

                    {suggestion.map((item) => (
                        //    <Link to= {`/products/${item.id}`}>
                        //      <div
                        //         className="suggestion_item"
                        //         key={item.id}
                        //     >
                        //         <img
                        //             src={item.thumbnail}
                        //             alt={item.title}
                        //         />

                        //         <span>
                        //             {item.title}
                        //         </span>
                        //     </div>
                        //    </Link>
                           <Link
                            key={item.id}
                            to={`/products/${item.id}`}
                            className="suggestion_link"
                        >
                            <div className="suggestion_item">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                />

                                <span>{item.title}</span>
                            </div>
                        </Link>
                    ))}

                </div>
            )}




        </div>
    );
}

export default SearchBox;

