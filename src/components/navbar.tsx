import { SunMedium } from 'lucide-react'
import React from 'react'

function Navbar():React.ReactElement {
  return (
<nav className='flex items-center gap-92 px-20 p-4 text-white'>
<h1 className="text-2xl font-bold bg-linear-to-r from-orange-300 via-orange-500 to-orange-700 bg-clip-text text-transparent">
  Helen Opute
</h1>
<div className='flex '>
  <ul className='flex gap-6'>
    <li><a href="#home" className='hover:text-orange-500 text-gray-400 text-lg'>About</a></li>
    <li><a href="#about" className='hover:text-orange-500 text-gray-400 text-lg'>Experience</a></li>
    <li><a href="#projects" className='hover:text-orange-500 text-gray-400 text-lg'>Projects</a></li>
    <li><a href="#contact" className='hover:text-orange-500 text-gray-400 text-lg'>Skills</a></li>
    <li><a href="#contact" className='hover:text-orange-500 text-gray-400 text-lg'>Contact</a></li>
  </ul>
</div>
<div>
  <SunMedium size={20} className='cursor-pointer hover:bg-gray-700 '/>
</div>

</nav>
)
}

export default Navbar