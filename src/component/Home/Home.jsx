import { useState } from 'react';
import Nav from '../Nav/Nav';
import Banner from './../Banner/Banner';
import Products from './../Products/Products'
import Cart from './../Cart/Cart'
import WishList from './../WishList/WishList'


const Home = () => {
    const [searchedProduct, setSearchedProduct] = useState('')

    const handleScrolling = () => {
        const section = document.getElementById("product-section")
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }


    return (<>

        <Nav handleScrolling={handleScrolling}
            setSearchedProduct={setSearchedProduct} />
        <Banner />
        <Products searchedProduct={searchedProduct} />
        <Cart />
        {/* <WishList /> */}
    </>)
}

export default Home