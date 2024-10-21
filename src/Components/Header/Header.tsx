import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ children }: { children?: React.ReactNode }): React.JSX.Element {
    return (
        <>
            <nav className='min-h-1/10 w-full flex justify-center bg-gradient-to-b from-shopCartSecondary to-indigo-500'>
                <div className='w-4/5 h-full flex box-border'>
                    <ul className='w-full h-full list-none flex justify-between items-center'>
                        <li className='text-2xl'>
                            <Link to={"/"} className='text-shopCartAccent'>Essence Stash</Link>
                        </li>
                        {children}
                    </ul>
                </div>
            </nav>
        </>
    )
}
