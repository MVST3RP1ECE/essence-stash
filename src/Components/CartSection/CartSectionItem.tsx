import { useShopContext } from '../Context/ShopContextProvider'
import { item } from '../../Types/Types'

export default function CartSectionItem({ name, brand, url, price, volume, amount, keyId }: item) {

    if (keyId == undefined) {
        throw new Error("KeyID is undefined")
    }

    const context = useShopContext();
    return (
        <ul className='w-full h-1/5 mt-2 mb-2 pl-2 pt-2'>
            <li className='flex'>
                <div>
                    <img className='w-20 h-20 rounded-lg' src={url} alt="" />
                </div>

                <div className='flex flex-col justify-center pl-2'>
                    <span>{brand} {name}</span>
                    <div className='flex justify-between flex-col'>
                        <span>{volume} ml.</span>
                        <span>${price}</span>
                    </div>
                </div>
            </li>

            <div className='flex p-2'>
                <button className='italic rounded-lg flex items-center'
                    onClick={() => context.deleteFromCart(keyId)} type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 items-center"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    <span className='pl-1 text-red-500'>Remove</span>
                </button>
                <div className='pl-8 flex'>
                    <input
                        className='w-8 h-8 rounded-lg cursor-pointer ease-linear duration-100 hover:bg-shopCartAccent'
                        type="button"
                        value="-"
                        onClick={() => context.minusOneFromCart(keyId!)} />

                    <span className='w-8 h-8 flex justify-center items-center text-shopCartAccent'>{amount}</span>

                    <input
                        className='w-8 h-8 rounded-lg cursor-pointer ease-linear duration-100 hover:bg-shopCartAccent'
                        type="button"
                        value="+"
                        onClick={() => context.addToCart(keyId!)} />
                </div>
            </div>

        </ul>
    )
}
