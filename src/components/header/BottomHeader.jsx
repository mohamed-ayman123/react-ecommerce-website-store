// import React, { useEffect, useState } from 'react'
// import { BsList, BsChevronDown, BsBoxArrowInRight, BsPersonPlus } from "react-icons/bs";
// import { Link, useLocation } from 'react-router-dom';

// const navLinks = [{ title: "Home", link: "/" },
// { title: "About", link: "/about" },
// {
//   title: "Accessories", link: "/accessories"
// },
// {
//   title: "Blog", link: "/blog"
// }, {
//   title: "Contact", link: "/contact"
// }

// ]

// function BottomHeader() {
//   const location = useLocation()
//   const [categories, setcategories] = useState([])
//   const [isCategoryOpen, setisCategoryOpen] = useState(false)
//   useEffect(() => {
//     fetch('https://dummyjson.com/products/categories').then((res) => res.json()).then((data) => setcategories(data))
//   }, [])
//   console.log(isCategoryOpen)
//   return (
//     <div className='btm_header'>
//       <div className="container">
//         <nav className="nav">
//           <div className="category_nav" onClick={()=>setisCategoryOpen(!isCategoryOpen)}>
//             {/* <div className="category_btn">
//               <BsList />
//               <p>Brows category</p>
//               <BsChevronDown />


//             </div> */}
//             <div className="category_nav">
//   <div
//     className="category_btn"
//     onClick={() => setisCategoryOpen(!isCategoryOpen)}
//   >
//     <BsList />
//     <p>Browse category</p>
//     <BsChevronDown />
//   </div>

//   <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}>
//     {categories.map((category) => (
//       <Link key={category.slug} to={category.slug}>
//         {category.name}
//       </Link>
//     ))}
//   </div>
// </div>
//             {/* <div className={`category_nav_list $(isCategoryOpen ?"active":"")`}> */}
//             <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}>

//               {/* {categories.map((category) => {
//                 <Link to={category.slug}>{category.name}</Link>
//               })} */}
//               {categories.map((category) => (
//                 <Link key={category.slug} to={category.slug}>
//                   {category.name}
//                 </Link>
//               ))}
//             </div>

//           </div>
//           <div className="nav_links">
//             {/* {navLinks.map((item) => (<Link to={item.link}>{item.title}</Link>))} */}

//             {/* {navLinks.map((item) => (
//             <li className={location.pathname===item.link ?"active":""}>
//                 <Link key={item.title} to={item.link}>
//                 {item.title}
//               </Link>
//             </li>
//             ))} */}
//             {navLinks.map((item) => (
//               <li
//                 key={item.title}
//                 className={location.pathname === item.link ? "active" : ""}
//               >
//                 <Link to={item.link}>
//                   {item.title}
//                 </Link>
//               </li>
//             ))}
//           </div>
//         </nav>
//         <div className="sign_regs_icons">
//           <Link to="/"><BsBoxArrowInRight /></Link>
//           <Link to="/"><BsPersonPlus /></Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default BottomHeader
//////////////////////////////////////////////
import React, { useEffect, useState } from "react"; import { BsList, BsChevronDown, BsBoxArrowInRight, BsPersonPlus, } from "react-icons/bs";
 import { Link, useLocation } from "react-router-dom"; 
 const navLinks = [{ title: "Home", link: "/" }, { title: "About", link: "/about" }, { title: "Accessories", link: "/accessories" }, { title: "Blog", link: "/blog" }, { title: "Contact", link: "/contact" },]; function BottomHeader() { const location = useLocation(); const [categories, setCategories] = useState([]);
    useEffect(()=>{setIsCategoryOpen(false)

    },[location])


     const [isCategoryOpen, setIsCategoryOpen] = useState(false); useEffect(() => { fetch("https://dummyjson.com/products/categories").then((res) => res.json()).then((data) => setCategories(data)); }, []); return (<div className="btm_header"> <div className="container"> <nav className="nav"> {/* Categories */} <div className="category_nav"> <div className="category_btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)} > <BsList /> <p>Browse category</p> <BsChevronDown /> </div> <div className={`category_nav_list ${isCategoryOpen ? "active" : ""}`} > {categories.map((category) => (<Link key={category.slug} to={`category/${category.slug}`} > {category.name} </Link>))} </div> </div> {/* Navigation Links */} <ul className="nav_links"> {navLinks.map((item) => (<li key={item.title} className={location.pathname === item.link ? "active" : ""} > <Link to={item.link}> {item.title} </Link> </li>))} </ul> </nav> {/* Login & Register */} <div className="sign_regs_icons"> <Link to="/login"> <BsBoxArrowInRight /> </Link> <Link to="/register"> <BsPersonPlus /> </Link> </div> </div> </div>); } export default BottomHeader;