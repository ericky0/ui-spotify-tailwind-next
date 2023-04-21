import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BiLibrary } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'

const Sidebar = () => {
  const navItems = [
    {
      label: 'Home',
      icon: <AiFillHome size={26}/>
    },
    {
      label: 'Search',
      icon: <CiSearch size={26} />
    },
    {
      label: 'Your Library',
      icon: <BiLibrary size={26} />
    }
  ]
  const playlistItems = [
    'i miss you',
    'sofrências antigas 😭',
    'funk',
    'rock',
    'só as melhores',
    'lagum',
    'trap',
    'dope musics'
  ]
  return (
    <aside className='w-72 bg-zinc-950 p-6 fixed left-0 h-full'>
    <BsThreeDots size={26}/>
    <nav className='space-y-5 mt-6'>
      {navItems.map((item) => (
        <a href='' key={item.label} className='flex items-center gap-3 text-sm font-semibold text-zinc-300 transition duration-150 hover:brightness-150'>
          {item.icon} {item.label}
        </a>
      ))}
    </nav>

    <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-4'>
        {playlistItems.map((item) => (
          <a href='' key={item} className='text-sm text-zinc-400 transition duration-100 hover:text-zinc-100'>
            {item}
          </a>
        ))}
    </nav>
  </aside>
  )
}

export default Sidebar