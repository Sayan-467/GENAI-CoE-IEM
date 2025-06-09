import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-slate-800 px-4 sm:px-8 md:px-24 py-4 text-white font-normal flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
      <div className='flex justify-center sm:justify-start items-center gap-4'>
        <img className='rounded-full w-10 h-10' src="/logo.jpg" alt="Logo of the GENAI" height={44} width={44} />
        <Link href={"/"}>
          <span className='font-semibold text-lg sm:text-xl'>IEM GENAI-CoE</span>
        </Link>
      </div>
      <div className='text-xs sm:text-sm text-slate-300 text-center'>
        Copyright &copy; 2025 IEM GENAI-CoE || All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
