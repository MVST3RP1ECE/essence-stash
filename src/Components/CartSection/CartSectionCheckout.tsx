import { Link } from 'react-router-dom'
interface ItotalProps {
    amount: number
}

export default function CartSectionCheckout({ amount }: ItotalProps) {
    return (
        <>
            {amount > 0 ?
                <div className='w-full h-full flex flex-col'>
                    <div className='h-1/3 w-full'>
                        <h1 className='p-2 font-normal text-2xl'>Price details</h1>
                    </div>
                    <div className='h-1/4 w-full flex justify-between p-2 border-y-2 border-dashed border-black'>
                        <span className='flex items-center'>Total amount</span>
                        <span className='flex items-center text-shopCartAccent text-3xl'>${amount}</span>
                    </div>

                    <div className='h-full w-full p-4 flex flex-col justify-evenly'>
                        <button className='w-full h-1/3 bg-black rounded-md'>Checkout</button>

                        <Link className='h-1/3 w-full' to={"/"}>
                            <button
                                className='w-full h-full box-content border border-black bg-white text-black rounded-md'>
                                Continue shopping
                            </button>
                        </Link>
                    </div>
                </div> :
                <div className='w-full h-full flex flex-col'>
                    <h2 className='font-semibold text-3xl text-center'>Your shopping cart is empty</h2>
                    <Link className='h-1/6 w-full pt-2' to={"/"}>
                        <button
                            className='w-full h-full box-content border border-black bg-white text-black rounded-md'>
                            To shop
                        </button>
                    </Link>
                </div>
            }
        </>
    )
}
