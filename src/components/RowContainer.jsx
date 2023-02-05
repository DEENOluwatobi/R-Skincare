import React, { useEffect, useRef, useState } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer';

const RowContainer = ({flag, data, scrollValue}) => {

    const rowContainer = useRef();

    const [ items, setItems] = useState([]);

    const [{cartItems}, dispatch] = useStateValue();

    const addToCart = () => {
        
        dispatch({
            type : actionType.SET_CART_ITEMS,
            cartItems : items
        });
        localStorage.setItem('cartItems', JSON.stringify(items))
    };

    useEffect(() => {
        rowContainer.current.scrollLeft =++ scrollValue;
    }, [scrollValue]);

    useEffect(() => {
        addToCart()
    }, [items])

  return (
    <div 
    ref={rowContainer}
    className={`w-full flex items-center mx-auto justify-start my-4 gap-1 md:gap-3 scroll-smooth ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>
        {data && data.map(item => (
        <div 
            key={item.id}
            className='w-300 min-w-[300px] md:w-275 md:min-w-[280px] gap-3 h-[170px] bg-gray-100 rounded-lg px-4 py-1 my-12 backdrop-blur-lg drop-shadow-sm hover:drop-shadow-xl'>
            <div className='w-full flex items-center justify-between'>
                <motion.img whileHover={{scale : 1.1}} 
                    src={item?.imageURL} 
                    alt="" 
                    className='w-[70] -mt-8 h-[100px]'
                />
                <motion.div onClick={() => setItems([...cartItems, item])} whileTap={{scale : 0.75}} className='w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                    <MdShoppingCart className='text-white'/>
                </motion.div>
            </div> 
            <div className='w-full flex flex-col items-end justify-end'>
                <p className='text-textColor font-semibold text-base md:text-base'>{item?.title}</p>
                <p className='mt-1 text-sm text-gray-500'>{item?.calories + ' Calories'}</p>
                <div className='flex items-center gap-8'>
                    <p className='text-lg text-headingColor font-semibold'>
                        <span className='text-sm text-red-500'>$</span>
                        {item?.price}
                    </p>
                </div>
            </div>   
        </div>
        ))}
    </div>
  )
}

export default RowContainer