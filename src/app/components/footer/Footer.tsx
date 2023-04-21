import React from 'react'
import Image from 'next/image'
import { SlShuffle } from 'react-icons/sl'
import { IoIosSkipBackward, IoIosSkipForward } from 'react-icons/io'
import { BsFillPlayFill } from 'react-icons/bs'
import { BiRepeat, BiVolumeLow } from 'react-icons/bi'
import { TbDevices2, TbMicrophone2 } from 'react-icons/tb'
import { HiOutlineQueueList } from 'react-icons/hi2'

const Footer = () => {
  return (
    <footer className='
    bg-zinc-900 
    border-t 
    border-zinc-700 
    fixed
    bottom-0
    w-full
  '>
    <div className='px-6 py-4 flex items-center justify-between'>
      <div className='flex w-1/4 items-center justify-center gap-2'>
        <Image src={'/album1.png'} width={56} height={56} alt='album image'/>
        <div className='flex flex-col'>
          <p className='line-clamp-1'>Sgt. Pepper`s Lonely Hearts Club Band</p>
          <span className='text-xs text-zinc-400 line-clamp-1'>Red Hot Chili Peppers</span>
        </div>
      </div>
      <div className='flex w-2/4 flex-col items-center justify-center'>
        <div className='flex flex-row items-center gap-5'>
          <SlShuffle size={23} className='text-zinc-300'/>
          <IoIosSkipBackward size={23} className='text-zinc-300' /> 
          <button className='w-8 h-8 flex items-center justify-center pl-0.5 rounded-full bg-white text-black'>
            <BsFillPlayFill size={25}/>
          </button>
          <IoIosSkipForward size={23} className='text-zinc-300' />
          <BiRepeat size={23} className='text-zinc-300' />
        </div>
        <div className='flex items-center gap-2 mt-2 w-full'>
          <span className='text-xs text-zinc-500'>0:15</span>
          <div className='h-1 rounded-full w-full bg-zinc-600'>
            <div className='bg-zinc-200 w-2/4 h-1 rounded-full' />
          </div>
          <span className='text-xs text-zinc-500'>3:22</span>
        </div>
      </div>
      <div className='w-1/4 flex items-center justify-center gap-2'>
        <TbMicrophone2 size={20} /> 
        <HiOutlineQueueList size={20} /> 
        <TbDevices2 size={20} /> 
        <BiVolumeLow size={20} />
        <div className='h-1 rounded-full w-1/4 bg-zinc-600'>
            <div className='bg-zinc-200 w-2/4 h-1 rounded-full' />
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer