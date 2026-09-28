// // // // import React, { useEffect } from 'react'
// // // // import { useState } from 'react'
// // // // import { useLocation } from 'react-router-dom'

// // // // function SearchResult() {
// // // //     const [results,setresults]=useState("")
// // // // const query=new URLSearchParams(useLocation().search).get("query")
// // // // const [loading,setloading]=useState(true)
// // // // console.log(query)
// // // // useEffect(()=>(
// // // //       const fetchResults= async () => 
// // // //     return {


// // // //           try{
// // // //             const res=await fetch(
// // // //                 `https://dummyjson.com/products/search?q=${query}`
// // // //             )
// // // //             const data=await res.json()
// // // //             setresults(data.products || [])

// // // //         }catch(erro){
// // // //             console.error("search error ",erro)
// // // //         }finally{
// // // //             setloading(false)
// // // //         }
// // // //     }

// // // //    if(query) fetchResults()

// // // // ),[query])
// // // //   return (
// // // //     <div>SearchResult</div>
// // // //   )
// // // // }

// // // // export default SearchResult
// // // /////////////////////////////////////////////////////////////////////

// // // import React, { useEffect, useState } from "react";
// // // import { useLocation } from "react-router-dom";
// // // import PageTransition from "../pages/CategoryPage/CategoryPage"
// // // import Products from "../components/slideProducts/Products";
// // // function SearchResult() {
// // //     const [results, setResults] = useState([]);
// // //     const [loading, setLoading] = useState(true);

// // //     const location = useLocation();


// // //     const query = new URLSearchParams(location.search).get("query");
// // //     console.log(results)

// // //     useEffect(() => {
// // //         const fetchResults = async () => {
// // //             try {
// // //                 const response = await fetch(
// // //                     `https://dummyjson.com/products/search?q=${query}`
// // //                 );

// // //                 const data = await response.json();

// // //                 setResults(data.products || []);
// // //             } catch (error) {
// // //                 console.error("Search error:", error);
// // //                 // setResults([]);
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };

// // //         if (query) {
// // //             fetchResults();
// // //         }
// // //     }, [query]);

// // //     // if (loading) {
// // //     //     return <div>Loading...</div>;
// // //     // }

// // //     return (
// // //         <PageTransition key={query}>
// // //             <div className="category_products">
// // //                 <div className="container">
// // //                     <div className="top_slide">
// // //                         <h2>Results for :{query}</h2>
                         
// // //                     </div>
// // //                     <div className="products">
// // //                         {results.map((item, index) => {
// // //                             return <Products item={item} key={index} />
// // //                         })}
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </PageTransition>
// // //     );
// // // }

// // // export default SearchResult;
// // /////////////////////////////////////////////////////////////////////

// // import React, { useEffect, useState } from "react";
// // import { useLocation } from "react-router-dom";
// // import PageTransition from "./CategoryPage/CategoryPage"
// // import Products from "../components/slideProducts/Products";
// // // import Products from "./CategoryPage";

// // function SearchResult() {
// //     const [results, setResults] = useState([]);
// //     // const [loading, setLoading] = useState(true);

// //     const location = useLocation();

// //     const query = new URLSearchParams(location.search).get("query");

// //     useEffect(() => {
// //         const fetchResults = async () => {
// //             try {
// //                 const response = await fetch(
// //                     `https://dummyjson.com/products/search?q=${query}`
// //                 );

// //                 const data = await response.json();

// //                 setResults(data.products || []);
// //             } catch (error) {
// //                 console.error("Search error:", error);
// //                 setResults([]);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         if (query) {
// //             fetchResults();
// //         } 
// //     }, [query]);

// //     // if (loading) {
// //     //     return <div>Loading...</div>;
// //     // }

// //     return (
// //         <PageTransition key={query}>
// //             <div className="category_products">
// //                 <div className="container">

// //                     <div className="top_slide">
// //                         <h2>
// //                             Results for: {query}
// //                         </h2>
// //                     </div>

// //                     <div className="products">
// //                         {/* {results.map > 0 ? (
// //                             results.map((item) => (
// //                                 <Products
// //                                     item={item}
// //                                     key={index}
// //                                 />
// //                             ))
// //                         ) : (
// //                             <p>No products found.</p>
// //                         )} */}
// //                         {results.map((item,index)=>(
// //                             <Products item={item} key={index}/>
// //                         ))}
// //                     </div>

