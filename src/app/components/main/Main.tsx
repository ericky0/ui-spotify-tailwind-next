import React from 'react'
import { BsChevronLeft, BsChevronRight, BsFillPlayFill } from 'react-icons/bs'
import Image from 'next/image'
import RecommendedCard from './RecommendedCard'
import GenreCard from './GenreCard'

const Main = () => {

  const recommendedData = [
    { 
      imageSrc: '/album1.png',
      albumName: 'Sgt. Pepper`s Lonely Hearts Club Band'
    },
    {
      imageSrc: '/album2.png',
      albumName: 'The Dark Side of The Moon'
    },
    {
      imageSrc: '/album3.png',
      albumName: 'Nevermind'
    },
    {
      imageSrc: '/album4.png',
      albumName: 'Physical Graffiti'
    },
    {
      imageSrc: '/album5.png',
      albumName: 'The Velvet Underground & Nico'
    },
    { 
      imageSrc: '/album6.png',
      albumName: 'Sticky Fingers'
    },
    {
      imageSrc: '/album7.jpg',
      albumName: 'Abbey Road'
    },
    {
      imageSrc: '/album8.png',
      albumName: 'Aladdin Sane'
    },
    {
      imageSrc: '/album9.jpg',
      albumName: 'London Calling'
    },
    {
      imageSrc: '/album10.png',
      albumName: 'Unknown Pleasures'
    },
  ]

  const genreSection = [
    {
      genreName: 'big on the internet',
      description: 'iykyk',
      imgSrc: '/album11.png'
    },
    {
      genreName: 'Levitate',
      description: "Music that makes you feel like you're levitating",
      imgSrc: '/album12.png'
    },
    {
      genreName: 'Internet People',
      description: 'The soundtrack to the internet.',
      imgSrc: '/album13.png'
    },
    {
      genreName: 'tear drop',
      description: 'Emo feels for the misunderstood.',
      imgSrc: '/album14.png'
    },
    {
      genreName: 'Indie Gaming',
      description: 'Indie music to keep your gaming session properly...',
      imgSrc: '/album15.png'
    }
  ]

  return (
  <main className='flex-1 p-6'>
    <div className='flex items-center gap-4'>
      <button className='rounded-full bg-black/40 p-2'>
        <BsChevronLeft/>
      </button>
      <button className='rounded-full bg-black/40 p-2'>
        <BsChevronRight/>
      </button>
    </div>

    <h1 className='font-semibold text-3xl mt-10'>Good Night</h1>
    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-6 mt-4'>
      {recommendedData.map((card) => (
        <RecommendedCard imageSrc={card.imageSrc} albumName={card.albumName} key={card.imageSrc + card.albumName}/>
      ))}
    </div>

    <h2 className='font-semibold text-2xl mt-10'>Made for Erick Hogarth</h2>
    <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 gap-4 mt-4'>
      {genreSection.map((card) => (
        <GenreCard imgSrc={card.imgSrc} description={card.description} genreName={card.genreName} key={card.imgSrc + card.description} />
      ))}
    </div>
  </main>
  )
}

export default Main