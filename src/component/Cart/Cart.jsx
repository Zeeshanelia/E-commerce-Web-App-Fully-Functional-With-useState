import img111 from '/images/img111.jpg';

const Cart = () => {

    return (<>
        <aside className="fixed top-0 right-0 h-screen w-full sm:w-[420px] bg-gradient-to-b from-gray-50 to-gray-100 z-50 shadow-2xl flex flex-col">

      {/* HEADER */}
      <header className="px-6 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-shopping-cart-2-line text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Your Cart</h1>
            <p className="text-xs opacity-80 flex items-center gap-1">
              <i className="ri-shopping-bag-3-line" />
              3 items
            </p>
          </div>
        </div>

        <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition hover:rotate-90 flex items-center justify-center">
          <i className="ri-close-line text-xl" />
        </button>
      </header>

      {/* ITEMS (SCROLL AREA) */}
      <section className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

        {/* ITEM CARD */}
        <div className="relative bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition group">
          <button className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition">
            <i className="ri-close-line text-sm" />
          </button>

          <div className="flex gap-4">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden shadow">
              <img
                src={img111}
                alt="product"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute -top-2 -left-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h2 className="font-bold text-gray-800">Running Shoes</h2>
                  <span className="font-bold text-purple-600">$129.99</span>
                </div>

                <p className="text-sm text-gray-500 mt-1">
                  Cushion technology for long runs
                </p>

                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <i key={i} className="ri-star-fill text-yellow-400 text-sm" />
                  ))}
                  <span className="text-xs text-gray-400 ml-1">(4.8)</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center bg-gray-50 border rounded-xl px-3 py-2 gap-3">
                  <button className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                    <i className="ri-subtract-line text-xs" />
                  </button>
                  <span className="font-bold text-gray-800">2</span>
                  <button className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-200">
                    <i className="ri-add-line text-xs" />
                  </button>
                </div>

                <button className="text-purple-600 hover:text-purple-800">
                  <i className="ri-heart-line text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 flex items-center justify-center gap-2">
          <i className="ri-shopping-cart-line" />
          Add more items to your cart
        </p>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-5 bg-white border-t">

        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 rounded-xl hover:shadow-lg transition flex items-center justify-center gap-2">
          Proceed to Checkout
          <i className="ri-arrow-right-line" />
        </button>

        <div className="flex gap-3 mt-3">
          <button className="flex-1 border rounded-xl py-3 text-gray-700 hover:bg-gray-50 flex items-center justify-center gap-2">
            <i className="ri-shopping-cart-2-line" />
            Continue
          </button>

          <button className="flex-1 border border-purple-200 text-purple-600 rounded-xl py-3 hover:bg-purple-50 flex items-center justify-center gap-2">
            <i className="ri-heart-line" />
            Save
          </button>
        </div>

        
        
      </footer>
    </aside>
    </>)
}

export default Cart











//   const [isOpen, setIsOpen] = useState(false);

 
     
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed top-5 right-5 z-40 bg-yellow-500 text-black px-4 py-2 rounded font-semibold"
//       >
//         Open Cart
//       </button>

     
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black/40 z-40"
//         />
//       )}

     
//       <div
//         className={`fixed top-0 right-0 h-full w-96 bg-yellow-500 z-50 transform transition-transform duration-300 ease-in-out
//         ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
       
//         <div className="flex items-center justify-between p-4 border-b">
//           <h1 className="text-2xl font-semibold text-black">Cart</h1>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="text-black text-xl font-bold"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="p-4 text-black">
//           <p>Your cart items will appear here.</p>
//         </div>
//       </div>
  
