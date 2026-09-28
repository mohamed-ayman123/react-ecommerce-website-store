import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../components/slideProducts/Products'
import "./categorypage.css"
import PageTransition from "../../components/PageAnmation"

function CategoryPage() {
    const {category}=useParams()
    // console.log(category)
    const [categoryProducts,setcategoryProducts]=useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/category/${category}`).then((res)=>res.json()).then((data)=>(
            setcategoryProducts(data.products)
        ))
    },[category])
    console.log(categoryProducts)
  return (
   <PageTransition key={category}>
     <div className="category_products">
        <div className="container">
             <div className="top_slide">
                    <h2>{category}</h2>
                    <p>Lorem, ipsum.</p>
                </div>
            <div className="products">
                {categoryProducts.map((item,index)=>{
                    return <Products item={item} key={index}/>
                })}
            </div>
        </div>
    </div>
   </PageTransition>
  )
}


export default CategoryPage



//////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import Products from "../../components/slideProducts/Products";
// import PageTransition from "../../components/PageAnmation";

// import "./categorypage.css";

// function CategoryPage() {
//     const { category } = useParams();

//     const [categoryProducts, setCategoryProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchCategoryProducts = async () => {
//             try {
//                 setLoading(true);

//                 const response = await fetch(
//                     `https://dummyjson.com/products/category/${category}`
//                 );

//                 const data = await response.json();

//                 setCategoryProducts(data.products || []);
//             } catch (error) {
//                 console.error("Category products error:", error);
//                 setCategoryProducts([]);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (category) {
//             fetchCategoryProducts();
//         }
//     }, [category]);

//     return (
//         <PageTransition key={category}>
//             <div className="category_products">
//                 <div className="container">

//                     <div className="top_slide">
//                         <h2>{category}</h2>
//                         <p>Explore our products</p>
//                     </div>

//                     {loading ? (
//                         <p>Loading...</p>
//                     ) : (
//                         <div className="products">
//                             {categoryProducts.length > 0 ? (
//                                 categoryProducts.map((item) => (
//                                     <Products
//                                         item={item}
//                                         key={item.id}
//                                     />
//                                 ))
//                             ) : (
//                                 <p>No products found.</p>
//                             )}
//                         </div>
//                     )}

//                 </div>
//             </div>
//         </PageTransition>
//     );
// }

// export default CategoryPage;
