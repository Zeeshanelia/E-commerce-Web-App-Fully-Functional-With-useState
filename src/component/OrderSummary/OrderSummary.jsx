

const OrderSummary = ({ cart, subTotal, shipingFee, totalSummary }) => {
    return (
        <section className="fixed inset-0 z-30 bg-black/90 flex items-center justify-center">
            <div className="bg-zinc-100 w-xl p-6 rounded-xl shadow-2xl">

                <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex items-center justify-between shrink-0">

                    <h3 className="text-xl font-semibold flex items-center gap-3">
                        <i className="ri-file-list-3-line text-white text-xl" />
                        Order Summary
                    </h3>

                    <button
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-transform duration-300 hover:rotate-90 flex items-center justify-center"
                        aria-label="Close order summary"
                    >
                        <i className="ri-close-line text-2xl text-white" />
                    </button>

                </div>



                {/* content goes here */}

                <div>
                    <div >
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center justify-between">

                                <span className="py-2 text-zink-900"> {item.name}(X{item.quantity}) </span>

                                <span className="py-2 text-zink-900">
                                    ${item.price * item.quantity}
                                </span>
                            </div>
                        ))}
                    </div>



                    <div className="mt-4 py-6 bg-gray-100 border-t space-y-2 text-lg font-bold  ">

                        <div className="flex items-center justify-between ">
                            <span className="text-gray-600">Sub Total</span>
                            <span className="text-gray-600"> ${subTotal} </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-600">Shiping & Handling</span>
                            <span className="text-gray-600"> ${shipingFee} </span>
                        </div>

                        <div className="flex items-center justify-between ">
                            <span className="text-purple-600"> Total Of Order </span>
                            <span className="text-purple-600"> ${totalSummary} </span>
                        </div>

                        <div>



                            <button className='mt-4 border-t w-96 mx-auto  py-3 rounded-xl  flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-2xl transition'>
                                Proceed to Checkout
                                <i className="ri-arrow-right-line" />
                            </button>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrderSummary;
