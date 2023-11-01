import getVideo from "@/actions/get-video";
import Video from "./components/vadio";

const Videos = async () => {

const data =  await getVideo()
    return (
    
        <div className=" lg:container w-100 p-1  mt-2 flex   ">
            <Video data={data} />
        </div>
    );
}

export default Videos;