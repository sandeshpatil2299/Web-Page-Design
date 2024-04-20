import React from 'react'

// icons
import { Search, Zap, AlignJustify, Earth } from 'lucide-react'

const Navbar = () => {

    const menu = () => {
        document.querySelector(".hambar").classList.toggle("top-[2rem]");
    }

    return (
        <nav>
            {/* big screen */}
            <div className='hidden bg-white items-center w-full justify-between px-5 xl:px-20 py-2 shadow-sm lg:flex'>
                {/* logo and title */}
                <div className='flex items-center gap-2'>
                    <Earth size={50} />
                    <h1 className='uppercase text-xl xl:text-3xl tracking-wider font-semibold'>brilliant</h1>
                </div>

                {/* menus */}
                <div className='flex gap-5 xl:gap-10 uppercase text-[#a0a0a0] tracking-wider'>
                    <a className='hover:font-bold hover:text-slate-800' href="">Home</a>
                    <a className='hover:font-bold hover:text-slate-800' href="">courses</a>
                    <a className='hover:font-bold hover:text-slate-800' href="">today</a>
                </div>

                {/* search and premium */}
                <div className='flex items-center gap-5 xl:gap-10'>
                    {/* search */}
                    <div className='flex items-center bg-gray-300 px-3 xl:py-1 rounded-md'>
                        <Search size={20} />
                        <input type="text" name="" id="" className='bg-gray-300 px-3 py-1 focus:outline-none' />
                    </div>

                    {/* premium */}
                    <div className='flex items-center gap-2 xl:gap-4'>
                        <button className='uppercase text-green-600 border-[1px] border-green-700 rounded-md tracking-wider py-1 xl:py-2 px-4 xl:px-6 font-bold hover:bg-green-600 hover:text-white transition duration-300 ease-in'>go premium</button>

                        <div className='flex items-center gap-2'>
                            <h1 className='text-xl xl:text-2xl font-bold'>0</h1>
                            <Zap className='opacity-50 text-gray-600' />
                        </div>
                    </div>

                    {/* hamburger */}
                    <div>
                        <button><AlignJustify /></button>
                    </div>
                </div>
            </div>

            {/* small screen */}
            <div className='py-2 px-4 bg-white lg:hidden'>
                <div className='flex item-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <Earth size={25} />
                        <h1 className='uppercase tracking-wider font-semibold'>brilliant</h1>
                    </div>

                    <div className='flex items-center'>
                        <button onClick={menu}><AlignJustify size={20} /></button>
                    </div>
                </div>

                {/* menus */}
                <div className='absolute top-[-20rem] left-1/2 -translate-x-1/2 hambar bg-gray-700 mt-3 p-3 rounded-md transition-all duration-500 ease-in'>

                    <div className='flex flex-col items-center gap-2'>
                        {/* search */}
                        <div className='flex w-full items-center bg-gray-300 px-2 rounded-md mt-3'>
                            <Search size={20} />
                            <input type="text" name="" id="" className='bg-gray-300 px-3 py-1 focus:outline-none' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 items-center mt-2 uppercase text-slate-400 font-bold tracking-wider'>
                        <a className='hover:text-slate-800' href="">Home</a>
                        <a className='hover:text-slate-800' href="">courses</a>
                        <a className='hover:text-slate-800' href="">today</a>

                        {/* premium */}
                        <div className='flex items-center justify-end gap-2'>
                            <button className='uppercase text-xs text-green-600 border-[1px] border-green-700 rounded-md tracking-wider py-1 px-3 font-bold hover:bg-green-600 hover:text-white transition duration-300 ease-in'>go premium</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar