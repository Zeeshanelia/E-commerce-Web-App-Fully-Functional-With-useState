import { useState } from "react"
import ProductsList from "./../Products/ProductList"

const Products = ({ searchedProduct }) => {
    const catog = ["All", "Women", "Men", "Kids", "Fresh Arrival", "Sales Mela"]
    const [isActive, setIsActive] = useState("All")
    const filterItems = ProductsList.filter((item) => {

        const matchedCatog =
            (isActive === "All") ||
            (isActive === "Fresh Arrival" && item.freshArrival) ||
            (isActive === "Sales Mela" && item.salesMela) ||
            (isActive === item.category)



        const matchedSearching = item.name.toLowerCase().includes(searchedProduct.toLowerCase())
        return matchedCatog && matchedSearching

    })




    const renderingProducts = filterItems.map((item) => {
        // if (isActive === "All") return true;
        return <div>
            <div>
                <div className=" w-full border-1 border-gray-200 rounded-lg p-1 hover:shadow-lg hover:scale-105 transition-transform duration-300">

                    <div className="flex justify-between items-center mb-1 px-2">
                        <button > <i className="ri-user-heart-fill text-red-500 text-2xl"></i>
                        </button>

                        {
                            (item.salesMela || item.freshArrival) && (
                                <span
                                    className={`font-bold p-2 py-1 text-black text-xs rounded ${item.salesMela ? "bg-purple-400" : "bg-green-500"}`}>
                                    {item.salesMela ? "Sale" : "New"}
                                </span>
                            )
                        }
                    </div>

                    <img src={item.img} alt={item.name} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>


                    <div className="flex items-center  justify-between px-4">
                        <span className="text-blue-600 font-semibold text-xl">${item.price.toFixed(2)}</span>

                        <span className="text-gray-500 line-through">$ {item.oldPrice}</span>
                    </div>


                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                        Add to Cart
                    </button>

                </div>
            </div>
        </div>
    });


    return (<>
        <section id="product-section" className="max-w-[79rem] mx-auto px-10 mt-10 mb-10">

            <div className="flex  justify-center gap-6 items-center ">
                {catog.map((item, index) => (

                    <div key={index} >
                        <button className={`text-zink-500 font-semibold  hover:bg-blue-400 px-4 py-1 rounded-xl hover:scale-125 transition-translate duration-300 
                            ${isActive === item ? "bg-blue-400" : "bg-gray-300"}`
                        } onClick={() => setIsActive(item)}>
                            {item} </button>
                    </div>
                ))}

            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-6">
                {filterItems.length === 0 ? (
                    <div className="col-span-full flex justify-center items-center">
                        <p className="mt-10 text-gray-400 font-semibold border p-3 rounded">
                            No Product Found
                        </p>
                    </div>
                ) : (
                    renderingProducts
                )}
            </div>

        </section>
    </>)
}

export default Products