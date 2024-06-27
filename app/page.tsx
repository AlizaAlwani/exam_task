'use client'
import { Createform } from '@/components/Createform';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

import { FaRegTrashAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useCallback, useEffect, useState } from 'react';
import { getLorem } from '@/actions/getLorem';
import { Examprac1 } from '@/actions/deleteLorem';


const Home = () => {

  const [data, setData] = useState<any>()

  useEffect(() => {
    getLorem()

      .then((data: any) => {
        setData(data)
      })
  }, [setData])

  const handleSubmit = useCallback((id:string) => {
    Examprac1(id)
  
  }, []);

  // const Loreminfo = [
  //   {
  //     id: '0',
  //     name: 'Hello'
  //   },
  //   {
  //     id: '1',
  //     name: 'Aliza'
  //   },
  //   {
  //     id: '2',
  //     name: 'Alwani'
  //   },
  // ]

  return (
    <div className='h-screen bg-yellow-200 border border-black rounded-md'>
      <div className=' flex flex-row gap-x-24 items-center justify-center'>
        <div className='border border-black rounded-md w-[350px] h-[200px] bg-green-300 mt-12 text-center flex items-center justify-center flex-col gap-y-2 '>
          <div className='font-semibold text-xl'>lorem ipsum</div>
          <div className='font-semibold text-8xl font-mono'>03</div>
        </div>
        <div className='border border-black rounded-md w-[350px] h-[200px] bg-pink-300 mt-12 text-center flex items-center justify-center flex-col gap-y-2'>
          <div className='font-semibold text-lg'>lorem ipsum</div>
          <div className='font-semibold text-8xl font-mono'>11</div>
        </div>
        <div className='border border-black rounded-md w-[350px] h-[200px] bg-red-300 mt-12 text-center flex items-center justify-center flex-col gap-y-2'>
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

      <div className='flex flex-col bg-yellow-200'>
        {
          data?.map((lorem:any, index:number) => {
            return (

              <Card key={index} className="items-center justify-center w-[1220px] h-[120px] ml-auto mr-60 mt-8 rounded-md border border-black">
                <CardHeader>
                  <CardDescription className='text-black text-base font-mono '>{lorem.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex items-center justify-between'>
                    <Button variant={'destructive'} className='w-[200px] rounded-md'>Click here</Button>
                    <Button variant={'ghost'} className='text-3xl' onClick={()=> handleSubmit(lorem.id)}>
                      <FaRegTrashAlt /></Button>
                  </div>
                </CardContent>

              </Card>
            )

          })

        }



      </div>



    </div>
  )
}

export default Home
