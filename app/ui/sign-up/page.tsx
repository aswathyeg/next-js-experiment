import Link from "next/link"
export default function SingnupPage(){
    return(
        <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
            <div className="w-full h-screen flex justify-center items-center bg-black opacity-80">
                <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
            <h1 className="text-center text-black font-dark text-4xl bg-white rounded-t-xl m-0 py-4">
                Sign Up
            </h1>
            <form action=""
            className="p-6">
                <input type="text"
                name=""
                placeholder="Full Name"
                className="py-2 px-3 w-full text-black text-lg font-dark outline-darkRed rounded hover:rounded-[16px] "
                />
                <input type="email"
                name=""
                placeholder="E-mail"
                className="py-2 px-3 w-full text-black text-lg font-dark outline-darkRed mt-3 rounded hover:rounded-[16px]"
                />
                <input type="password"
                name=""
                placeholder="Password"
                className="py-2 px-3 w-full text-black text-lg font-dark outline-darkRed mt-3 rounded hover:rounded-[16px]"
                />
                <input type="password"
                name=""
                placeholder="Confirm Password"
                className="py-2 px-3 w-full text-black text-lg font-dark outline-darkRed mt-3 rounded hover:rounded-[16px]"
                />
                
                
                <div className="flex mt-5 justify-between items-center  font-bold py-2 px-8 rounded hover:rounded-[16px]">
                    <Link href="/"
                    className="text-white cursor-pointer 
                    transition hover:text-darkRed"
                    >Already Registered ?</Link>
                    <button type="submit"
                   className="bg-black text-white  py-2 px-8 transition hover:text-darkRed rounded hover:rounded-[16px]" >
                        Sign Up
                    </button>
                </div>
            </form>
            </aside>
            </div>
        </main>
    )
}