import { Deleteform } from '@/components/Deleteform'
import React from 'react'

const deletepage = () => {
  return (
    <div className='flex items-center justify-center h-screen flex-col gap-y-8'>
        <div className='flex items-center justify-center text-2xl font-bold'>Lorem Deletion Page ❌</div>
        <div className='border border-black p-10 rounded-md'>
      <Deleteform />
      </div>
    </div>
  )
}

export default deletepage
