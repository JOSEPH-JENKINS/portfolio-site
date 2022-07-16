import Image from "next/image";
import imageLoader from "../imageLoader";
import { ImageData } from "../types";

const ImageLink = ({src}: ImageData) => {
    return (
        <Image src={src} loader={imageLoader} unoptimized alt="hey" className='object-cover' layout='fill' />
    );
}

export default ImageLink;