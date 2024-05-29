import Image from "next/image";
import Link from "next/link";
 import landscape from '@/public/landscape.jpg'
import { Navbar } from "../navbar/page";
export function Landing(){
    return(
        <div>
            {/* <h1>Landing</h1>
            <Link href="/ui/login">Login</Link> */}
            <Navbar/>
            <Image src={landscape}
            alt="landscape"
            className='w-full h-full object-cover lg:h-auto' priority/>
        </div>
    )
}