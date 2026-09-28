import React, { useEffect, useState } from 'react'
import HomeSlider from '../../components/header/HomeSlider'
import "./home.css"
import SlideProduct from '../../components/slideProducts/SlideProduct'
import PageTransition from "../../components/PageAnmation"
const categories = ["smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "mens-watches",
  "sports-accessories"]



function Home() {
  const [products, setproducts] = useState({})
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await res.json()
            return {
              [category]: data.products
            }
          })
        )
        const productsData = Object.assign({}, ...results)
        setproducts(productsData)
      } catch (err) {
        console.error("error fetching", err)
      }
    }
    fetchProducts()
  }, [])
  // console.log(products)
  return (
    <PageTransition>
      <div>
      <HomeSlider />



      {categories.map((category) => (
        <SlideProduct
          key={category}
          data={products[category]}
          title={category.replace("-"," ")}
        />
      ))}

    </div>
    </PageTransition>
  )
}

export default Home