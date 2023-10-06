import { Button } from '@/components/ui/button'
import React from 'react'
import Billboard from './components/billboard'
import Entertainment from './components/entertainment'

export default function News() {
    return (
        <div className='container'>
          <Billboard/>
          <Entertainment/>
        </div>
    )
}
