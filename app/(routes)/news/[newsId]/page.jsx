import React from 'react'
import Billboard from '../components/billboard'

export default function NewsDetail() {
  return (
    <div className='container'>
      
      <div className='p-5 mb-0 '> 
      <h2 className="text-3xl font-bold tracking-tight">Shakeel finds opportunity amidst adversity</h2>
      <p className="text-sm text-muted-foreground">
      ICC MEN'S WORLD CUP, 2023
      </p>
    </div>
        <Billboard/>
        <div className='p-5 ms-3 gap-4'>
        <p className='mb-5 text-base font-normal font-[helvetica, "Segoe UI", Arial, sans-serif]  tracking-tight '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, autem sapiente ullam laboriosam qui, nulla explicabo optio doloribus voluptates quo ipsum labore quas tempore. Numquam consequuntur distinctio eum fugit animi?</p>
        <p className='mb-5 text-base   font-[helvetica, "Segoe UI", Arial, sans-serif] tracking-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, autem sapiente ullam laboriosam qui, nulla explicabo optio doloribus voluptates quo ipsum labore quas tempore. Numquam consequuntur distinctio eum fugit animi?</p>
        <p className='mb-5 text-base font-[helvetica, "Segoe UI", Arial, sans-serif] tracking-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, autem sapiente ullam laboriosam qui, nulla explicabo optio doloribus voluptates quo ipsum labore quas tempore. Numquam consequuntur distinctio eum fugit animi?</p>
       
        </div>
        
    </div>
  )
}
