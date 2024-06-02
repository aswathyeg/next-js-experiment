import Image from "next/image";
import Link from "next/link"
import diary from '@/public/diary-colored.svg'
import lock from '@/public/lock.svg'
export default function IconCard(){
    return(
        <div className=" bg-cover  flex justify-stretch items-center min-h-screen bg-gray-100 bg-pageBg pt-80">
       <div className="fixed bottom-0 left-0 right-0 mx-auto mb-8 max-w-4xl w-full p-8 bg-white shadow-lg rounded-lg">
      {/* <h2 className="text-lg font-bold mb-2">Card Title</h2> */}
      <Image src={lock} alt="icons" className="" width={100} height={50}/>
    </div>
     </div>
    )

}