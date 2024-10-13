import React from 'react'
import GridSection from '../GridSection/GridSection'

export default function MainSection(): React.JSX.Element {
    return (
        <>
            <section className='w-full h-full flex bg-indigo-400'>
                <div className='w-full h-full flex justify-center'>
                    <GridSection />
                </div>
            </section>
        </>
    )
}
