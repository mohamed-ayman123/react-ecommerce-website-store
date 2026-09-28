import { Route, Routes } from "react-router-dom"
import BottomHeader from "./components/header/BottomHeader"
import TopHeader from "./components/header/TopHeader"
import SlideProduct from "./components/slideProducts/SlideProduct"
import Home from "./pages/home/Home"
import ProductDetails from "./pages/productDetails/ProductDetails"
import Cart from "./pages/cart/Cart"
import { Toaster } from "react-hot-toast"
import { AnimatePresence } from "framer-motion"
import CategoryPage from "./pages/CategoryPage/CategoryPage"
import SearchResult from "./pages/SearchResult"


function App() {


  return (
    <>
      <header>
        <TopHeader />
        <BottomHeader />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(204, 204, 238, 0.91)",
            borderRadius: "5px",
            padding: "14px"
          }
        }}
      />
      <SlideProduct />
      <AnimatePresence mode="wait">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          {/* <Route path="/search/:category" element={<SearchResult />} /> */}
          <Route path="/search" element={<SearchResult />} />
          <Route path="/category/:category" element={<CategoryPage />} />
            {/* path=""
    element={<CategoryPage />} */}
          {/* <Route path="/search/:{item.id}" element={<SearchResult />} /> */}
    
        </Routes>
      </AnimatePresence>


    </>
  )
}

export default App
