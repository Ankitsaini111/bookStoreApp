import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json' 
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  '>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl  md:text-4xl'>
            We'are delighted that you are <span className='text-pink-500'>  Here! </span>
          </h1>
          <p className='mt-12'>So many books, so little time" beautifully encapsulates the challenge and joy of being a reader in a world full of literary treasures. It’s a reminder to cherish the books you do read and to continuously seek out new literary adventures despite the constraints of time.</p>
          <Link to="/">
          <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 '>back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
{
  list.map((item)=>(
    <Cards key={item.id} item={item} />

  ))
}
        </div>
      </div>

    </>
  )
}

export default Course