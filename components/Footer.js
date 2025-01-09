import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-slate-800 h-[12vh] px-24 py-3 text-white font-normal flex justify-between items-center'>
      <div className='flex justify-start items-center gap-6'>
          <img className='rounded-full' src="/logo.jpg" alt="Logo of the GENAI" height={44} width={44} />
        <Link href={"/"}>
          <span className='font-semibold text-xl'>IEM GENAI-CoE</span>
        </Link>
      </div>
      <div className='text-sm text-slate-300'>
        Copyright &copy; 2025 IEM GENAI-CoE || All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
