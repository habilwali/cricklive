import { Star } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import Link from "next/link";

const FeatureVideos = () => {
    return (
        <div className="mt-5">
                <div className="rounded-md bg-[#022FF8] pb-0 mt-5  gap-1 border-0 p-3 ">
                <div className="flex justify-between   p-3">
                    <span className="ms-1 pt-3 text-sm text-white font-medium">
                        Feature Videos &#x1F525;
                    </span>
                    <Button className="me-2 rounded-full bg-[#FFFFFF] text-black  hover:text-white">View More</Button>
                </div>
            <div className="grid lg:grid-cols-2 grid-cols-1  ">
            
              
                <div className=" rounded-lg p-2 ">
                    <iframe width="100%" height="347" className=" rounded-lg" src="https://www.youtube.com/embed/keg_2PlBnbY?si=WEaH38cMocg9IP09" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                    <h1 className=" font-medium text-md mt-2 p-2 text-center   text-white ">
                        Supper 4 | Pakistan vs India
                    </h1>
                </div>
                <div className=" rounded-lg p-2 ">
                    <iframe width="100%" height="347" className=" rounded-lg" src="https://www.youtube.com/embed/keg_2PlBnbY?si=WEaH38cMocg9IP09" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <h1 className=" font-medium text-md mt-2 text-center   p-2  text-white ">
                        Pakistan cricket team  confirms squard for Icc Men's Odi World Cup 2023 in india
                    </h1>
                </div>





            </div>

            </div>

        </div>
    );
}

export default FeatureVideos;