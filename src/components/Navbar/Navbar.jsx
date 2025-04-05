import Link from "next/link"



function Navbar() {
    return (
        <div className="bg-[#0F1624] sticky top-0 z-10">
            <div className="container mx-auto flex justify-between items-center text-xl  text-white py-10">
                <h1 className="text-2xl font-bold">A.U.portfolio</h1>
                <div className="flex gap-15">
                    <p className="hover:cursor-pointer hover:text-amber-500 transition-transform duration-300 hover:scale-110"><Link href={"/"}>About me</Link></p>
                    <p className="hover:cursor-pointer hover:text-amber-500 transition-transform duration-300 hover:scale-110"><Link href="#Skills">Skill & Tools</Link></p>
                    <Link href={"/Projec"}><p className="hover:cursor-pointer hover:text-amber-500 transition-transform duration-300 hover:scale-110">Projects</p></Link>
                    <Link href="#Footer"><p className="hover:cursor-pointer hover:text-amber-500 transition-transform duration-300 hover:scale-110">Contact me</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar