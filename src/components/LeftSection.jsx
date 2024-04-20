import React from 'react'
import { ChevronLeft } from 'lucide-react'

const LeftSection = () => {
    return (
        <div className='w-full xl:sticky top-10 left-0 mb-4 xl:w-[40%]'>
            {/* back button */}
            <div>
                <button className='flex items-center text-gray-700'>
                    <ChevronLeft size={15} />
                    back
                </button>
            </div>

            {/* calender */}
            <div className='w-full text-sm xl:text-base md:w-[60%] mx-auto xl:mx-0 xl:w-[60%] bg-white uppercase p-3 rounded-lg mt-3 xl:mt-8 shadow-sm'>
                <h1 className='font-semibold'> november 2022 </h1>

                <div className='grid grid-cols-7 grid-rows-3 gap-2 p-2 text-center'>
                    <h1 className='text-gray-400'>20</h1>
                    <h1 className='text-gray-400'>21</h1>
                    <h1 className='text-gray-400'>22</h1>
                    <h1 className='text-gray-400'>23</h1>
                    <h1 className='font-semibold'>24</h1>
                    <h1 className='font-semibold'>25</h1>
                    <h1 className='font-semibold'>26</h1>
                    <h1 className='font-semibold'>27</h1>
                    <h1 className='font-semibold'>28</h1>
                    <h1 className='font-semibold'>29</h1>
                    <h1 className='font-semibold'><span className='border-[2px] p-1 border-yellow-600 rounded-full'>30</span></h1>
                </div>
            </div>
            
            {/* featured course */}
            <div className='bg-white relative text-sm xl:text-base py-5 xl:py-10 px-4 xl:px-8 mt-6 w-full md:w-[60%] mx-auto xl:mx-0 xl:w-[60%] rounded-lg shadow-sm overflow-hidden'>
                <h1 className='uppercase text-sm mb-4 xl:mb-7'>featured course</h1>

                <div>
                    <h1 className='font-bold text-xl xl:text-2xl'>Logic</h1>
                    <p className='text-gray-400 font-bold text-lg w-[70%] xl:w-[55%] mt-2'>
                        Stretch your analytic muscles with truth-tellers, liars, logical robots, and more!
                    </p>
                </div>

                <button className='text-center font-bold border-[1px] border-gray-400 w-full py-1 mt-[15%] md:mt-24 xl:mt-8 hover:bg-[#2c6fef] hover:text-white transition-all duration-300 ease-in'>Visit course</button>

                <img className='block absolute -right-20 top-0 w-[60%] lg:w-[40%] xl:w-[60%]' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSDkHzVnyMrxyYyfcCiS-9ZPFWSJCLUtpd2JVR4OeYldxRJDALx" alt="" />
            </div>
        </div>
    )
}

export default LeftSection