import Image from 'next/image'

import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

interface RecommendedCardProps {
  imageSrc: string,
  albumName: string
}

const RecommendedCard = ({imageSrc, albumName}: RecommendedCardProps) => {
  return (
  <a href='#' className='group bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors'>
    <Image src={imageSrc} width={102} height={102} alt='album image'/>
    <strong>{albumName}</strong>
    <button className='transition duration-75 opacity-0 group-hover:opacity-100  w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8'>
      <BsFillPlayFill size={32}/>
    </button>
  </a>
  )
}

export default RecommendedCard