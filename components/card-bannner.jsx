
"use client"
import Image from "next/image";

const CardBanner = () => {

    const loaderProp = ({ src }) => {
        return src;
    }
    return (
        <Image className="rounded-md mt-5" src="/images/cardbanner.webp" loader={loaderProp} alt="me" width="442" height="392" />
    );
}

export default CardBanner;