import { useState } from 'react';
import Nav from '../Nav/Nav';
import Banner from './../Banner/Banner';
import Products from './../Products/Products'
import Cart from './../Cart/Cart'
import WishList from './../WishList/WishList'


const Home = () => {
    const [searchedProduct, setSearchedProduct] = useState('')
    const [activePanel, setActivePanel] = useState(null)
    const [cart, setCart] = useState([])

    const handleScrolling = () => {
        const section = document.getElementById("product-section")
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    // Card & WishList Fn
    const handlePanel = (tabName) => {
        setActivePanel(previous => (
            previous === tabName ? null : tabName
        ))
    }

    // handlClosePanel of Card & WishList 
    const handlClosePanel = () => setActivePanel(null)

    const addToCart = (product) => {
        setCart([...cart , product]);
          // setActivePanel(prev => prev === 'Cart' ? prev : 'Cart')
        setActivePanel('Cart');        // auto OPEN cart drawer when product adding 
    };



    return (<>

        <Nav handleScrolling={handleScrolling}
            setSearchedProduct={setSearchedProduct}
            handlePanel={handlePanel} />

        <Banner />


        {/* Use item — the current product in the .map() iteration , Wrap in an arrow function () => addToCart(item) so that it passes the product on click */}
        <Products searchedProduct={searchedProduct}
            addToCart={addToCart} />


        <Cart activePanel={activePanel}
            handlClosePanel={handlClosePanel}
            cart={cart}
        />


        <WishList handlClosePanel={handlClosePanel} activePanel={activePanel} />
    </>)
}

export default Home