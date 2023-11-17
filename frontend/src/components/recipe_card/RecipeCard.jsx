import React from 'react'

const RecipeCard = () => {
  return (
    <div className='flex flex-col basis-60 bg-gray-200 m-5'>
        <div className='text-center max-h-96 h-96'>Image</div>
        <div className='border border-black text-center'>
            <div className='text-xl font antialiased font-bold tracking-wide pt-2 overflow-visible'>pancakes</div>
            <button>Read</button>
        </div>
    </div>
  )
}

export default RecipeCard