"use client"

import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Video = ({ data }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return <></>;
    return (
        <div>
            <div className="p-1">
                <h2 className="text-3xl font-bold tracking-tight">Videos</h2>
                <p className="text-sm text-muted-foreground">
                    Short videos of best wicket , short and more
                </p>
            </div>
            <Card>
                <CardHeader>
                    <CardDescription>Entertantment</CardDescription>
                </CardHeader>
                <CardContent className="grid  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">
                    {
                        data?.map((data, index) => (
                            <div key={index} className="">
                                <div className="lg:w-[420.72px] h-[249.6px] ">
                                    <ReactPlayer
                                        url={`${process.env.imageUrl}/public/videos/${data?.video_url}`}
                                        light={`${process.env.imageUrl}/public/thumbnails/${data?.thumbnail_url}`}
                                        playing
                                        width="100%"
                                        height="100%"
                                        controls
                                    />
                                </div>
                                <h3 className="w-auto pt-2">{data.title}</h3>
                            </div>
                        ))
                    }
                </CardContent>
            </Card>

        </div>
    );
}

export default Video;