// //                 </div>
// //             </div>
// //         </PageTransition>
// //     );
// // }

// // export default SearchResult;
// ///////////////////////////////////////////////////////////////////////////////////////////////

// // import React, { useEffect, useState } from "react";
// // import { useLocation } from "react-router-dom";

// // import Products from "../components/slideProducts/Products";
// // import PageTransition from "../components/PageAnmation";

// // function SearchResult() {
// //     const [results, setResults] = useState([]);
// //     const [loading, setLoading] = useState(true);

// //     const location = useLocation();

// //     const query = new URLSearchParams(location.search).get("query");

// //     useEffect(() => {
// //         const fetchSearchResults = async () => {
// //             try {
// //                 setLoading(true);

// //                 const response = await fetch(
// //                     `https://dummyjson.com/products/search?q=${encodeURIComponent(
// //                         query
// //                     )}`
// //                 );

// //                 const data = await response.json();

// //                 setResults(data.products || []);
// //             } catch (error) {
// //                 console.error("Search results error:", error);
// //                 setResults([]);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         if (query) {
// //             fetchSearchResults();
// //         } else {
// //             setResults([]);
// //             setLoading(false);
// //         }
// //     }, [query]);

// //     return (
// //         <PageTransition key={query}>
// //             <div className="category_products">
// //                 <div className="container">

// //                     <div className="top_slide">
// //                         <h2>
// //                             Search Results for: {query || "All Products"}
// //                         </h2>

// //                         <p>
// //                             {results.length} products found
// //                         </p>
// //                     </div>

// //                     {loading ? (
// //                         <p>Loading...</p>
// //                     ) : (
// //                         <div className="products">
// //                             {results.length > 0 ? (
// //                                 results.map((item) => (
// //                                     <Products
// //                                         item={item}
// //                                         key={item.id}
// //                                     />
// //                                 ))
// //                             ) : (
// //                                 <p>No products found.</p>
// //                             )}
// //                         </div>
// //                     )}

// //                 </div>
// //             </div>
// //         </PageTransition>
// //     );
// // }

// // export default SearchResult;
// ///////////////////////////////////////////////////////////////////////////////////////////

// // import React, { useEffect, useState } from "react";
// // import { useLocation } from "react-router-dom";

// // import Products from "../components/slideProducts/Products";
// // import PageTransition from "../components/PageAnmation";

// // function SearchResult() {
// //     const [results, setResults] = useState([]);

// //     const location = useLocation();

// //     const query = new URLSearchParams(location.search).get("query");
// // console.log(results)
// //     useEffect(() => {
// //         if (!query) return;

// //         fetch(`https://dummyjson.com/products/search?q=${query}`)
// //             .then((res) => res.json())
// //             .then((data) => {
// //                 setResults(data.products || []);
// //             })
// //             .catch((error) => {
// //                 console.error("Search error:", error);
// //             });
// //     }, [query]);

// //     return (
// //         <PageTransition>
// //             <div className="category_products">
// //                 <div className="container">

// //                     <div className="top_slide">
// //                         <h2>Results for: {query}</h2>
// //                     </div>

// //                     <div className="products">
// //                         {results.map((item) => (
// //                             <Products
// //                                 item={item}
// //                                 key={item.id}
// //                             />
// //                         ))}
// //                     </div>

// //                 </div>
// //             </div>
// //         </PageTransition>
// //     );
// // }

// // export default SearchResult;


// ////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Products from "../components/slideProducts/Products";
import PageTransition from "../components/PageAnmation";

function SearchResult() {
    const [results, setResults] = useState([]);

    const location = useLocation();

    // Get search query from URL
    const query = new URLSearchParams(location.search).get("query");

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        fetch(
            `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
        )
            .then((res) => res.json())
            .then((data) => {
                setResults(data.products || []);
            })
            .catch((error) => {
                console.error("Search error:", error);
                setResults([]);
            });
    }, [query]);

    return (
        <PageTransition>
            <div className="category_products">
                <div className="container">

                    <div className="top_slide">
                        <h2>
                            Results for: {query || "All Products"}
                        </h2>
                    </div>

                    <div className="products">
                        {results.length > 0 ? (
                            results.map((item) => (
                                <Products
                                    item={item}
                                    key={item.id}
                                />
                            ))
                        ) : (
                            <p>No products found.</p>
                        )}
                    </div>

                </div>
            </div>
        </PageTransition>
    );
}

export default SearchResult;

