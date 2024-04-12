import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'

const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col relative'>

        <div className='absolute top-[-7rem] z-[10]'>
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-[20]'
            src={review.image}/>
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] -z-[10] left-[10px]'></div>

        </div>

        <div className='text-center mt-7 mb-4'>
            <p className='font-bold text-2xl capitalize tracking-wide'>{review.name}</p>
            <p className=' text-violet-500 uppercase text-md font-semibold'>{review.job}</p>

        </div>


        <div className='text-violet-400 mx-auto'>
            <FaQuoteLeft/>
        </div>
        <div className='text-centre text-slate-500 mt-4 mb-4'>
            {review.text}
        </div>
        <div className='text-violet-400 mx-auto'>
            <FaQuoteRight/>
        </div>

        
    </div>
  )
}

export default Card;