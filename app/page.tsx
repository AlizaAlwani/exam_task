import { Createform } from '@/components/Createform';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className='h-screen bg-yellow-200 border border-black rounded-md'>
      <div className=' flex flex-row gap-x-24 items-center justify-center'>
        <div className='border border-black rounded-md w-[350px] h-[200px] bg-green-300 mt-20 text-center flex items-center justify-center flex-col gap-y-2 '>
          <div className='font-semibold text-xl'>lorem ipsum</div>
          <div className='font-semibold text-8xl font-mono'>03</div>
        </div>
        <div className='border border-black rounded-md w-[350px] h-[200px] bg-pink-300 mt-20 text-center flex items-center justify-center flex-col gap-y-2'>
          <div className='font-semibold text-lg'>lorem ipsum</div>
          <div className='font-semibold text-8xl font-mono'>11</div>
        </div>
        <div className='border border-black rounded-md w-[350px] h-[200px] bg-red-300 mt-20 text-center flex items-center justify-center flex-col gap-y-2'>
          <div className='font-semibold text-lg'>lorem ipsum</div>
          <div className='font-semibold text-8xl font-mono'>52</div>
        </div>
      </div>

      {/* <div className='flex items-center justify-center mt-10 gap-x-6'>
        <Input type="email" placeholder="Enter something here ..." className='bg-yellow-200 border border-black w-[940px] ' />
        <Button asChild className='w-[280px]'>
          <Link href={'/'}>Create </Link>
        </Button>
      </div> */}
      <div className='flex items-center justify-center mt-10 gap-x-6' >
        <Createform />
      </div>

      <div className='flex items-center justify-center gap-y-6 mt-10 flex-col'>
        <div className='border border-black bg-white w-[1240px] h-[100px] rounded-md'>
          <div className='ml-10 pt-4'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div>
          <div className='flex flex-row pt-2 '>
            <Button asChild className='bg-red-800 flex items-center justify-center text-white font-semibold border border-black rounded-2xl w-[200px] ml-10'>
              <Link href={'/'}>Click me</Link>
            </Button>
            <div className='ml-auto mr-12 text-xl '><Link href={'/delete'}><FaRegTrashAlt/></Link></div>
          </div>
        </div>

        <div className='border border-black bg-white w-[1240px] h-[100px] rounded-md'>
          <div className='ml-10 pt-4'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div>
          <div className='flex flex-row pt-2'>
            <Button asChild className='bg-red-800 flex items-center justify-center text-white font-semibold border border-black rounded-2xl w-[200px] ml-10'>
              <Link href={'/'}>Click me</Link>
            </Button>
            <div className='ml-auto mr-12 text-xl '><Link href={'/'}><FaRegTrashAlt/></Link></div>
          </div>
        </div>
        
        <div className='border border-black bg-white w-[1240px] h-[100px] rounded-md'>
          <div className='ml-10 pt-4'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</div>
          <div className='flex flex-row pt-2 '>
            <Button asChild className='bg-red-800 flex items-center justify-center font-semibold text-white border border-black rounded-2xl w-[200px] ml-10'>
              <Link href={'/'}>Click me</Link>
            </Button>
            <div className='ml-auto mr-12 text-xl '>
              <Link href={'/'}><FaRegTrashAlt/></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
