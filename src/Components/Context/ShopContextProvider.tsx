import React, { createContext, useContext, useState } from 'react'
import Items from '../Items';

export const ShopContext = createContext<ContextValue | object>({} as ContextValue);


type ShopContextProviderProps = {
    children: React.ReactNode
};

export type prevType = {
    [key: string]: number
}

type ContextValue = {
    cartItems: object,
    addToCart: (id: number) => void,
    deleteFromCart: (id: number) => void,
    minusOneFromCart: (id: number) => void,
}

function getDefaultCart(): object {
    const cart: { [index: string]: number } = {};
    for (let i = 101; i < Items.length + 101; i++) {
        cart[i] = 0;
    }
    return cart;
}



export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
    //1
    const [cartItems, setCartItems] = useState(getDefaultCart())

    //2
    const addToCart = (id: number): void => {
        setCartItems((prev: prevType) => {
            return {
                ...prev,
                [id]: prev[id] + 1,
            }
        })
    }
    //3 
    const deleteFromCart = (id: number): void => {
        setCartItems((prev: prevType) => {
            return {
                ...prev,
                [id]: prev[id] = 0,
            }
        })
    }

    //4 
    const minusOneFromCart = (id: number): void => {
        setCartItems((prev: prevType) => {
            return {
                ...prev,
                [id]: prev[id] - 1
            }
        })
    }

    const contextValue = { cartItems, addToCart, deleteFromCart, minusOneFromCart }
    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
}

export function useShopContext(): ContextValue {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error("useShopContext must be used within a ShopContextProvider");
    }
    // console.log(context?.cartItems);
    return context as ContextValue;
}