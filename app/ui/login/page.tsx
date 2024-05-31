import Link from "next/link"

Link
export default function LoginPage(){
    return(
        <main className="bg-pageBg bg-cover bg-center bg-no-repeat">
            <div className="w-full h-screen flex justify-center items-center bg-black opacity-80">
                <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-black">
            <h1 className="text-center text-black font-dark text-4xl bg-white rounded-t-xl m-0 py-4">
                Log In
            </h1>
            <form action=""
            className="p-6 pb-2">
                <input type="text"
                name=""
                placeholder="Username"
                className="py-2 px-3 w-full text-black text-lg font-dark outline-darkRed rounded hover:rounded-[16px]"
                />
                <input type="password"
                name=""
                placeholder="Password"
                className="py-2 px-3 w-full text-black text-lg font-dark outline-darkRed mt-3
                rounded hover:rounded-[16px]"
                />
                <div className="flex mt-5 justify-between items-center  font-bold py-2 px-8">
                    <Link href="/ui/sign-up"
                    className="text-white cursor-pointer 
                    transition hover:text-darkRed"
                    >Not Yet Registered ?</Link>
                    <button type="submit"
                   className="bg-black text-white  py-2 px-8 transition hover:text-darkRed
                   rounded hover:rounded-[16px]" >
                        Sign In
                    </button>
                </div>
            </form>
            </aside>
            </div>
        </main>
    )
}