import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import ReactPlayer from 'react-player'

function ContentSection() {
    return (
        <div className='grid grid-rows-6  gap-2 grid-cols-5 '>
            <div >
                <Card>
                    <CardHeader className=" m-0 pt-2 relative gap-2">

                        <CardDescription>

                        </CardDescription>

                    </CardHeader>
                </Card>
            </div>

            <Card className='row-span-6 col-span-3  w-auto  bg-white  dark:bg-gray-800 rounded-md shadow p-1'>

                <ReactPlayer url='https://youtu.be/WQdqgrWvy6g?si=QyHyiLejOf6_uA2R' className="rounded-md" width="100%" />

                <CardHeader>
                    <CardTitle> Pakistan vs india ashia cup 23 full match hightlight</CardTitle>
                </CardHeader>

            </Card>

            <div>
                <h1>right bar</h1>
            </div>

        </div>
    )
}

export default ContentSection