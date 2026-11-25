import { Link } from "react-router-dom"
export default function Header(){
    return(
        <div className="flex justify-between h-[111.62px] items-center px-27">
        <h1 className="text-[25.35px] font-extrabold">#VANLIFE</h1>
        <div className="w-[116.6px] flex justify-between">
            <Link to='/about'>About</Link>
            <Link to='/'>Vans</Link>
        </div>
        </div>
    )
}