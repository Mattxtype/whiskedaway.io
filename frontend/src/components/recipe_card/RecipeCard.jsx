import React from 'react'

const RecipeCard = ({imageId, title}) => {
  return (
    <div className='flex flex-col basis-60 bg-gray-200 m-5'>
        <div className='text-center max-h-96 h-96'>{imageId}</div>
        <div className='border border-black text-center'>
            <div className='text-xl font antialiased font-bold tracking-wide pt-2 overflow-visible'>{title}</div>
            <button>read more</button>
        </div>
    </div>
  )
}

export default RecipeCard