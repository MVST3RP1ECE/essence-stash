import React from 'react'

export default function CartSectionItem() {
    return (
        <ul className='w-full h-1/5 mt-2 mb-2 pl-2 pt-2 bg-red-500'>
            <li className='flex'>
                <div>
                    <img className='w-20 h-20' src="https://fraguru.com/mdimg/perfume/375x500.46663.jpg" alt="" />
                </div>

                <div className='flex flex-col justify-center pl-2'>
                    <span> Mancera Red Tobacco </span>
                    <div className='flex justify-between'>
                        <span>120 ml.</span>
                        <span> $100</span>
                    </div>
                </div>
            </li>

            <div className='flex p-2'>
                <button className='italic flex items-center' type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black items-center"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                    <span className='pl-1'>Remove</span>
                </button>
            </div>

        </ul>
    )
}
