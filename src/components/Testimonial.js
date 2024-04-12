import React, { useState } from 'react'
import Card from './Card';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index,setindex] = useState(0);

    function leftshifhandler(){
        if(index-1 < 0){
            setindex(reviews.length-1);
        }else{
            setindex(index-1)
        }
    }
    function rightshifhandler(){
        if(index+1 >= reviews.length){
            setindex(0);
        }else{
            setindex(index+1);
        }
    }
    function surprisehandler(){
       let randonindex = Math.floor(Math.random()*reviews.length)
        setindex(randonindex);
    }



  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center rounded-md items-center p-10 hover:shadow-xl transition-all duration-500'>

        <Card review = {reviews[index]}></Card>

        <div className='flex text-3xl mt-4 gap-3 text-violet-400 font-bold justify-center'>
            <button onClick={leftshifhandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft/>
            </button>
            <button onClick={rightshifhandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight/>
            </button>
        </div>

        <div>
            <button onClick={surprisehandler}
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-300 
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-4'>
            Surprise Me
            </button>
        </div>

    </div>
  )
}

export default Testimonial;