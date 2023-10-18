import AddsPromotion from '@/components/adds'
import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='container  font-[Satoshi]'>

      <div className="grid grid-cols-6 gap-0">

     <div className=' lg:col-span-4 col-span-6'>
     <div className='pt-5 mb-0 '>
        <h2 className="text-3xl font-bold ">Welcome to SPORTSBIZZ Your Ultimate</h2>
        <p className="text-sm text-muted-foreground">
          Destination for Real-time Cricket Updates!
        </p>
      </div>

      <div className='pt-5 w-[98%] ms-1 gap-4'>
        <p className='mb-5  text-justify text-lg font-normal font-[helvetica, "Segoe UI", Arial, sans-serif]   '>At SPORTSBIZZ, we are passionate about the gentleman's game and committed to delivering the most comprehensive and up-to-date cricket scores, statistics, and analysis to cricket enthusiasts worldwide. Whether you're a die-hard fan or a casual observer, our platform is designed to cater to all your cricketing needs.</p>
      </div>

      <div className='pt-5 w-[98%] ms-1 gap-4'>
        <h2 className="text-2xl font-bold ">Our Mission</h2>
        <p className='mb-5  text-justify  text-lg  font-normal font-[helvetica, "Segoe UI", Arial, sans-serif] '>
          Our mission is simple: to bring the thrill of cricket to your fingertips. We aim to be the go-to source for cricket lovers, offering real-time updates on matches, player performances, team statistics, and much more. We believe that cricket is more than just a sport; it's a way of life for millions of people, and we're here to enhance your cricketing experience.
        </p>
      </div>

      <div className='pt-5 w-[98%] ms-1 gap-4'>
        <h2 className="text-2xl font-bold ">What Sets Us Apart</h2>
        <p className='mb-5  text-justify text-lg font-normal font-[helvetica, "Segoe UI", Arial, sans-serif]   '>
          Real-time Updates: We understand that cricket fans want to stay connected to the game as it happens. That's why we provide real-time scores, ball-by-ball commentary, and live match coverage to keep you in the know.
          <br />
          <br />

          <span className='text-md font-bold '>Comprehensive Coverage:</span> Whether it's international matches, domestic tournaments, or even local leagues, we cover it all. From Test matches to T20 extravaganzas, you'll find it on Cricket Sportsbuzz.
          <br />
          <br />
          <span className='text-md font-bold'>Player Insights:</span> Get detailed information on your favorite cricketers, including their career statistics, records, and recent performances. Stay updated on player transfers and team dynamics.
          <br />
          <br />
          <span className='text-md font-bold'>Interactive Features: </span>Engage with fellow cricket enthusiasts through our forums, polls, and live chat during matches. Share your opinions, predictions, and insights with the cricket community.
          <br />
          <br />
          <span className='text-md font-bold'>User-Friendly Interface:</span> Our website is designed to be user-friendly, ensuring you can access the information you need quickly and easily, whether on your computer or mobile device.
        </p>
      </div>

      <div className='pt-5 w-[98%] ms-1 gap-4'>
        <h2 className="text-2xl font-bold ">Our Team</h2>
        <p className='mb-5  text-justify text-lg font-normal font-[helvetica, "Segoe UI", Arial, sans-serif]   '>
          Our team is a dedicated group of cricket aficionados, statisticians, and technology enthusiasts who share a common passion for the game. We work tirelessly to ensure that Cricket ScoreCast remains your trusted source for all things cricket. Our commitment to accuracy and excellence drives us to provide the best cricketing experience for you.        </p>
      </div>

      <div className='pt-5 w-[98%] ms-1 gap-4'>
        <h2 className="text-2xl font-bold ">Join Us in Celebrating Cricket</h2>
        <p className='mb-5  text-justify text-lg font-normal font-[helvetica, "Segoe UI", Arial, sans-serif]   '>
          We invite you to join us on this exciting journey as we celebrate the highs and lows of cricket, from breathtaking centuries to nail-biting finishes. Whether you're following your favorite team or tracking individual performances, Cricket ScoreCast is here to make your cricketing experience unforgettable.
          <br />
          <br />
          Thank you for choosing ScoreCast as your cricket score and analysis companion. Let's continue to share the joy and excitement of cricket together!
          <br />
          <br />
          Stay Connected. Stay Informed. Stay Cricket Crazy! </p>
      </div>
     </div>
     <div className='lg:col-span-2 col-span-6'>
      <AddsPromotion/>
      <Image className="rounded-md mt-5" src="/images/Cardbanner.webp" alt="me" width="442" height="192" />
     </div>
     
    </div>

    </div>
  )
}

export default About