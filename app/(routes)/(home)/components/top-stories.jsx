import { Star } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import Link from "next/link";
import getTopStories from "@/actions/get-top-stories";
import Image from "next/image";

const TopStories = ({ data }) => {
    return (
        <div className="mt-2">
            <div className="flex justify-between">
                <span className="ms-1 pt-3 dark:text-black text-sm font-medium">
                    Top Stories &#x1F525;
                </span>
                {/* <Button className="me-0 rounded-full bg-[#FFFFFF] text-black  hover:text-white">View More</Button> */}
            </div>
            {
                data?.map((topstories, index) => (
                    <div key={index} className="grid lg:grid-cols-2  rounded-md bg-white pb-5 mt-2 grid-cols-1 gap-2 border-0">
                        <div className=" rounded-lg p-3">
                            <Image className=" rounded-lg" src={`https://cricapp.bingerush.com/${topstories?.imageData}`} width={460} height={347} alt="img" />
                        </div>
                        <div className="flex flex-col dark:text-black  items-center  justify-center " >

                            <div className="lg:w-[441px]  lg:p-1 p-2 flex  flex-col ">
                                <h2 className="text-2xl font-bold tracking-tight">{topstories?.hline}</h2>
                                <p className="text-sm text-muted-foreground">
                                    {topstories?.intro
                                    }
                                </p>
                            </div>
                        </div>


                    </div>
                ))
            }




        </div>
    );
}

export default TopStories;