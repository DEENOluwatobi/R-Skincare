import React, { useState } from 'react'
import HomeContainer from './HomeContainer'
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import { useEffect } from 'react'
import MenuContainer from './MenuContainer'
import CartContainer from './CartContainer'

const MainContainer = () => {

  const [{foodItems, cartShow}, dispatch] = useStateValue();

  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow])

  return (
    <div className='flex w-full h-auto flex-col items-center justify-center mt-10 md:mt-20'>
      <HomeContainer/>

      <section className='w-full my-4'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-lg font-semibold capitalize text-headingColor relative before:absolute
            before:rounded-lg before:bg-gradient-to-tr from-red-300 to-red-600 before:content before:w-20 before:h-1 before:-bottom-2
            before:left-0 transition-all ease-in-out duration-100'>
              Our fresh & healthy fruits
          </p>

          <div className='hidden md:flex gap-2 items-center lg:mr-4'>

            <motion.div 
              whileTap={{scale: 0.75}} 
              className='w-7 h-7 rounded-lg bg-red-400 hover:bg-red-500 flex items-center justify-center cursor-pointer'
              onClick={() => setScrollValue(-300)}>
                <MdChevronLeft className='text-lg text-white'/>
            </motion.div>

            <motion.div 
              whileTap={{scale: 0.75}} 
              className='w-7 h-7 rounded-lg bg-red-400 hover:bg-red-500 flex items-center justify-center cursor-pointer'
              onClick={() => setScrollValue(1000)}>
                <MdChevronRight className='text-lg text-white'/>
            </motion.div>

          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true} 
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer/>

      {cartShow && (
        <CartContainer />
      )}
    </div>
  )
}

export default MainContainer