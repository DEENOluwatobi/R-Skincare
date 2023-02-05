import React, { useState } from 'react'
import { MdShoppingCart, MdAdd, MdLogout } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

import Logo from '../Images/logo.png'
import Avatar from '../Images/avatar.png'
import { app } from '../firebase.config'


const Header = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const [{user, cartShow, cartItems}, dispatch] = useStateValue();

    const  [isMenu, setIsMenu] = useState(false)

    const login = async () => {
        if(!user) {
            const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider);
            dispatch({
                type : actionType.SET_USER,
                user : providerData[0]
            })
            localStorage.setItem('user', JSON.stringify(providerData[0]));            
        }else{
            setIsMenu(!isMenu)
        }

    };

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();

        dispatch({
            type : actionType.SET_USER,
            user : null,
        });
    };

    const showCart = () => {
        dispatch({
            type : actionType.SET_CART_SHOW,
            cartShow : !cartShow,
        });
    };



  return (
    <header className=' z-50 w-full p-3 px-4 md:p-6 md:px-16 fixed bg-primary'>
        {/* DESKTOP & TABLET */}
        <div className='hidden md:flex w-full h-full items-center justify-between'>
            <Link to={'/'} className='flex items-center gap-2'>
                <img src={Logo} className='w-8 object-cover' alt="logo" />
                <p className='text-headingColor text-xl font-bold'>Reign's Skincare</p>
            </Link>

            <div className='flex items-center gap-8'>
                <motion.ul 
                initial={{opacity : 0, x : 200}}
                animate={{opacity : 1, x : 0}}
                exit={{opacity : 0, x : 200}}
                className='flex items-center gap-8 '>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                    transition-all ease-in-out'>Home</li>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                    transition-all ease-in-out'>Menu</li>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                    transition-all ease-in-out'>About Us</li>
                    <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                    transition-all ease-in-out'>Services</li>
                </motion.ul>

                <div className='relative flex items-center justify-center' onClick={showCart}>
                    <MdShoppingCart className='text-textColor text-2xl cursor-pointer'/>
                    {cartItems && cartItems.length > 0 && (
                        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg'>
                            <p className='text-xs flex items-center justify-center text-white font-semibold'>{cartItems.length}</p>
                        </div>
                    )}
                </div>

                <div className='relative'>
                    <motion.img 
                        whileTap={{scale: 0.6}} 
                        src={user ? user.photoURL : Avatar} 
                        className='w-10 min-w-[40px] h-10 m-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                        alt="userprofile" 
                        onClick={login}
                    />
                    {
                    isMenu && (
                        <motion.div 
                        initial={{opacity: 0, scale: 0.6}} 
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.6}}
                        className='w-40 flex bg-gray-50 flex-col shadow-xl rounded-lg absolute top-12 right-0'>
                        {
                            user && user.email === 'shodimutobie@gmail.com' && (
                                <Link to={"/createItem"}>
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                                    transition-all duration-100 ease-in-out
                                    text-textColor text-base'
                                    onClick={()=> setIsMenu(false)}>New Item <MdAdd/></p>
                                </Link>
                            )
                        }
                            <p onClick={logout} className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                            transition-all duration-100 ease-in-out
                            text-textColor text-base'>Logout <MdLogout/></p>
                        </motion.div>
                    )
                    }
                </div>
            </div>
        </div>

        {/* MOBILE VIEW*/}

        <div className='flex md:hidden h-full items-center justify-between'>
            <div className='relative flex items-center justify-center' onClick={showCart}>
                <MdShoppingCart className='text-textColor text-2xl cursor-pointer'/>
                {cartItems && cartItems.length > 0 && (
                    <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg'>
                        <p className='text-xs flex items-center justify-center text-white font-semibold'>{cartItems.length}</p>
                    </div>
                )}
            </div>            
            
            <Link to={'/'} className='flex items-center gap-2'>
                <img src={Logo} className='w-8 object-cover' alt="logo" />
                <p className='text-headingColor text-xl font-bold'>Reign's Skincare</p>
            </Link>

            <div className='relative'>
                    <motion.img 
                        whileTap={{scale: 0.6}} 
                        src={user ? user.photoURL : Avatar} 
                        className='w-10 min-w-[40px] h-10 m-h-[40px] drop-shadow-xl cursor-pointer rounded-full' 
                        alt="userprofile" 
                        onClick={login}
                    />
                    {
                    isMenu && (
                        <motion.div 
                        initial={{opacity: 0, scale: 0.6}} 
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.6}}
                        className='w-40 flex bg-gray-50 flex-col shadow-xl rounded-lg absolute top-12 right-0'>
                        {
                            user && user.email === 'shodimutobie@gmail.com' && (
                                <Link to={"/createItem"}>
                                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 
                                    transition-all duration-100 ease-in-out
                                    text-textColor text-base' onClick={()=> setIsMenu(false)}>New Item <MdAdd/></p>
                                </Link>
                            )
                        }

                            <ul className='flex flex-col'>
                                <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                                transition-all ease-in-out px-4 py-2 hover:bg-slate-100' onClick={()=> setIsMenu(false)}>Home</li>
                                <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                                transition-all ease-in-out px-4 py-2 hover:bg-slate-100' onClick={()=> setIsMenu(false)}>Menu</li>
                                <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                                transition-all ease-in-out px-4 py-2 hover:bg-slate-100' onClick={()=> setIsMenu(false)}>About Us</li>
                                <li className='text-base text-textColor cursor-pointer hover:text-headingColor duration-100
                                transition-all ease-in-out px-4 py-2 hover:bg-slate-100' onClick={()=> setIsMenu(false)}>Services</li>
                            </ul>

                            <p onClick={logout} className='m-2 p-2 flex items-center justify-center rounded-md shadow-md bg-red-300 gap-3 
                            cursor-pointer hover:bg-red-400 transition-all duration-100 ease-in-out
                            text-textColor text-base'
                            >Logout <MdLogout/></p>
                        </motion.div>
                    )
                    }
                </div>        
        </div>
    </header>
  )
}

export default Header