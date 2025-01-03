"use client"

import Image from "next/image";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartDropdown = () => {

  const cartItems: CartItem[] = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 2
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      quantity: 1
    }
  ]

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {cartItems.length === 0 ? (
        <p className="text-center text-sm">Cart is empty</p>
      ):(
          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-semibold">
              Shopping Cart
            </h2>
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <Image 
                  src="https://images.unsplash.com/photo-1486401899868-0e435ed85128?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="product" 
                  width={72} 
                  height={96} 
                  className="object-cover rounded-md" 
                />
                <div className="flex flex-col justify-between w-full">
                  {/* TOP */}
                  <div>
                    {/* TITLE */}
                    <div className="flex items-center justify-between gap-8">
                      <h3 className="font-semibold">{item.name}</h3>
                      <div className="p-1 bg-gray-50 rounder-sm">${item.price}</div>
                    </div>
                    {/* DESCRIPTION */}
                    <div className="text-sm text-gray-500">
                      Available
                    </div>
                  </div>

                  {/* BOTTOM */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty: {item.quantity}</span>
                    <button className="text-blue-500">Remove</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>$300</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 mb-4">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="flex items-center justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                  View Cart
                </button>
                <button className="rounded-md py-3 px-4 bg-black text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
      )}    
    </div>
  )
}

export default CartDropdown