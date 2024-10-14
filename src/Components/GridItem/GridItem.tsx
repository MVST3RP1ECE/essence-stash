import React from 'react'
import handleClickAddToCart from '../../Functions/handleClickAddToCart'
interface ItemProps {
    brand: string,
    name: string,
    url: string,
    keyId?: number,
    bgColorCartBtn?: string,
    price: number,
    volume: string,
}



export default function GridItem(props: ItemProps): React.JSX.Element {
    return (
        <div className="box-border border-black bg-white text-black w-full h-full border-2 rounded-3xl gap-4 flex flex-col items-center">
            <img className='block w-4/5 h-2/3 pt-4' src={props.url} alt="" />
            <div className='w-full h-full flex flex-col justify-around'>
                <ul className='pl-3 pr-3 pb-1'>
                    <li className='text-2xl font-bold'>{props.brand}</li>
                    <li className='text-xl'>{props.name}</li>
                    <li className='flex justify-between'>
                        <span className='italic'>{props.volume} vol.</span>
                        <span className='font-bold'>${props.price}</span>
                    </li>
                </ul>
                <button
                    className='bg-purple-500 rounded-bl-3xl rounded-br-3xl w-full h-full text-white'
                    onClick={handleClickAddToCart}>Add to cart</button>
            </div>
        </div>
    )
}
