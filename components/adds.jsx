import Image from "next/image";
import Link from "next/link";

const AddsPromotion = () => {
    return ( 
        <div className="text-black">
             <div className="flex justify-between">
                <span className="ms-1 pt-4 text-sm font-medium">
                    Follow us
                </span>
              
            </div>
            <div className="rounded-md bg-white pb-0 mt-3  gap-1 border-0 p-3 ">
           <div className="flex justify-between flex-col gap-y-5  p-3">
                  <div >
                    <Link href="https://www.facebook.com/sportsbizzofficial " className="flex gap-3 items-center " >
                  
                   <Image  className="rounded-md" src="/images/Facebook.svg" alt="me" width="33" height="33" />
                    <span>Facebook</span>
                    </Link>
                  </div>
                  <div >
                  <Link href="https://www.instagram.com/sportsbizz_/ " className="flex gap-3 items-center " >
                   <Image  className="rounded-md" src="/images/Instagram.svg" alt="me" width="33" height="33" />
                    <span>Instagram</span>
                    </Link>
                  </div>
                  <div >
                  <Link href=" https://twitter.com/sportsbizz_ " className="flex gap-3 items-center " >
                  <Image  className="rounded-md" src="/images/X.svg" alt="me" width="33" height="33" />                     
                    <span>X</span>
                    </Link>
                  </div>
                  <div >
              <Link href="https://www.youtube.com/channel/UCe3ROA7cvgieDp1wJGqD9LA" className="flex gap-3 items-center " >
                <Image className="rounded-md" src="/images/Youtube.svg" alt="me" width="33" height="33" />
                <span>Youtube</span>
              </Link>
            </div>
                  
                </div>
        </div>
        </div>
      
     );
}
 
export default AddsPromotion;
