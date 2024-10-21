import CartSectionCheckout from './CartSectionCheckout'
import { useShopContext } from '../Context/ShopContextProvider'
import Items from '../Items'
import CartSectionItem from './CartSectionItem'
import { Fragment } from 'react'

interface itemsInCart {
    [key: number]: number
}

const CartSection = () => {

    const context = useShopContext();
    const cartItems: itemsInCart = context.cartItems;
    // console.log(cartItems);

    const countTotalAmount = (): number => {
        let totalPrice: number = 0;
        Items.map((product) => {
            if (cartItems[product.keyId] > 0) {
                console.log(product);
                totalPrice += (product.price * cartItems[product.keyId]);
                console.log(totalPrice);
            }
        })

        totalPrice = Number(totalPrice.toFixed(2))

        return (
            totalPrice
        )
    }

    return (
        <section className='w-full h-full flex flex-col justify-center items-center bg-indigo-500'>
            <h1 className='text-start flex font-semibold p-4 text-3xl'>Shoping Cart</h1>
            <div className='w-4/5 h-full flex'>

                <section className='h-full w-3/4'>
                    {Items.map((product) => {
                        if (cartItems[product.keyId] > 0) {
                            for (let i = 0; i < cartItems[product.keyId]; i++) {
                                // console.log(cartItems[product.keyId]);
                                return (
                                    <Fragment key={product.keyId}>
                                        <CartSectionItem
                                            brand={product.brand}
                                            name={product.name}
                                            url={product.url}
                                            price={product.price}
                                            volume={product.volume}
                                            amount={cartItems[product.keyId]}
                                            keyId={product.keyId}
                                        />
                                    </Fragment>
                                )
                            }
                        }
                    })}
                </section>

                <aside className='h-1/3 w-1/3 ml-5 flex'>
                    <CartSectionCheckout amount={countTotalAmount()} />
                </aside>

            </div>
        </section>
    )
}

export default CartSection
