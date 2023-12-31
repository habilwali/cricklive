"use client"

import Navbar from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import FilterButtons from '@/components/filter'
import Footer from '@/components/footer'
import MatchesTab from '@/components/tabs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })




const queryClient = new QueryClient()
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
      
        <Navbar/>
       
 
    
        {children}
      
        <Footer/>
        </QueryClientProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
