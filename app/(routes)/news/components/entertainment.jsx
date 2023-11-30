import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Entertainment({data}) {

    const router = useRouter();
    const handleClick = (matchId) => {
        router.push(`news/${matchId}`);

    };
    return (
        <div className='bg-white  rounded-2xl grid  lg:grid-cols-3'>
            {
               data?.filter((_, index) => index !== 0).map((list, index)=>(
                    <div onClick={() => handleClick(list?.id)} key={index} className=" rounded-lg lg:p-3 p-2 cursor-pointer ">
                    <Image className=" rounded-lg h-[300px]" src={`${process.env.imageUrl}/${list?.imageData}`} width={460} height={347} alt="img" />
                    <div className="text-neutral-700 text-lg font-medium font-['Satoshi']">{list?.hline}</div>
                </div>
                ))
            }
        </div>
    )
}