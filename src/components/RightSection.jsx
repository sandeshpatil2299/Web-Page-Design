import React from 'react'
import { Report } from './Report';

//images
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';

//icons
import { ChevronRight, ChevronLeft, Earth } from 'lucide-react'

const RightSection = () => {
    return (
        <div className='w-full md:w-[60%] mx-auto xl:mx-auto xl:w-[60%]'>
            <div className='bg-white shadow-sm rounded-md'>
                <div className='xl:w-2/3 px-4 xl:px-0 mx-auto mt-8 pt-8'>
                    <h1 className='uppercase text-xs tracking-wider'>math and logic</h1>
                    <h1 className='tracking-wider text-lg mt-3'>Series 1 of 3</h1>
                    <h1 className='text-xl xl:text-4xl font-bold text-[#191919] mt-1'>Who Won the Race ?</h1>

                    <div className='mt-2 xl:mt-5 text-[#131313] xl:text-lg'>
                        <p className=''>How much information do you need to find the finish order Of a three-person race? It turns out, <span className='font-medium'>not much at all.</span></p>

                        <img src={img1} alt="" className='block mx-auto mt-5 xl:mt-10' />

                        <p className='mt-6 xl:mt-12'>Suppose that in a race among Amelia, Boris, and Carlos, we only know one fact — that Boris finished before Carlos. What are the possible orders for the entire race? Keep reading to see some reasoning we can use, or jump ahead to today's challenge for a trickier problem.</p>

                        <p className='mt-4 xl:mt-8'>We can start by thinking about a single unknown factor in the problem: "Where did Amelia finish?" To see this logic demonstrated, use the arrows below the figure:</p>

                        <div className='mt-4 xl:mt-8 border-[1px] border-gray-400 p-4 xl:p-8'>
                            <div className='flex flex-col gap-2 xl:flex-row justify-between'>
                                <div className='w-2/3 mx-auto xl:mx-0 md:w-1/2 xl:w-1/4 border-[2px] border-green-600 rounded-md'>
                                    <h1 className="text-center font-bold my-2">Carlos</h1>
                                    <img src={img2} alt="" className='block w-full mx-auto' />
                                </div>

                                <div className='w-2/3 mx-auto xl:mx-0 md:w-1/2 xl:w-1/4 border-[2px] border-green-600 rounded-md'>
                                    <h1 className="text-center font-bold my-2">Amelia</h1>
                                    <img src={img3} alt="" className='block w-full mx-auto' />
                                </div>

                                <div className='w-2/3 mx-auto xl:mx-0 md:w-1/2 xl:w-1/4 border-[2px] border-green-600 rounded-md'>
                                    <h1 className="text-center font-bold my-2">Boris</h1>
                                    <img src={img4} alt="" className='block w-full mx-auto' />
                                </div>
                            </div>

                            <div className='mt-3 xl:mt-0'>
                                <img src={img5} alt="" className='hidden xl:block mx-auto xl:my-8 w-[90%]' />

                                <div className='flex items-center justify-between px-4'>
                                    <ChevronLeft size={30} />
                                    <ChevronRight size={30} />
                                </div>
                            </div>

                            <p className='xl:text-lg font-bold mt-4 xl:mt-8'>If Amelia finished second, there is still a way for Boris to finish ahead of Carlos. This order is different from the first, so we have another solution.</p>
                        </div>

                        <p className='xl:text-lg my-3 xl:my-6'>Since we know the relationship between Boris and Carlos, Amelia's position in the race completely determined the entire finishing order. There are three possible total finishing orders — one for each of the positions in which Amelia can finish.</p>

                        <p className='xl:text-lg'>What if we add another runner to the race, Dara, and have a more complicated scenario?</p>

                        <p className='xl:text-lg border-[1px] border-gray-400 xl:w-3/4 mx-auto my-5 p-3'>Dara finished more places ahead of Amelia than Boris finished before Carlos.</p>

                        <p>We can start by again thinking about an unknown — "How did Boris and Carlos finish?"</p>

                        <div className='border-[1px] border-gray-400 mt-6 p-4'>
                            <div className='flex flex-col xl:flex-row items-center gap-3 justify-between'>
                                <div className='w-2/3 md:w-1/2 xl:w-2/4 h-[10rem] flex items-center justify-center border-gray-400 border-dashed border-[1px] rounded-md'>
                                    <h1>Fouth</h1>
                                </div>
                                <div className='w-2/3 md:w-1/2 xl:w-2/4 h-[10rem] flex items-center justify-center border-gray-400 border-dashed border-[1px] rounded-md'>
                                    <h1>Third</h1>
                                </div>
                                <div className='w-2/3 md:w-1/2 xl:w-2/4 h-[10rem] flex items-center justify-center border-gray-400 border-dashed border-[1px] rounded-md'>
                                    <h1>Second</h1>
                                </div>
                                <div className='w-2/3 md:w-1/2 xl:w-2/4 h-[10rem] flex items-center justify-center border-gray-400 border-dashed border-[1px] rounded-md'>
                                    <h1>First</h1>
                                </div>
                            </div>

                            <div className='flex flex-col xl:flex-row justify-between'>
                                <div className='w-2/3 mx-auto xl:w-1/4'>
                                    <h1 className="text-center font-bold my-2">Dora</h1>
                                    <img src={img2} alt="" className='block w-2/3 mx-auto' />
                                </div>

                                <div className='w-2/3 mx-auto xl:w-1/4'>
                                    <h1 className="text-center font-bold my-2">Amelia</h1>
                                    <img src={img3} alt="" className='block w-2/3 mx-auto' />
                                </div>

                                <div className='w-2/3 mx-auto xl:w-1/4'>
                                    <h1 className="text-center font-bold my-2">Boris</h1>
                                    <img src={img4} alt="" className='block w-2/3 mx-auto' />
                                </div>

                                <div className='w-2/3 mx-auto xl:w-1/4'>
                                    <h1 className="text-center font-bold my-2">Carlos</h1>
                                    <img src={img2} alt="" className='block w-2/3 mx-auto' />
                                </div>
                            </div>

                            <div className='flex justify-end pr-4 mt-2 xl:mt-5'>
                                <ChevronRight size={30} />
                            </div>

                            <p className='xl:text-lg font-bold'>Use the arrows to view the solution step by step.</p>
                        </div>

                        <p className='xl:text-lg my-3 xl:my-6'>There is only one way these conditions can be satisfied without conflicts, so we have only one solution.</p>

                        <p className='xl:text-lg'>In the problem below, you'll be putting together information like this, but with five runners instead of four. Can you use logic to figure out the order?</p>

                        <div className='mt-3 xl:mt-6'>
                            <h1 className='text-xl xl:text-3xl font-bold text-center border-b-[1px] border-gray-400 pb-2'>Today's Challenge</h1>

                            <div className='p-2 xl:p-6'>
                                <p className='xl:text-lg mb-2 xl:mb-4'>Four runners compete in a race — Amelia, Boris, Carlos, and Dara.</p>

                                <p className='xl:text-lg'>After some confusion at the finish line, it's unclear what the final finishing order was, but this information is known:</p>

                                <div className='xl:w-3/6 border-[1px] border-gray-400 mx-auto my-5 pl-8'>
                                    <ol className='list-decimal'>
                                        <li>Dara finished before Amelia.</li>
                                        <li>Boris wasn't third.</li>
                                        <li>There were two runners between Amelia and Carlos.</li>
                                    </ol>
                                </div>

                                <div>
                                    <h1 className='mt-3 mb-2'>Who won the race?</h1>
                                </div>

                                <div>
                                    <div className='flex flex-col xl:flex-row justify-between items-center gap-3'>
                                        <div className='w-2/3 md:w-1/2 xl:w-1/4 h-[10rem] border-[2px] border-sky-400 rounded-lg'>
                                            <h1 className="text-center font-bold my-2">Amelia</h1>
                                            <img src={img3} alt="" className='block w-2/3 mx-auto' />
                                        </div>

                                        <div className='w-2/3 md:w-1/2 xl:w-1/4 h-[10rem] flex items-center justify-center border-gray-400 border-dashed border-[1px] rounded-lg'>
                                            <h1>Third</h1>
                                        </div>

                                        <div className='w-2/3 md:w-1/2 xl:w-1/4 h-[10rem] border-[2px] border-sky-400 rounded-lg'>
                                            <h1 className="text-center font-bold my-2">Carlos</h1>
                                            <img src={img2} alt="" className='block w-2/3 mx-auto' />
                                        </div>

                                        <div className='w-2/3 md:w-1/2 xl:w-1/4 h-[10rem] flex items-center justify-center border-gray-400 border-dashed border-[1px] rounded-lg'>
                                            <h1>First</h1>
                                        </div>
                                    </div>

                                    <div className='flex flex-col xl:flex-row items-center justify-between mt-6'>
                                        <div className='flex items-center justify-center w-2/3 md:w-1/2 xl:w-1/4 h-[10rem]'>
                                            <img src={img6} alt="" className='block w-2/3' />
                                        </div>

                                        <div className='w-2/3 md:w-1/2 xl:w-1/4'>
                                            <h1 className="text-center font-bold my-2">Boris</h1>
                                            <img src={img4} alt="" className='block w-2/3 mx-auto' />
                                        </div>

                                        <div className='flex items-center justify-center w-2/3 md:w-1/2 xl:w-1/4 h-[10rem]'>
                                            <img src={img7} alt="" className='block w-2/3' />
                                        </div>

                                        <div className='w-2/3 md:w-1/2 xl:w-1/4'>
                                            <h1 className="text-center font-bold my-2">Dora</h1>
                                            <img src={img2} alt="" className='block w-2/3 mx-auto' />
                                        </div>
                                    </div>

                                    <div className='my-3'>
                                        <div>
                                            <h1 className='font-bold'>Difficulty: </h1>
                                        </div>
                                    </div>

                                    <div className='flex text-xs md:text-base flex-col gap-1 xl:gap-3 text-gray-500'>
                                        <button className='text-left p-2 pl-4 rounded-full border-[2px] border-transparent focus:border-[2px] focus:border-yellow-400 focus:text-black'>Amelia</button>
                                        <button className='text-left p-2 pl-4 border-[2px] border-transparent rounded-full focus:border-[2px] focus:border-yellow-400 focus:text-black'>Boris</button>
                                        <button className='text-left p-2 pl-4 border-[2px] border-transparent rounded-full focus:border-[2px] focus:border-yellow-400 focus:text-black'>Carlos</button>
                                        <button className='text-left p-2 pl-4 border-[2px] border-transparent rounded-full focus:border-[2px] focus:border-yellow-400 focus:text-black'>Dara</button>
                                        <button className='text-left p-2 pl-4 border-[2px] border-transparent rounded-full focus:border-[2px] focus:border-yellow-400 focus:text-black'>There's not enough information to determine who won.</button>
                                    </div>

                                    <h1 className='text-gray-500 text-center mt-6'> View explanation</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-xl xl:text-2xl font-bold my-10 bg-gray-300 py-4 xl:p-5'>You viewed the explanation</h1>
            </div>


            <div className='xl:w-2/3 mx-auto'>
                <h1 className='text-xl  xl:text-2xl font-bold'>Reports</h1>

                <div className='mt-8'>
                    <div className='flex flex-col gap-3 xl:gap-10'>
                        {
                            Report.map((el, index) => {
                                return (
                                    <div key={index} className='bg-white p-3 shadow-sm'>
                                        <div className='flex items-center gap-3'>
                                            <Earth size={40} />
                                            <h1>Reports</h1>
                                        </div>
                                        <p className='mt-3'>{el.report}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSection