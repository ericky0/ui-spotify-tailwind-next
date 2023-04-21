import Image from 'next/image'

interface GenreCardProps {
  imgSrc: string,
  description: string,
  genreName: string
}


const GenreCard = ({imgSrc, description, genreName}: GenreCardProps) => {
  return (
    <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
    <Image src={imgSrc} className='w-full rounded-md' width={102} height={102} alt='album image'/>
    <strong className='font-semibol d'>{description}</strong>
    <span className='text-sm text-zinc-400' >{genreName}</span>
  </a>
  )
}

export default GenreCard