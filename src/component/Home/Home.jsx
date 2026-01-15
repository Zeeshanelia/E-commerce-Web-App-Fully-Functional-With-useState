import { useState } from 'react';
import Nav from '../Nav/Nav';
import Banner from './../Banner/Banner';
import Products from './../Products/Products'
import Cart from './../Cart/Cart'
import WishList from './../WishList/WishList'
import OrderSummary from './../OrderSummary/OrderSummary'
import OrderPlaced from './../OrderPlaced/OrderPlaced'

const Home = () => {
    const [searchedProduct, setSearchedProduct] = useState('')
    const [activePanel, setActivePanel] = useState(null)
    const [cart, setCart] = useState([])
    const [ orderSummary , setOrderSummary] = useState(false)
    const [ orderPlaced , setOrderPlaced] = useState(false)

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

    // handlClosePanel button of Card & WishList 
    const handlClosePanel = () => setActivePanel(null)


    const addToCart = (product) => {
        const multiProductFind = cart.find(Item => Item.id === product.id)
        if (multiProductFind) {
            alert("this item already added")
            return;
        }
        setCart([...cart, { ...product, quantity: 1 }]);
        // setActivePanel(prev => prev === 'Cart' ? prev : 'Cart')
        setActivePanel('Cart');  // auto OPEN drawer when product adding 
    };

    // remove items from cart
    const removeItem = (product) => {
        setCart(cart.filter(Item => Item.id !== product.id))
    }

    //  quantity increase
    const quantityIncrement = (product) => {
        setCart(cart.map((item) => (
            item.id === product.id ?
                { ...item, quantity: item.quantity + 1 } : item

        )))
    }

    // quantity decrease
    const quantityDecrease = (product) => {
        setCart(cart.map((item) => (
            item.id === product.id && item.quantity > 1 ?
                { ...item, quantity: item.quantity - 1 } : item
        )))
    }

    // SUMMARY  CALCULATE

    const subTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0)
    const shipingFee = totalItem * 2
    const totalSummary = subTotal + shipingFee

    return (<>
        <Nav handleScrolling={handleScrolling}
            setSearchedProduct={setSearchedProduct}
            handlePanel={handlePanel}
            totalItem={totalItem}
        />

        <Banner />


        {/* Use item — the current product in the .map() iteration , Wrap in an arrow function () => addToCart(item) so that it passes the product on click */}
        <Products
            searchedProduct={searchedProduct}
            addToCart={addToCart}
        />


        <Cart activePanel={activePanel}
            handlClosePanel={handlClosePanel}
            cart={cart}
            removeItem={removeItem}
            quantityIncrement={quantityIncrement}
            quantityDecrease={quantityDecrease}
            subTotal={subTotal}
            totalItem={totalItem}
            shipingFee={shipingFee}
            totalSummary={totalSummary}
            setOrderSummary={setOrderSummary}
        />


        <WishList
            handlClosePanel={handlClosePanel}
            activePanel={activePanel}

        />



        {/* OrderSummary */}

        { orderSummary &&   <OrderSummary
            cart={cart}
            subTotal={subTotal}
            shipingFee={shipingFee}
            totalSummary={totalSummary} 
            setOrderPlaced={setOrderPlaced}
            setOrderSummary={setOrderSummary}
            setCart={setCart}
            />
        }


         {orderPlaced && (
        <OrderPlaced setOrderPlaced={setOrderPlaced} />
      )}

    </>)
}

export default Home