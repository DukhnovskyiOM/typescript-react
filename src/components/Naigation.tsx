import {Link} from 'react-router-dom'

export function Navigation() {
    return (
        <nav className="h-[50px] flex text-white justify-between px-5 bg-gray-500 items-center">
            <span className="font-bold">React 2023</span>
            <span>
                <Link to='/' className='mr-2'>Product</Link>
                <Link to='/about'>About</Link>
            </span>
        </nav>
    )
}