import React from 'react'
import CartSectionItem from './CartSectionItem'
import CartSectionCheckout from './CartSectionCheckout'

export default function CartSection() {
    return (
        <section className='w-full h-full flex flex-col justify-center items-center bg-indigo-500'>
            <h1 className='text-start flex font-semibold p-4 text-3xl'>Shoping Cart</h1>
            <div className='w-4/5 h-full flex'>

                <section className='h-full w-3/4 bg-cyan-300'>
                    <CartSectionItem />
                    <CartSectionItem />
                    <CartSectionItem />
                    <CartSectionItem />

                </section>

                <section className='h-1/3 w-1/3 ml-5 flex bg-green-500'>
                    <CartSectionCheckout />
                </section>

            </div>
        </section>
    )
}
