import React from 'react'

export default function CartSectionCheckout() {
    return (
        <>
            <div className='w-full h-full flex flex-col'>
                <div className='h-1/3 w-full'>
                    <h1 className='p-2 font-normal text-2xl'>Price details</h1>
                </div>
                <div className='h-1/4 w-full flex justify-between p-4 border-y-2 border-dashed border-black'>
                    <span>Total amount</span>
                    <span>$400</span>
                </div>

                <div className='h-full w-full p-4 flex flex-col justify-evenly'>
                    <button className='w-full h-1/3 bg-black rounded-md'>Checkout</button>
                    <button className='w-full h-1/3 box-content border border-black bg-white text-black rounded-md'>Continue shopping</button>
                </div>
            </div>
        </>
    )
}
