"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import Billboard from './components/billboard'
import Entertainment from './components/entertainment'
import getTopStories from '@/actions/get-top-stories';
import { useQuery } from '@tanstack/react-query';

export default function News() {

  const { data: topStories, error: topStoriesError, isLoading: topStoriesLoading } = useQuery(['topStories'], async () => {
    try {
      const topStories = await getTopStories();
      return topStories;
    } catch (error) {
      throw new Error(`Error fetching player score: ${error.message}`);
    }
  });


  console.log("topStories", topStories);
    return (
        <div className='container'>
          <Billboard data={topStories}/>
          <Entertainment data={topStories}/>
        </div>
    )
}