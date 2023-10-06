


import { Inter } from 'next/font/google'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sportsbizz',
  description: 'live cricket score ',
}

export default function MatchLayout({ children }) {
  return (
    <div>
  
      {children}
    </div>
  )
}