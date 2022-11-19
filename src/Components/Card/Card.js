import React from 'react'
import image from '../../assets/image.png'
const Card = ({book}) => {
  return (
    <div className='tw-flex tw-gap-4 tw-p-2 tw-m-2 tw-border-black tw-border-1 tw-rounded-sm tw-drop-shadow-md tw-bg-blue-50 ' >
        <img src={image} alt="book" className='tw-w-20 tw-h-20' />
        <div className='tw-flex tw-justify-between tw-items-center tw-w-full ' >
          <div className='tw-text-start' >
            <div className='  tw-flex tw-row tw-justify-center tw-items-center ' >
              <h1 className=' tw-text-lg tw-mr-6' > {book.title} </h1>
              <p className='tw-text-sm tw-italic' > by : {book.author} </p>
            </div>
            <div className='tw-italic tw-leading-3 ' >
              <p className="tw-leading-3 " >{book.genre}</p>
              <p className='tw-text-sm tw-leading-3' > written in : {book.year_written} </p>
            </div>
          </div>
          <div>
            <h1 className='tw-text-3xl tw-font-bold ' > {book.price}</h1>
          </div>
        </div>
    </div>
  )
}

export default Card;
