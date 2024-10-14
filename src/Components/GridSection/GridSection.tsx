import React from 'react'
import GridItem from '../GridItem/GridItem'
import Items from '../Items'

export default function GridSection(): React.JSX.Element {
    return (
        <div className='w-4/5 min-h-screen flex flex-col justify-center'>
            <div className='w-full h-full grid grid-rows-2 grid-cols-4 p-4 gap-4'>
                {Items.map((item) =>
                    <div key={item.keyId}>
                        <GridItem brand={item.brand} name={item.name} url={item.url} price={item.price} volume={item.volume} />
                    </div>
                )}
            </div>
        </div>
    )
}
