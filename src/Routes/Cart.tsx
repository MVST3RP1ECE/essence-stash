import Header from '../Components/Header/Header'
import CartSection from '../Components/CartSection/CartSection'
import { useShopContext } from '../Components/Context/ShopContextProvider'
import { ShopContextProvider } from '../Components/Context/ShopContextProvider';

export default function Cart() {
    return (
        <>
            <Header />
            <CartSection />
        </>
    )
}
